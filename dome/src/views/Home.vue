<!--
 * @Author: your name
 * @Date: 2020-12-26 20:57:39
 * @LastEditTime: 2020-12-26 21:10:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dome - 带自适应布局\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="home_box"></div>
    <router-view name="home_router"></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.home {
  .home_box {
    width: 100px;
    height: 100px;
    background: red;
  }
}
</style>