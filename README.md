# Personal Knowledge Site

一个用于个人技术文档、研究笔记、实习复盘和长期想法维护的 Astro + Starlight + MDX 站点。

## 本地开发

```bash
npm install
npm run dev
```

开发服务器默认运行在：

```text
http://127.0.0.1:4321/
```

## 写文章

内容都放在 `src/content/docs/`：

```text
research/      论文阅读、模型理解、研究问题
engineering/   工程日志、系统设计、调试记录
internship/    实习复盘、项目经验
ideas/         研究直觉、想法池
essays/        长文、方法论、个人判断
```

文章可以用 `.mdx`，需要特殊版式时从 `src/components/` 引入组件。

## 构建

```bash
npm run build
npm run preview
```

## GitHub Pages

`.github/workflows/deploy.yml` 会在 push 到 `main` 后构建 `dist/` 并部署到 GitHub Pages。

发布前检查：

- GitHub 用户名当前已设置为 `Yaxin9Luo`。
- 在 GitHub 仓库设置里把 Pages source 设成 GitHub Actions。
- 如果使用自定义域名，可以在 workflow 或仓库环境变量中设置 `SITE` / `BASE_PATH`。
