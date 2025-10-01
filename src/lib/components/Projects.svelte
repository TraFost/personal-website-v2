<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import ExternalLinkIcon from "lucide-svelte/icons/external-link";
  import GithubIcon from "lucide-svelte/icons/github";
  import ChevronLeftIcon from "lucide-svelte/icons/chevron-left";
  import ChevronRightIcon from "lucide-svelte/icons/chevron-right";
  import GlobeLock from "lucide-svelte/icons/globe-lock";

  import Section from "$components/Section.svelte";
  import Button from '$lib/ui/Button.svelte';
  import config from "$lib/config";
  import '@splidejs/svelte-splide/css';

    let splideInstance: Splide | null = null;
    const MAX_VISIBLE_TAGS = 4;
    let expandedProjects: Record<string, boolean> = {};

  const splideOptions = {
      perPage: 3,
      gap: '1rem',
      arrows: false,
      pagination: false,
      drag: false,
      breakpoints: {
          1024: {
              perPage: 2,
              arrows: false,
              drag: true,
              pagination: false,
          },
          640: {
              perPage: 1,
              drag: true,
              arrows: false,
              pagination: false,
          },
      },
  };

  function goNext() {
    splideInstance?.go("+1");
  }

  function goPrev() {
    splideInstance?.go("-1");
  }

    function toggleTags(key: string) {
        expandedProjects = {
            ...expandedProjects,
            [key]: !expandedProjects[key]
        };
    }
</script>

<Section id="projects" title="Projects">
    <div class="hidden md:flex gap-2 justify-end pb-4 pr-1">
        <Button variant="ghost" onClick={goPrev}>
            <ChevronLeftIcon class="size-4" />
        </Button>
        <Button variant="ghost" onClick={goNext}>
            <ChevronRightIcon class="size-4" />
        </Button>
    </div>
    <Splide bind:this={splideInstance} options={splideOptions}>
        {#each config.projects as project, index}
        <SplideSlide>
            <div class="bg-linear-to-br from-white/10 to-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 duration-150 flex flex-col h-full">
                <img src={project.thumbnail} alt={project.title} class="w-full h-40 object-cover" />
                <div class="p-4 flex flex-col grow">
                    <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
                    <p class="text-sm text-gray-400 mb-4">{project.description}</p>
                    {#if project.tags && project.tags.length > 0}
                    <div class="flex flex-wrap items-center gap-2 my-4">
                        {#each (expandedProjects[project.title + index] ? project.tags : project.tags.slice(0, MAX_VISIBLE_TAGS)) as tag}
                        <span class="px-2 py-1 text-xs bg-white/20 rounded-xl">{tag}</span>
                        {/each}
                        {#if project.tags.length > MAX_VISIBLE_TAGS}
                            <button
                                class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                                type="button"
                                aria-expanded={expandedProjects[project.title + index] ? "true" : "false"}
                                on:click={() => toggleTags(project.title + index)}
                            >
                                {#if expandedProjects[project.title + index]}
                                    Show less
                                {:else}
                                    +{project.tags.length - MAX_VISIBLE_TAGS} more
                                {/if}
                            </button>
                        {/if}
                    </div>
                    {/if}
                    <div class="flex items-center gap-x-3 pt-4 border-t border-white/10 mt-auto">
                        {#if project.url}
                        <a href={project.url} class="flex items-center text-sm text-white/80 hover:text-white duration-150" target="_blank">
                            <ExternalLinkIcon class="size-4 mr-1.5" />
                            View project
                        </a>
                        {/if}
                        {#if project.repository}
                        <a href={project.repository} class="inline-flex items-center text-sm text-white/80 hover:text-white duration-150 {project.url && 'border-l border-white/10 pl-3'}" target="_blank">
                            <GithubIcon class="size-4 mr-1.5" />
                            View on GitHub
                        </a>
                        {/if}
                        {#if project.isPrivate}
                        <span class="inline-flex items-center text-sm text-white/80 {project.url && 'border-l border-white/10 pl-3'}">
                            <GlobeLock class="size-4 mr-1.5" />
                            Private repository
                        </span>
                        {/if}
                    </div>
                </div>
            </div>
        </SplideSlide>
        {/each}
    </Splide>
    <section class="hidden justify-end pt-4 pr-1 lg:flex">
  </section>
</Section>
