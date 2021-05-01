module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 设计稿宽度
      viewportHeight: 667, // 设计稿高度，可以不指定
      unitPrecision: 5, // px to vw无法整除时，保留几位小数
      viewportUnit: 'vw', // 转换成vw单位
      selectorBlackList: ['.ignore'], // 不转换的类名
      minPixelValue: 0.1, // 小于1px不转换
      mediaQuery: false, // 允许媒体查询中转换
      exclude:[/TabBar.vue/,/TabbarItem.vue/,/GridView.vue/,/category/]
    }
  }
}