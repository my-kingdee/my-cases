# 案例库

项目实施与开发经验分享，所有案例均已脱敏处理。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 添加新案例

1. 复制 `docs/cases/_template.md` 为新文件
2. 填写案例内容
3. 在 `docs/cases/index.md` 中添加链接
4. 提交并推送，GitHub Actions 会自动部署

## 目录结构

```
docs/
├── index.md              # 首页
├── about.md              # 关于页面
├── cases/
│   ├── index.md          # 案例列表
│   ├── _template.md      # 案例模板
│   └── *.md              # 各个案例
└── .vitepress/
    └── config.mts        # VitePress配置
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

访问地址: https://my-kingdee.github.io
