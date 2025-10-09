<script lang="ts">
  import config from "$lib/config";
  import GradualSpacing from "$lib/ui/GradualSpacing.svelte";
  import BlurInText from "$lib/ui/BlurInText.svelte";

  let expanded = false;
  const about = config.about.trim();
</script>

<section id="hero" class="relative mt-40 md:mt-56">
  <div class="relative flex flex-col items-start gap-y-4">
    <div class="pill">
      Based in {config.location}
    </div>

    <h1 class="leading-tight">
      <GradualSpacing
        words={`Hi, I am ${config.name}`}
        class="text-[var(--text-hero)] font-bold gradient-text"
      />
    </h1>

    <h2 class="text-subtle text-[clamp(1.1rem,2.4vw,1.4rem)]">
      <GradualSpacing
        words={`${config.profession}`}
        class="font-semibold"
      />
    </h2>

    <div class="text-gray-400 max-w-full md:max-w-2xl">
      <BlurInText
        word={about}
        class={`text-sm sm:text-base transition-[max-height] duration-300 ease-in-out ${
          expanded
            ? ''
            : '[display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] overflow-hidden'
        }`}
      />
    </div>

    <div class="mt-2 flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${config.contactEmail}`}
        class="btn-base btn-ghost focus-ring"
      >
        Contact me
      </a>
    </div>
  </div>
</section>
