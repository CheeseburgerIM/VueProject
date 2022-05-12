<template>
  <div id="JXXZ">
    <h1>
      From
      <a href="https://github.com/Lavender-z/demo" target="_blank">Lavender-z/demo</a>
    </h1>
    <h2>
      <a href="https://space.bilibili.com/91587702" target="_blank">Bilibili</a> &
      <a href="https://github.com/CheeseburgerIM/FrontEnd_Lavender-z_demo" target="_blank"
        >Github</a
      >
    </h2>
    <h3>
      <a href="https://cheeseburgerim.github.io/FrontEnd_Lavender-z_demo/" target="_blank"
        >每天一个不会秃头的前端案例</a
      >
    </h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "JXXZ",
  components: {},
};
</script>

<style>
#JXXZ h1,
#JXXZ h2,
#JXXZ h3 {
  text-align: center;
}
#JXXZ a {
  text-decoration: none;
  border-bottom: 3px solid #007aff;
  padding: 7px 14px;
  margin: 7px;
  border-radius: 7px;
  transition: 0.3s;
  color: #000;
}
#JXXZ a:hover {
  text-decoration: none;
  background: #007aff;
  color: #fff;
}
</style>
