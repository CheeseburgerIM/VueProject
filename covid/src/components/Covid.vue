<template>
  <div id="Covid">
    <div id="nav">
      <el-row>
        <el-button
          type="primary"
          icon="el-icon-user"
          circle
          @click="RoundButton('all')"
        ></el-button>
        <el-button type="success" round @click="RoundButton('present')"
          >Present</el-button
        >
        <el-button type="info" round @click="RoundButton('absent')">Absent</el-button>
        <el-button
          type="danger"
          icon="el-icon-refresh"
          circle
          @click="RefreshConfirm"
        ></el-button>
      </el-row>
    </div>
    <el-table
      :data="student"
      border
      :default-sort="{ prop: 'name', order: 'descending' }"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="70"> </el-table-column>
      <el-table-column prop="state" label="状态" width="70"> </el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="SignIn(scope.row)" type="text" size="small">签到</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Covid",
  methods: {
    async api(method, url, data) {
      const domain = "https://covidapi.cheeseburgerim.space";
      const axios = require("axios");
      const _this = this;

      var config = {
        method: method,
        url: domain + url,
        data,
      };

      if (method === "post") config.data = data;
      const prefix = "/student/api";
      if (
        url === prefix + "/get/all" ||
        url === prefix + "/get/home" ||
        url === prefix + "/get/absent" ||
        url === prefix + "/get/present"
      ) {
        await axios(config)
          .then((response) => {
            let data = response.data;
            _this.student = data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (url === prefix + "/modify/state") {
        await axios(config)
          .then((response) => {})
          .catch((error) => {
            console.log(error);
          });
      } else if (url === prefix + "/refresh") {
        await axios(config)
          .then((response) => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    RoundButton(parameter) {
      switch (parameter) {
        case "all":
          this.api("get", "/student/api/get/all", null);
          break;
        case "present":
          this.api("get", "/student/api/get/present", null);
          break;
        case "absent":
          this.api("get", "/student/api/get/absent", null);
          break;
        default:
          break;
      }
    },
    RefreshConfirm() {
      this.$confirm("重置系统数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "pyz-confirm",
      })
        .then(() => {
          this.api("get", "/student/api/refresh", null);
          setTimeout(function () {
            location.reload();
          }, 1000);
        })
        .catch(() => {});
    },
    SignIn(row) {
      if (row.state != -1) {
        let fd = new FormData();
        fd.append("name", row.name);
        fd.append("state", 1);
        this.api("post", "/student/api/modify/state", fd);
      }
    },
  },
  data() {
    return {
      student: [],
    };
  },
  mounted() {
    this.api("get", "/student/api/get/absent", null);
  },
};
</script>

<style>
.pyz-confirm {
  max-width: 90%;
}
</style>
<style scoped>
#Covid {
  padding-bottom: 70px;
}
#nav {
  position: fixed;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #007aff;
  top: 0;
  background: #fff;
  display: flex;
  z-index: 14;
  align-items: center;
  justify-content: center;
}
.el-table {
  border: 2px solid #ffffff;
  border-radius: 7px;
  transition: 0.3s;
  margin: auto;
  top: 50px;
  max-width: 90%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
}
.el-table:hover {
  border-color: #007aff;
}
</style>
