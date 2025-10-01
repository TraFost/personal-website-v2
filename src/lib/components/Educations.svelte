<script lang="ts">
    import config from "$lib/config";
    import Section from "$components/Section.svelte";
    </script>

    <Section
        id="educations"
        title="Education & certifications"
    >
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each config.educations as education (education.title)}
                <article
                    class="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20"
                >
                    <h3 class="text-base font-semibold text-white">
                        {education.title}
                    </h3>
                    <p class="text-sm text-white/60">
                        {education.school}
                    </p>
                    <p class="text-xs uppercase tracking-[0.2em] text-white/40">
                        {education.year}
                    </p>
                </article>
            {/each}
        </div>
    </Section>
    