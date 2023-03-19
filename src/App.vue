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
  // height: 9999px;
  margin: 0 auto;
}

// 媒体查询语句的顺序很重要，应该按照从小到大的顺序进行排列。
@media screen and (max-width: 730px) {
  .container {
    max-width: 366px;
  }
}

@media (min-width: 730px) and (max-width: 1070px) {
  .container {
    width: 692px;
  }
}

@media screen and (min-width: 1070px) {
  .container {
    width: 980px;
  }
}
</style>
