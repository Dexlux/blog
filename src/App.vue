<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/layouts/Nav.vue'
</script>

<template>
  <Nav />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 980px;
  height: 9999px;
  margin: 0 auto;
}
</style>
