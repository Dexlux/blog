<script>
export default {

}
</script>

<template>
  <article>
    <div class="eyebrow">
      <div class="category">
        新闻稿
      </div>
      <div class="date">
        2023 年 3 月 7 日
      </div>
    </div>
    <div class="title">
      <h1 class="main_title">你好，黄色！Apple 推出新款 iPhone 14 和 iPhone 14 Plus</h1>
      <h2 class="sub_title">iPhone 14 系列产品新增美观的黄色配色，具备出类拔萃的电池续航能力、可拍摄专业级照片及视频的强大双摄系统及车祸检测等开创性安全功能</h2>
    </div>
    <hr>
    <div class="content">
      <p>“在继续应对挑战性环境的同时，我们很自豪能推出迄今最出色的产品和服务。与以往一样，我们继续致力于放眼长远，在一切行动中贯彻我们的价值观。”Apple CEO Tim Cook 表示，
        “在 12 月季度，我们达成了一项里程碑式的成就：我们很高兴地宣布，我们的活跃设备现有使用量已经突破 20 亿大关。”</p>
      <p>“我们的服务业务营收创下历史新高，达 208 亿美元。尽管宏观经济环境不景气且供应严重受限，按固定汇率计算的公司营收仍然有所增长。”Apple CFO Luca Maestri 表示，“我们本季度创造了 340 亿美元的经营现金流，向股东返还了超过 250 亿美元，并继续投资支持我们的长期增长计划。”</p>
      <p>“我们的服务业务营收创下历史新高，达 208 亿美元。尽管宏观经济环境不景气且供应严重受限，按固定汇率计算的公司营收仍然有所增长。”Apple CFO Luca Maestri 表示，“我们本季度创造了 340 亿美元的经营现金流，向股东返还了超过 250 亿美元，并继续投资支持我们的长期增长计划。”</p>
      <!-- <img src="https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-iPhone-14-Plus-yellow-2up-230307_inline.jpg.large.jpg" alt=""> -->
      <img src="https://www.apple.com.cn/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-color-lineup-230307_big.jpg.large.jpg" alt="">
    </div>
  </article>
</template>

<style lang="less" scoped>
@media screen and (max-width: 730px) {
  .title {
    letter-spacing: 0em;
    font-family: 'SF Pro SC', 'SF Pro Display', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
      'Helvetica', 'Arial', sans-serif;
    .main_title {
      font-size: 40px;
      line-height: 1.1;
      font-weight: 700;
    }
    .sub_title {
      font-size: 21px;
      line-height: 1.19048;
      font-weight: 500;
      letter-spacing: 0.011em;
    }
  }
  .content {
    p {
      font-family: 'SF Pro SC', 'SF Pro Display', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      font-size: 17px;
      line-height: 1.47059;
      font-weight: 400;
      letter-spacing: 0.012em;
      margin-bottom: 1.4211em;
    }
    img {
      width: 100%;
    }
  }
}

@media (min-width: 730px) and (max-width: 1070px) {
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
            font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
            color: #6e6e73;
            margin-bottom: 4px;
          }
          .title {
            font-size: 19px;
            line-height: 1.21053;
            font-weight: 700;
            letter-spacing: 0.012em;
            font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial',
              sans-serif;
            overflow: hidden;
          }
        }
        .date {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 600;
          color: #6e6e73;
          font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
        }
      }
    }
    li:nth-child(2) .article_item {
      margin-top: 0;
    }
  }
}

@media screen and (min-width: 1070px) {
  article {
    width: 653px;
  }
}

article {
  margin: 0 auto;

  .eyebrow {
    color: #6e6e73;
    .category {
      font-size: 12px;
      line-height: 1.33337;
      font-weight: 700;
      text-transform: uppercase;
    }
    .date {
      font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      font-size: 14px;
      line-height: 1.28577;
      font-weight: 600;
    }
  }
  .title {
    letter-spacing: 0em;
    font-family: 'SF Pro SC', 'SF Pro Display', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
      'Helvetica', 'Arial', sans-serif;
    .main_title {
      font-size: 48px;
      line-height: 1.08349;
      font-weight: 700;
    }
    .sub_title {
      font-size: 24px;
      line-height: 1.16667;
      font-weight: 500;
      letter-spacing: 0.009em;
    }
  }
  hr {
    border-top: 1px solid #d2d2d7;
    margin: 36px auto 50px;
  }
  .content {
    p {
      font-family: 'SF Pro SC', 'SF Pro Display', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      font-size: 19px;
      line-height: 1.4211;
      font-weight: 400;
      letter-spacing: 0.012em;
      margin-bottom: 1.4211em;
    }
    img {
      width: 100%;
    }
  }
}
</style>