<script lang="ts">
    import config from '$lib/config';
    import SectionArrow from './SectionArrow.svelte';

    const arrowId = 2;

    const getIconUrl = (originalSlug: string, extendedSlug?: string) => {
        if (!originalSlug) throw new Error("Original slug is required");

        let finalSlug;

        if (extendedSlug && extendedSlug.length > 0) {
            finalSlug = extendedSlug;
        } else {
            finalSlug = `${originalSlug}-original`;
        }

        return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${originalSlug}/${finalSlug}.svg`;
    };
</script>

<section class="max-w-5xl mx-auto px-6 mb-32">
    <div class="flex flex-col md:flex-row md:items-center gap-6 mb-10">
        <div class="flex items-center gap-3 text-surface-950 dark:text-surface-50">
            <h2 class="section-heading">Skills &amp; Tools</h2>
            <SectionArrow {arrowId} class="w-auto h-6 ml-2" />
        </div>
    </div>
    
    <div class="flex flex-wrap gap-3">
        <div class="badge preset-filled-surface-500 shadow-sm flex items-center gap-2 hover:border-primary-500 transition-colors border border-surface-200 dark:border-surface-700 bg-white text-black">
            <iconify-icon icon="solar:server-square-linear" width="18" height="18" style="stroke-width: 1.5;"></iconify-icon> Back-end Engineering
        </div>
        <div class="badge preset-filled-surface-500 shadow-sm flex items-center gap-2 hover:border-primary-500 transition-colors border border-surface-200 dark:border-surface-700 bg-white text-black">
            <iconify-icon icon="solar:code-linear" width="18" height="18" style="stroke-width: 1.5;"></iconify-icon> Front-end Development
        </div>
        {#each config.technologies as tech}
            <div class="badge preset-filled-surface-500 shadow-sm hover:border-primary-500 transition-colors border border-surface-200 dark:border-surface-700 flex items-center gap-2 bg-white text-black">
                <img src={getIconUrl(tech.slug)} alt="{tech.name} icon" class="w-4 h-4 object-contain" loading="lazy" />
                {tech.name}
            </div>
        {/each}
    </div>
</section>
