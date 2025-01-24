export default {
  name: 'Burak',
  about: 'A student and a developer from Turkey specialized in web development',
  profession: 'Full Stack Developer',
  contactEmail: 'contact@buraky.dev',
  meta: {
    title: 'Burak',
    description: 'My personal website including my projects and skills',
    favicon: 'https://avatars.githubusercontent.com/u/59135244?size=64'
  },
  social: {
    github: 'BurakYs',
    discord: '269677849810698249'
  },
  projects: [
    {
      title: 'VidGet',
      description: 'Multi-platform video and audio downloader',
      thumbnail: 'https://cdn.buraky.dev/banners/vidget.png',
      url: 'https://vidget.buraky.dev',
      repository: 'https://github.com/BurakYs/VidGet',
      tags: ['Svelte', 'TailwindCSS', 'Fastify']
    },
    {
      title: 'Rookie Spitfire',
      description: 'Fortnite account management Discord bot',
      thumbnail: 'https://cdn.buraky.dev/banners/rookie-spitfire.png',
      url: 'https://rookie-spitfire.xyz',
      repository: 'https://github.com/BurakYs/rookie-spitfire.xyz',
      tags: ['Svelte', 'Sass', 'TypeScript', 'MongoDB']
    }
  ],
  // Tech icons are fetched from https://github.com/devicons/devicon
  technologies: [
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Svelte', slug: 'svelte' },
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Sass', slug: 'sass' },
    { name: 'Tailwind', slug: 'tailwindcss' }
  ]
};
