<script setup>
    
</script>

<template>
    <aside></aside>
    <h1 class="topic-category">
        文章列表
    </h1>
    <ul class="article_list">
        <li class="article_item">
            <img class="article_logo" src="https://www.apple.com.cn/newsroom/images/apple-logo_black.jpg.landing-big.jpg">
            <div class="article_info">
                <div class="head">
                    <div class="category">新闻稿</div>
                    <div class="title">Apple 公布第一季度业绩</div>
                </div>
                <div class="date">2023 年 3 月 12 日</div>
            </div>
        </li>
        <li class="article_item">
            <img class="article_logo" src="https://www.apple.com.cn/newsroom/images/product/services/standard/Apple-Global-Volunteer-Program-hero.jpg.landing-regular_2x.jpg">
            <div class="article_info">
                <div class="head">
                    <div class="category">新闻稿</div>
                    <div class="title">Apple 公布第一季度业绩</div>
                </div>
                <div class="date">2023 年 2 月 3 日</div>
            </div>
        </li>
        <li class="article_item">
            <img class="article_logo" src="https://www.apple.com.cn/newsroom/images/product/services/standard/Apple-Global-Volunteer-Program-hero.jpg.landing-regular_2x.jpg">
            <div class="article_info">
                <div class="head">
                    <div class="category">新闻稿</div>
                    <div class="title">iPhone 14 Pro 与 iPhone 14 Pro Max 供应情况更新</div>
                </div>
                <div class="date">2023 年 2 月 3 日</div>
            </div>
        </li>
        <li class="article_item">
            <img class="article_logo" src="https://www.apple.com.cn/newsroom/images/product/services/standard/Apple-Global-Volunteer-Program-hero.jpg.landing-regular_2x.jpg">
            <div class="article_info">
                <div class="head">
                    <div class="category">新闻稿</div>
                    <div class="title">iPhone 14 Pro 与 iPhone 14 Pro Max 供应情况更新</div>
                </div>
                <div class="date">2023 年 2 月 3 日</div>
            </div>
        </li>
    </ul>
</template>

<style lang="less" scoped>
.topic-category {
    font-size: 32px;
    line-height: 1.125;
    font-weight: 700;
    letter-spacing: .004em;
    font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
    margin-bottom: 24px;
}
.article_list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    .article_item {
            display: flex;
            width: 303px;
            margin-top: 36px;
            background-color: #fff;
            border-radius: 16px;
            overflow: hidden;
            flex-direction: column;
            .article_logo {
                width: 100%;
                height: 170px;
                min-height: auto;
                flex-basis: auto;
                flex-shrink: 1;
            }
            .article_info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-shrink: 0;
                flex-grow: 1;
                flex-basis: auto;
                padding: 24px;
                .head {
                    .category {
                        font-size: 12px;
                        line-height: 1.33337;
                        font-weight: 700;
                        font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                        color: #6e6e73;
                        margin-bottom: 4px;
                    }
                    .title {
                        font-size: 19px;
                        line-height: 1.21053;
                        font-weight: 700;
                        letter-spacing: .012em;
                        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
                        overflow: hidden;
                    }
                }
                .date {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.28577;
                    font-weight: 600;
                    color: #6e6e73;
                    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                }
            }
    }
    .article_item:first-child {
        margin-top: 0;
    }
}
@media screen and (min-width: 1070px) {
    .article_list {
        .article_item:first-child {
            width: 100%;
            display: flex;
            flex-direction: row;
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
                        color: #6e6e73;
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
        .article_item:not(:first-child) {
            display: flex;
            width: 303px;
            margin-top: 36px;
            background-color: #fff;
            border-radius: 16px;
            overflow: hidden;
            flex-direction: column;
            .article_logo {
                width: 100%;
                height: 170px;
                min-height: auto;
                flex-basis: auto;
                flex-shrink: 1;
            }
            .article_info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-shrink: 0;
                flex-grow: 1;
                flex-basis: auto;
                padding: 24px;
                .head {
                    .category {
                        font-size: 12px;
                        line-height: 1.33337;
                        font-weight: 700;
                        font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                        color: #6e6e73;
                        margin-bottom: 4px;
                    }
                    .title {
                        font-size: 19px;
                        line-height: 1.21053;
                        font-weight: 700;
                        letter-spacing: .012em;
                        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
                        overflow: hidden;
                    }
                }
                .date {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.28577;
                    font-weight: 600;
                    color: #6e6e73;
                    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                }
            }
        }
    }
}

@media only screen and (max-width: 1070px) {
    .article_list {
        .article_item {
            display: flex;
            width: 303px;
            margin-top: 36px;
            background-color: #fff;
            border-radius: 16px;
            overflow: hidden;
            flex-direction: column;
            .article_logo {
                width: 100%;
                height: 170px;
                min-height: auto;
                flex-basis: auto;
                flex-shrink: 1;
            }
            .article_info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-shrink: 0;
                flex-grow: 1;
                flex-basis: auto;
                padding: 24px;
                .head {
                    .category {
                        font-size: 12px;
                        line-height: 1.33337;
                        font-weight: 700;
                        font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                        color: #6e6e73;
                        margin-bottom: 4px;
                    }
                    .title {
                        font-size: 19px;
                        line-height: 1.21053;
                        font-weight: 700;
                        letter-spacing: .012em;
                        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
                        overflow: hidden;
                    }
                }
                .date {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.28577;
                    font-weight: 600;
                    color: #6e6e73;
                    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                }
            }
        }
    }
}

@media screen and (max-width: 730px) {
    .article_list {
        .article_item {
            display: flex;
            flex-basis: 100%;
            margin-top: 36px;
            background-color: #fff;
            border-radius: 16px;
            overflow: hidden;
            flex-direction: column;
            .article_logo {
                width: 100%;
                height: 205.88px;
                min-height: auto;
                flex-basis: auto;
                flex-shrink: 1;
            }
            .article_info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-shrink: 0;
                flex-grow: 1;
                flex-basis: auto;
                padding: 24px;
                .head {
                    .category {
                        font-size: 12px;
                        line-height: 1.33337;
                        font-weight: 700;
                        font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                        color: #6e6e73;
                        margin-bottom: 4px;
                    }
                    .title {
                        font-size: 19px;
                        line-height: 1.21053;
                        font-weight: 700;
                        letter-spacing: .012em;
                        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
                        overflow: hidden;
                    }
                }
                .date {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.28577;
                    font-weight: 600;
                    color: #6e6e73;
                    font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
                }
            }
        }
    }
}
</style>

