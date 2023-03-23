<script setup>
</script>

<template>
    <ul class="article_list">
        <h2 class="main_title">最新文章</h2>
        <li class="article_item">
            <img class="article_img" src="https://www.apple.com.cn/newsroom/images/product/app-store/Apple-women-developers-apps-games-hero.jpg.landing-regular.jpg" alt="">
            <div class="article_info">
                <div class="category">特写</div>
                <div class="title">四位女性通过 app 与游戏推动文化发展并创造改变</div>
                <div class="date">2023 年 3 月 14 日</div>
            </div>
        </li>
        <li class="article_item">
            <img class="article_img" src="https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-iPhone-14-Plus-yellow-2up-230307.jpg.landing-regular.jpg" alt="">
            <div class="article_info">
                <div class="category">特写</div>
                <div class="title">你好，黄色！Apple 推出新款 iPhone 14 和 iPhone 14 Plus</div>
                <div class="date">2023 年 3 月 14 日</div>
            </div>
        </li>
        <li class="article_item">
            <img class="article_img" src="https://www.apple.com.cn/newsroom/images/product/app-store/Apple-women-developers-apps-games-hero.jpg.landing-regular.jpg" alt="">
            <div class="article_info">
                <div class="category">特写</div>
                <div class="title">四位女性通过 app 与游戏推动文化发展并创造改变</div>
                <div class="date">2023 年 3 月 14 日</div>
            </div>
        </li>
    </ul>
</template>

<style lang="less" scoped>
    .article_list {
        font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
        border-top: 1px solid #d2d2d7;
        padding-top: 52px;
        margin: auto;
        width: 653px;
        .main_title {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 700;
            letter-spacing: .009em;
        }
        .article_item {
            border-bottom: 1px solid #d2d2d7;
            padding-bottom: 32px;
            padding-top: 32px;
            display: flex;
            cursor: pointer;
            .article_img {
                overflow: hidden;
                margin-right: 24px;
                width: 171px;
                border-radius: 10px;
                transition: all .3s;
            }
            .article_info {
                .category {
                    font-size: 12px;
                    line-height: 1.33337;
                    font-weight: 600;
                    color: #6e6e73;
                    margin-bottom: 4px;
                    text-transform: uppercase;
                }
                .title {     
                    font-size: 19px;
                    line-height: 1.21053;
                    font-weight: 700;
                    letter-spacing: .012em;
                    color: #1d1d1f;
                }
                .date {
                    font-size: 14px;
                    line-height: 1.28577;
                    font-weight: 600;
                    color: #6e6e73;
                    margin-top: 8px;
                }
            }
        }
        .article_item:hover {
            .article_img {
                transform: scale(1.1);
                filter: grayscale(50%);
            }
        }
    }
</style>

