import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

// Teek 主题配置
const teekConfig = defineTeekConfig({
  // 文章信息配置
  post: {
    showDate: true, // 显示日期
    showCategory: true, // 显示分类
    showTag: true, // 显示标签
  },
  // 首页文章列表分页配置
  page: {
    pageSize: 20, // 每页显示数量
  },
  // 分类卡片配置
  category: {
    enabled: true, // 启用分类卡片
    path: '/categories', // 分类页路径
    limit: 20, // 首页显示数量
  },
  // 标签卡片配置
  tag: {
    enabled: true, // 启用标签卡片
    path: '/tags', // 标签页路径
    limit: 20, // 首页显示数量
  },
})

export default defineConfig({
  extends: teekConfig,
  title: '案例库',
  description: '项目实施与开发经验分享',
  base: '/my-cases/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '全部案例', link: '/cases/' },
      { text: '归档', link: '/archives' },
      { text: '分类', link: '/categories' },
      { text: '标签', link: '/tags' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/cases/': [
        {
          text: '案例列表',
          items: [
            { text: 'ERP实施', link: '/cases/#erp-implementation' },
            { text: 'SaaS开发', link: '/cases/#saas-development' },
            { text: '数据迁移', link: '/cases/#data-migration' },
            { text: '系统集成', link: '/cases/#system-integration' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/my-kingdee/my-cases' }
    ],

    footer: {
      message: '案例库 - 脱敏后的项目经验分享',
      copyright: '© 2026 my-kingdee'
    },

    search: {
      provider: 'local'
    }
  }
})
