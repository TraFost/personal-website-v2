<script lang="ts">
  import config from "$lib/config";
</script>

<header class="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
    <a href="/" class="text-xl font-semibold tracking-tight text-surface-950 dark:text-surface-50 hover:opacity-70 transition-opacity">{config.name.split(' ')[0]}.</a>
    <button class="p-2 hover:bg-surface-200/50 dark:hover:bg-surface-700/50 rounded-md transition-colors cursor-pointer flex items-center justify-center" aria-label="Menu">
        <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" class="text-surface-950 dark:text-surface-50" style="stroke-width: 1.5;"></iconify-icon>
    </button>
</header>
