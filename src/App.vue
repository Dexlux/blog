<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 0 20%;
  color: #fff;
  background: linear-gradient(#764ba2, #667eea);
}
</style>
