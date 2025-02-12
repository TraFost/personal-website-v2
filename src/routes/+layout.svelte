<script lang="ts">
    import '$lib/styles/app.css';
  
    import Footer from '$components/Footer.svelte';
    import config from '$lib/config';
  
    const { children } = $props();
  </script>
  
  <svelte:head>
    <title>{config.meta.title}</title>
    <meta name="description" content={config.meta.description}/>
    <meta name="og:title" content={config.meta.title}/>
    <meta name="og:description" content={config.meta.description}/>
    <meta name="twitter:description" content={config.meta.description}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="icon" href={config.meta.favicon}>
  </svelte:head>
  
  <div class="min-h-[100dvh] bg-black text-white overflow-hidden">
    <main class="container mx-auto px-6 space-y-20">
      {@render children()}
    </main>
  
    <Footer/>
  </div>