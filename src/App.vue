<template>
  <div id="main">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: { FooterGuide },
};
</script>

<style lang="less" scoped>
#main {
  height: 100%;
  background: #f5f5f5;
}
</style>
