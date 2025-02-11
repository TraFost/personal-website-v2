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
</script>

<Section id="projects" title="Projects">
    <Splide bind:this={splideInstance} options={splideOptions}>
        {#each config.projects as project}
        <SplideSlide>
            <div class="bg-linear-to-br from-white/10 to-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 duration-150 flex flex-col h-full">
                <img src={project.thumbnail} alt={project.title} class="w-full h-40 object-cover" />
                <div class="p-4 flex flex-col grow">
                    <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
                    <p class="text-sm text-gray-400 mb-4">{project.description}</p>
                    <div class="flex flex-wrap gap-2 my-4">
                        {#each project.tags as tag}
                        <span class="px-2 py-1 text-xs bg-white/20 rounded-xl">{tag}</span>
                        {/each}
                    </div>
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
      <div class="flex gap-2">
          <Button onClick={goPrev}>
            <ChevronLeftIcon class="size-4" />
          </Button> 
          <Button onClick={goNext}>
            <ChevronRightIcon class="size-4" />
          </Button>
      </div>
  </section>
</Section>
