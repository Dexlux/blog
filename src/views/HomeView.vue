<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!-- 导航栏 -->
  <nav>
    <div class="item">首页</div>
    <div class="item">文章</div>
    <div class="item">留言板</div>
    <div class="item">个人介绍</div>
  </nav>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#764ba2, #667eea);
}

nav {
  position: fixed;
  top: 50px;
  left: 50px;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: #fff;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>