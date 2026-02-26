<script lang="ts">
  import '$lib/styles/app.css';

  import Footer from '$components/Footer.svelte';
  import NavigationBar from '$lib/ui/NavigationBar.svelte';
  import config from '$lib/config';

  const { children } = $props();
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <script defer src="https://cloud.umami.is/script.js" data-website-id="bfb4571f-5b89-45f8-a3c5-381b8fc759cb"></script>
  <meta name="description" content={config.meta.description} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="icon" href={config.meta.favicon} />
  <meta property="og:title" content={config.meta.title} />
  <meta property="og:description" content={config.meta.description} />
  <meta property="og:image" content={config.meta.image} />
  <meta property="og:url" content={config.meta.url} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content={config.meta.description} />
</svelte:head>

<div class="min-h-screen">
  <NavigationBar />
  {@render children()}
  <Footer />
</div>