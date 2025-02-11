<script lang="ts">
    import config from "$lib/config";
    import Section from "$components/Section.svelte";
</script>

<Section id="experiences" title="Experiences">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
        {#each config.experiences as experience (experience.title)}
        <div class="p-6 rounded-2xl bg-white/[0.08] border border-white/10 shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold text-white">{experience.title}</h3>
            <p class="text-gray-400 text-sm">{experience.company}</p>
            <p class="text-gray-500 text-xs">{experience.duration}</p>

            <ul class="mt-4 space-y-3 text-gray-300">
                {#each experience.responsibilities as responsibility}
                <li class="flex items-start space-x-3">
                    <span class="size-2 bg-gray-400 rounded-full mt-1"></span>
                    <p class="leading-relaxed">{responsibility}</p> 
                </li>
                {/each}
            </ul>
        </div>
        {/each}
    </div>
</Section>