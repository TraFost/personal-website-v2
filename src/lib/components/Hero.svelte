<script lang="ts">
    import config from '$lib/config';
    import heroImage from '$assets/images/hero.webp';
</script>

<section class="max-w-5xl mx-auto px-6 pt-12 pb-24 text-center">
    <p class="text-surface-600-400 mb-4">Hello, I am <span class="italic font-medium text-surface-950 dark:text-surface-50">{config.name}</span></p>
    <h1 class="h1 max-w-3xl mx-auto">
        I Build Production Systems That Are <span class="text-primary-500">Reliable</span> & <span class="text-primary-500">Fast</span>
    </h1>
    
    <div class="mt-16 flex justify-center w-full max-w-2xl mx-auto opacity-90">
        <img src={heroImage} alt="Hero" class="w-full h-auto max-h-64 object-contain" />
    </div>
</section>
