<script lang="ts">
    import config from '$lib/config';
    import { spring } from 'svelte/motion';
    import { fly } from 'svelte/transition';
    import SectionArrow from './SectionArrow.svelte';

    const arrowId = 3;

    const professionalProjectTitles = [
        "Ruang Diri", 
        "Recess – Production Platform", 
        "Poopooville – Web3 Ecosystem", 
        "KTA Buya Pasaman Timur"
    ];

    type Project = typeof config.projects[0];
    const projectSections = [
        {
            title: "Professional Projects",
            projects: config.projects.filter(p => professionalProjectTitles.includes(p.title))
        },
        {
            title: "Side Projects",
            projects: config.projects.filter(p => !professionalProjectTitles.includes(p.title))
        }
    ];

    function springyCard(node: HTMLElement) {
        const hoverState = spring({ scale: 1, y: 0 }, { 
            stiffness: 0.1,
            damping: 0.4
        });

        const unsubscribe = hoverState.subscribe(({ scale, y }) => {
            node.style.transform = `scale(${scale}) translateY(${y}px)`;
        });

        const onEnter = () => hoverState.set({ scale: 1.02, y: -6 });
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

{#snippet projectCard(project: Project, index: number)}
    <div 
        use:springyCard
        in:fly={{ y: 50, duration: 800, delay: index * 100, opacity: 0 }}
        class="group cursor-pointer flex flex-col gap-4 will-change-transform"
    >
        <div class="w-full aspect-[4/3] rounded-2xl bg-surface-100 dark:bg-surface-800 overflow-hidden relative shadow-md ring-1 ring-surface-200/50 dark:ring-surface-700/50">
            <img 
                src={typeof project.thumbnail === 'string' ? project.thumbnail : (project.thumbnail as any)?.src} 
                alt={project.title} 
                class="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 ease-out" 
                loading="lazy" 
            />
        </div>

        <div class="flex items-start justify-between gap-4 px-1">
            <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                </h3>
                
                <div class="flex items-center gap-4 text-surface-500 dark:text-surface-400">
                    {#if project.url}
                        <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-sm font-medium flex items-center gap-1 hover:text-primary-500 transition-colors">
                            open project <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16"></iconify-icon>
                        </a>
                    {/if}
                    {#if project.repository}
                        <a href={project.repository} target="_blank" rel="noopener noreferrer" class="text-sm font-medium flex items-center gap-1 hover:text-primary-500 transition-colors">
                            view repo <iconify-icon icon="solar:code-circle-linear" width="16" height="16"></iconify-icon>
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/snippet}

<section class="max-w-5xl mx-auto px-6 mb-32 space-y-24">
    {#each projectSections as section}
        <div>
            <div class="flex items-center gap-4 mb-10">
                <h2 class="section-heading">{section.title}</h2>
                <SectionArrow {arrowId} class="h-6 w-auto hidden sm:block opacity-70" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {#each section.projects as project, index}
                    {@render projectCard(project, index)}
                {/each}
            </div>
        </div>
    {/each}
</section>