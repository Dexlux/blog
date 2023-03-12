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
  height: 9999px;
  margin: 0 auto;
}

@media screen and (min-width: 1070px) {
  .container {
    width: 980px;
  }
}

@media only screen and (max-width: 1070px) {
  .container {
    width: 692px;
  }
}

@media screen and (max-width: 730px) {
  .container {
    max-width: 366px;
  }
}
</style>
