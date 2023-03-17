<script setup lang="ts">
</script>

<template>
    <!-- 导航栏 -->
  <nav>
    <div class="item">首页</div>
    <RouterLink to="/article" class="item" >文章</RouterLink>
    <div class="item">留言板</div>
    <div class="item">个人介绍</div>
  </nav>
</template>

<style lang="less" scoped>

nav {
  position: fixed;
  top: 50px;
  left: 50px;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>