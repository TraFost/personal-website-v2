<script lang="ts">
    import config from "$lib/config";
    import Section from "$components/Section.svelte";
    </script>
    
    <Section id="educations" title="Educations">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
            {#each config.educations as education (education.title)}
            <div
                class="p-5 rounded-xl bg-linear-to-r from-white/[0.095] to-white/5 border border-white/5 hover:border-white/10">
                <h3 class="text-lg font-semibold text-white">{education.title}</h3>
                <p class="text-gray-400">{education.school}</p>
                <p class="text-gray-500">{education.year}</p>
            </div> 
            {/each}
        </div>
    </Section>
    