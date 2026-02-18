<script lang="ts">
    import '$lib/styles/app.css';
  
    import Footer from '$components/Footer.svelte';
    import NavigationBar from '$lib/ui/NavigationBar.svelte';
    import config from '$lib/config';
  
    const { children } = $props();
  </script>
  
  <svelte:head>
    <title>{config.meta.title}</title>
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
  
  <div class="min-h-screen bg-black text-white">
    <nav class="sticky top-4 z-50" aria-label="Primary">
      <NavigationBar />
    </nav>
    <main class="mx-auto w-full max-w-[76rem] px-5 sm:px-6 lg:px-10 xl:px-0 space-y-[var(--space-9)]" data-sveltekit-preload-data="hover">
      {@render children()}
    </main>
    <Footer />
  </div>