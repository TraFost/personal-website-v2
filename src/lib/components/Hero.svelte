<script lang="ts">
  import config from '$lib/config';
  import GradualSpacing from "$lib/ui/GradualSpacing.svelte";
  import BlurInText from "$lib/ui/BlurInText.svelte";
</script>

<section class="mt-64 flex flex-col items-start gap-y-2" id='hero'>
  <h1>
    <GradualSpacing
    words="Who's {config.name}?"
    class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text"
    />
  </h1>
  <h2>
    <GradualSpacing
     words="A {config.profession}"
     class="text-sm sm:text-lg md:text-xl font-semibold text-white/60"
    />
  </h2>
  <BlurInText
    word={config.about}
    class="max-w-full md:max-w-2xl text-gray-400 text-sm sm:text-base"
  />

  <a
    href="mailto:{config.contactEmail}"
    class="px-7 py-3 text-sm bg-white/10 hover:bg-white/20 duration-150 rounded-lg mt-1"
  >
    Contact Me
  </a>
</section>