<script setup>

</script>

<template>
  <nav>
    <span class="content">
      <router-link to="article" class="title">Article</router-link>
    </span>
  </nav>
  <aside></aside>
</template>

<style lang="less" scoped>
nav {
  position: sticky;
  top: 0;
  width: 100%;
  height: 52px;
  // min-width: 1024px;
  z-index: 9997;
  font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
  height: 3.05882rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  .content {
    display: block;
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 980px;
    z-index: 2;
    .title {
      color: #1d1d1f;
      transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
      font-size: 21px;
      line-height: 52px;
      font-weight: 600;
      letter-spacing: 0.011em;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial',
        sans-serif;
    }
  }
}
aside {
  padding-top: 16px;
  padding-bottom: 24px;
}

@supports (padding: calc(max(0px))) {
  nav .content {
    padding-left: calc(max(22px, env(safe-area-inset-left)));
    padding-right: calc(max(22px, env(safe-area-inset-right)));
  }
}

@media screen and (max-width: 730px) {
  nav .content {
    // width: 320px;
  }
}

@media only screen and (min-width: 1070px) {
  nav .content {
    // width: 320px;
  }
}
</style>