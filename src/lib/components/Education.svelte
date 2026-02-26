<script lang="ts">
    import config from '$lib/config';
    import { spring } from 'svelte/motion';
    import { fly } from 'svelte/transition';
    import SectionArrow from './SectionArrow.svelte';

    const arrowId = 2;

    function springyCard(node: HTMLElement) {
        const hoverState = spring({ scale: 1, y: 0 }, { 
            stiffness: 0.1,
            damping: 0.4    
        });

        const unsubscribe = hoverState.subscribe(({ scale, y }) => {
            node.style.transform = `scale(${scale}) translateY(${y}px)`;
        });

        const onEnter = () => hoverState.set({ scale: 1.01, y: -4 });
        const onLeave = () => hoverState.set({ scale: 1, y: 0 });

        node.addEventListener('mouseenter', onEnter);
        node.addEventListener('mouseleave', onLeave);

        return {
            destroy() {
                unsubscribe();
                node.removeEventListener('mouseenter', onEnter);
                node.removeEventListener('mouseleave', onLeave);
            }
        };
    }
</script>

<section class="max-w-5xl mx-auto px-6 mb-32 relative">
    <div class="flex items-center gap-4 mb-16">
        <h2 class="section-heading">Education</h2>
        <SectionArrow {arrowId} class="h-6 w-auto opacity-70" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each config.educations as edu, index}
            <div 
                use:springyCard
                in:fly={{ y: 30, duration: 800, delay: index * 100, opacity: 0 }}
                class="group flex flex-col will-change-transform"
            >
                <div class="card p-8 sm:p-10 preset-filled-surface-50-950 shadow-md ring-1 ring-surface-200/50 dark:ring-surface-700/50 relative overflow-hidden transition-all duration-300 group-hover:shadow-[var(--shadow-soft)] group-hover:ring-primary-500/30 h-full">
                    
                    <!-- Top-Right Gradient Glow on hover -->
                    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-500/10 via-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full pointer-events-none"></div>

                    <div class="flex flex-col gap-4 relative z-10">
                        <div class="flex justify-between items-start gap-4">
                            <h3 class="text-xl font-bold tracking-tight text-surface-950 dark:text-surface-50 group-hover:text-primary-500 transition-colors duration-300">
                                {edu.title}
                            </h3>
                        </div>
                        
                        <p class="text-lg font-medium text-surface-600 dark:text-surface-400">{edu.school}</p>

                        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-100/80 dark:bg-surface-800/80 backdrop-blur-sm text-surface-600 dark:text-surface-300 text-sm font-semibold rounded-full ring-1 ring-surface-200 dark:ring-surface-700 whitespace-nowrap self-start mt-2">
                            <iconify-icon icon="solar:diploma-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                            {edu.year}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
