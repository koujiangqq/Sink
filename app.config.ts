export default defineAppConfig({
  title: '短短好用',
  description: '一个简单快速，具有分析功能的短链接生成工具',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    '仪表板',
  ],
})
