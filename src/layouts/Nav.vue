<script setup>

</script>

<template>
    <nav>
        <div class="content">
            Article
        </div>
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
    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    height: 3.05882rem;
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: saturate(180%) blur(20px);
    .content {
        box-sizing: content-box;
        margin: 0 auto;
        max-width: 980px;
        z-index: 2;
        
        font-size: 21px;
        line-height: 52px;
        font-weight: 600;
        letter-spacing: .011em;
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
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

@media only screen and (max-width: 1070px) {
  nav .content {
    // width: 320px;
  }
}

@media screen and (max-width: 730px) {
  nav .content {
    // width: 320px;
  }
}
</style>