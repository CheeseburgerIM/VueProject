<template>
  <div id="index">
    <div id="ButtonContainer">
      <a v-for="a in array" :key="a" :href="urlPrefix + a" target="_blank">{{ a }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      urlPrefix: "https://cheeseburgerim.github.io/FrontEnd_Lavender-z_demo/",
      array: [
        "404页面（css）",
        "Blog顶置卡片设计（css+js）",
        "To-Do-List设计（css+js）",
        "一个动态的文字框动画（css）",
        "一个很有趣的动态背景（css+js）",
        "一个有趣的鬼魂动画（css+js）",
        "利用 css-doodle 库绘制动画（css）",
        "加载页面动画Ⅰ（css）",
        "加载页面动画Ⅱ（css）",
        "加载页面动画Ⅳ（css）",
        "加载页面动画Ⅴ（css+js）",
        "卡片式图片展示（css+js）",
        "卡片翻转时钟（css+js）",
        "咖啡选择（css+js）",
        "哔哩哔哩banner（css+js）/春",
        "哔哩哔哩banner（css+js）/秋",
        "哔哩哔哩banner（css+js）/冬",
        "哭泣动画（css）",
        "图片切换（css）",
        "图片展示效果（css+js）",
        "图片展示（css+js）",
        "图片（相册）展示设计Ⅱ（css）",
        "图片（相册）展示设计Ⅲ（css）",
        "图片（相册）展示设计Ⅳ（css）",
        "图片（相册）展示设计Ⅴ（css）",
        "图片（相册）展示设计Ⅵ（css）",
        "图片（相册）展示设计Ⅶ（css）",
        "图片（相册）展示设计Ⅷ（css）",
        "图片（相册）展示设计（css+js）",
        "在网页底部养鱼（css+js）",
        "小女孩跳绳动画（css）",
        "悬停时有旋转效果的图标（css+js）",
        "手风琴相册设计（css）",
        "搜索框设计（css+js）",
        "文本变形动画（css+js）",
        "文章图片缩略展示Ⅰ（css+js）",
        "旋转菜单（css）",
        "日历便签设计（css+js）",
        "早安、晚安动画（css+js）",
        "注册登录界面Ⅰ（css+js）",
        "注册登录界面Ⅱ（css+js）",
        "火柴盒动画（css）",
        "烟花特效（css+js）",
        "照片旋转滑动展示（css+js）",
        "照片翻转滑动展示（css+js）",
        "睡觉的熊动画（css）",
        "窗边风景动画（css+js）",
        "蜡烛吹灭动画（css）",
        "随机创建 css 图案页面（css+js）",
        "雨特效（css+js）",
      ],
    };
  },
};
</script>

<style scoped>
#ButtonContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
