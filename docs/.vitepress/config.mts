import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

// Teek 主题配置
const teekConfig = defineTeekConfig({
  // Banner 配置
  banner: {
    enabled: true,
    bgStyle: 'partImg', // 局部图片背景
    imgSrc: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // 数据分析
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', // 科技办公
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80', // 仪表盘
    ],
    imgInterval: 8000, // 8秒切换
    imgShuffle: true, // 随机切换
    mask: true,
    maskBg: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ffffff',
    descStyle: 'types', // 打字机动画效果
    description: [
      '专注金蝶ERP实施与二次开发',
      '真实项目案例，助力企业数字化转型',
      '从调研到上线，全流程实战经验',
    ],
    typesInTime: 150,
    typesOutTime: 80,
    typesNextTime: 1500,
    typesShuffle: true,
  },

  // 博主信息配置
  blogger: {
    name: 'Neal',
    slogan: 'ERP实施顾问 & 全栈开发者',
    avatar: 'https://avatars.githubusercontent.com/u/12345678', // 可替换为真实头像
    shape: 'circle-rotate', // 圆形头像，鼠标悬停旋转
  },

  // 文章信息配置
  post: {
    showDate: true,
    showCategory: true,
    showTag: true,
    postStyle: 'card', // 卡片风格
    showCapture: true, // 显示摘要
    transition: true, // 过渡动画
  },

  // 精选文章配置
  topArticle: {
    enabled: true,
    limit: 5,
    dateFormat: 'yyyy-MM-dd',
  },

  // 首页文章列表分页配置
  page: {
    pageSize: 10,
  },

  // 分类卡片配置
  category: {
    enabled: true,
    path: '/categories',
    limit: 10,
    autoPage: true,
    pageSpeed: 5000,
  },

  // 标签卡片配置
  tag: {
    enabled: true,
    path: '/tags',
    limit: 21,
    autoPage: true,
    pageSpeed: 5000,
  },

  // 站点信息卡片配置
  docAnalysis: {
    enabled: true,
    createTime: '2024-01-01',
  },

  // 页面过渡动画
  windowTransition: true,
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
