<script lang="ts">
  import Section from "$components/Section.svelte";
  import config from "$lib/config";

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

<Section id="technologies" title="Technologies">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
    {#each config.technologies as tech}
      <div
        class="flex justify-start items-center px-3 py-2 bg-linear-to-r from-white/[0.095] to-white/5 border border-white/5 hover:border-white/10 rounded-xl"
      >
        <img
          src={getIconUrl(tech.slug, tech.extendedSlug)}
          alt={tech.name}
          class="size-7 mr-3"
        />
        <span class="font-medium duration-150">
          {tech.name}
        </span>
      </div>
    {/each}
  </div>
</Section>
