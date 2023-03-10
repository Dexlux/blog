<script setup>
    
</script>

<template>
    <ul class="article_list">
        <li class="article_item">
            <img class="article_logo" src="https://www.apple.com.cn/newsroom/images/apple-logo_black.jpg.landing-big.jpg">
            <div class="article_info">
                <div class="head">
                    <div class="category">新闻稿</div>
                    <div class="title">Apple 公布第一季度业绩</div>
                </div>
                <div class="date">2023 年 2 月 3 日</div>
            </div>
        </li>
    </ul>
</template>

<style lang="less" scoped>
.article_list {
    .article_item {
        display: flex;
        background-color: #fff;
        border-radius: 16px;
        overflow: hidden;
        .article_logo {
            width: 100%;
            height: auto;
            min-height: 362px;
            flex-shrink: 1;
            flex-basis: 643px;
        }
        .article_info {
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: 0;
            .head {
                .category {
                    font-size: 12px;
                    line-height: 1.33337;
                    font-weight: 700;
                }
                .title {
                    color: #1d1d1f;
                    font-size: 32px;
                    line-height: 1.125;
                    font-weight: 700;
                    letter-spacing: .004em;
                    font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                }
            }
            .date {
                color: #6e6e73;
                font-size: 14px;
                line-height: 1.28577;
                font-weight: 600;
                font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }
    }
}
</style>

