<script lang="ts">
    import config from '$lib/config';
    import SectionArrow from './SectionArrow.svelte';

    const arrowId = 1;
</script>

<section class="max-w-5xl mx-auto px-6 mb-32">
    <div class="flex items-center justify-center gap-4 mb-16">
        <h2 class="section-heading">Bit more About Me</h2>
        <SectionArrow {arrowId} class="w-auto h-6" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="relative w-full max-w-sm mx-auto md:ml-8">
            <div class="absolute inset-0 border border-surface-950 dark:border-surface-50 translate-x-4 translate-y-4 rounded-[var(--radius-md)] z-0"></div>
            <div class="relative z-10 aspect-[3/4] bg-surface-200 dark:bg-surface-700 rounded-[var(--radius-md)] overflow-hidden">
                <div class="w-full h-full bg-gradient-to-t from-[#2a2a2a] to-[#d4d4d4] flex items-end justify-center pb-10 relative">
                    <img src={config.meta.image} alt="Profile" class="absolute inset-0 w-full h-full object-cover text-transparent" loading="lazy">
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <h3 class="h3">
                Hi I'm <span class="italic font-medium text-surface-600 dark:text-surface-300">{config.name}</span>, {config.profession.toLowerCase()}.
            </h3>
            <div class="space-y-4 text-base md:text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
                <p>
                    {config.about}
                </p>
            </div>
        </div>
    </div>
</section>
