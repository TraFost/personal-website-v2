<script lang="ts">
  import '$lib/styles/app.css';

  import Footer from '$components/Footer.svelte';
  import NavigationBar from '$lib/ui/NavigationBar.svelte';
  import config from '$lib/config';
  import { page } from '$app/stores';

  const { children } = $props();
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <script defer src="https://cloud.umami.is/script.js" data-website-id="bfb4571f-5b89-45f8-a3c5-381b8fc759cb"></script>
  <meta name="description" content={config.meta.description} />
  {#if config.meta.keywords}
    <meta name="keywords" content={config.meta.keywords} />
  {/if}
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={config.meta.url + $page.url.pathname} />
  <link rel="icon" href={config.meta.favicon} />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content={config.meta.language || 'en_US'} />
  <meta property="og:title" content={config.meta.title} />
  <meta property="og:description" content={config.meta.description} />
  <meta property="og:image" content={config.meta.image} />
  <meta property="og:url" content={config.meta.url + $page.url.pathname} />
  <meta name="theme-color" content="#ffffff" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content={config.meta.description} />
  <meta name="twitter:title" content={config.meta.title} />
  <meta name="twitter:image" content={config.meta.image} />
  <meta name="twitter:url" content={config.meta.url + $page.url.pathname} />
  
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: config.name,
      url: config.meta.url,
      description: config.meta.description,
      image: config.meta.image,
      sameAs: Object.values(config.social).map((s) => {
        if (s.startsWith("https://")) return s;
        if (s.includes("github")) return `https://github.com/${s}`;
        if (s.includes("instagram")) return `https://instagram.com/${s}`;
        if (s.includes("discord")) return undefined;
        return undefined;
      }).filter(Boolean),
      address: {
        "@type": "PostalAddress",
        addressLocality: config.location,
      },
      jobTitle: config.profession,
    })}
  </script>
</svelte:head>

<div class="min-h-screen">
  <NavigationBar />
  {@render children()}
  <Footer />
</div>