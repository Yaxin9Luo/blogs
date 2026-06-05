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
      title: 'Yaxin Notes',
      description: 'Research notes, engineering logs, internship reflections, and long-form ideas.',
      favicon: '/favicon.svg',
      pagefind: true,
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN'
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
          label: 'Start',
          items: [
            { label: '首页', slug: 'index' }
          ]
        },
        {
          label: 'Research Notes',
          items: [{ autogenerate: { directory: 'research' } }]
        },
        {
          label: 'Engineering Logs',
          items: [{ autogenerate: { directory: 'engineering' } }]
        },
        {
          label: 'Internship',
          items: [{ autogenerate: { directory: 'internship' } }]
        },
        {
          label: 'Ideas',
          items: [{ autogenerate: { directory: 'ideas' } }]
        },
        {
          label: 'Essays',
          items: [{ autogenerate: { directory: 'essays' } }]
        }
      ]
    }),
    mdx()
  ]
});
