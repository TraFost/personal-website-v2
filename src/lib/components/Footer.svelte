<script lang="ts">
  import config from "$lib/config";
</script>

<footer class="w-full max-w-5xl mx-auto text-center pb-12 pt-20 px-6 flex flex-col items-center">
    <p class="text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">CONTACT ME</p>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-surface-950 dark:text-surface-50 mb-10">
        Let's Work On<br>Something Cool <span class="inline-block translate-y-1">😎</span> Together
    </h2>
    
    <a href="mailto:{config.contactEmail}" class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-sm mb-24 cursor-pointer" aria-label="Contact Me">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    </a>

    <p class="text-sm text-surface-600 dark:text-surface-400">
        © {new Date().getFullYear()} All Right Reserved
    </p>
</footer>
