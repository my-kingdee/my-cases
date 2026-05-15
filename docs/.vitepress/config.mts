import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '案例库',
  description: '项目实施与开发经验分享',
  base: '/mykingdee.github.io/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '全部案例', link: '/cases/' },
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
      { icon: 'github', link: 'https://github.com/my-kingdee/mykingdee.github.io' }
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
