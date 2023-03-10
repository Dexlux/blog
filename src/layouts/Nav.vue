<script setup>

</script>

<template>
    <nav>
        <div class="content">
            Article
        </div>
    </nav>
</template>

<style lang="less" scoped>
nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    min-width: 1024px;
    z-index: 9997;
    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    height: 3.05882rem;
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: saturate(180%) blur(20px);
}
.content {
    margin: 0 auto;
    max-width: 980px;
    z-index: 2;
    padding-left: calc(max(22px, env(safe-area-inset-left)));
    padding-right: calc(max(22px, env(safe-area-inset-right)));
    
    font-size: 21px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: .011em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}
</style>