import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'Yaxin9Luo';
const repositoryName = repository.split('/')[1] ?? '';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = repositoryName.endsWith('.github.io');

const site = process.env.SITE ?? `https://${repositoryOwner}.github.io`;
const base = process.env.BASE_PATH ?? (isGitHubPages && repositoryName && !isUserOrOrgSite ? `/${repositoryName}` : '/');

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: {
        'zh-CN': 'Yaxin Notes',
        en: 'Yaxin Notes'
      },
      description: 'Research notes, engineering logs, internship reflections, and long-form ideas.',
      favicon: '/favicon.svg',
      pagefind: true,
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN'
        },
        en: {
          label: 'English',
          lang: 'en'
        }
      },
      customCss: ['/src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yaxin9Luo'
        }
      ],
      sidebar: [
        {
          label: '开始',
          translations: { en: 'Start' },
          items: [
            { label: '首页', translations: { en: 'Home' }, slug: 'index' }
          ]
        },
        {
          label: '研究笔记',
          translations: { en: 'Research Notes' },
          items: [{ autogenerate: { directory: 'research' } }]
        },
        {
          label: '工程日志',
          translations: { en: 'Engineering Logs' },
          items: [{ autogenerate: { directory: 'engineering' } }]
        },
        {
          label: '实习复盘',
          translations: { en: 'Internship' },
          items: [{ autogenerate: { directory: 'internship' } }]
        },
        {
          label: '想法池',
          translations: { en: 'Ideas' },
          items: [{ autogenerate: { directory: 'ideas' } }]
        },
        {
          label: '长文',
          translations: { en: 'Essays' },
          items: [{ autogenerate: { directory: 'essays' } }]
        }
      ]
    }),
    mdx()
  ]
});
