<script lang="ts">
    import config from "$lib/config";
    import Section from "$components/Section.svelte";
</script>

<Section
    id="experiences"
    title="Experience"
>
    <ol class="relative space-y-10 border-l border-white/10 pl-8" aria-label="Professional experience timeline">
        {#each config.experiences as experience (experience.title)}
            <li class="relative pl-6">
                <div class="grid gap-3">
                    <div class="flex flex-wrap items-baseline justify-between gap-3">
                        <div>
                            <h3 class="text-lg font-semibold text-white">
                                {experience.title}
                            </h3>
                            <p class="text-sm text-white/60">
                                {experience.company}
                            </p>
                        </div>
                        <div class="flex flex-col items-end gap-1 text-right text-meta">
                            <span>{experience.duration}</span>
                        </div>
                    </div>
                    <p class="text-sm text-white/70">
                        {experience.description}
                    </p>
                    <ul class="space-y-2 text-sm text-white/75" aria-label={`Key outcomes at ${experience.company}`}>
                        {#each experience.responsibilities as responsibility}
                            <li class="flex gap-3">
                                <span class="mt-2 h-[2px] w-6 bg-white/25"></span>
                                <p class="leading-relaxed">
                                    {responsibility}
                                </p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </li>
        {/each}
    </ol>
</Section>