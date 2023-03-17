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
  </article>
</template>

<style lang="less" scoped>
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
</style>