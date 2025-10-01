<script lang="ts">
    import { Motion } from "svelte-motion";
    import { onMount, onDestroy } from "svelte";
  
    let left = 0;
    let width = 0;
    let opacity = 0;
  
    let navs = [
      { name: "About", link: "hero" },
      { name: "Technologies", link: "technologies" },
      { name: "Projects", link: "projects" },
      { name: "Experiences", link: "experiences" },
      { name: "Educations", link: "educations" }
    ];
  
    let navTranslate = -120;
    let idleTimeout: number;
  
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        navTranslate = -100;
        clearTimeout(idleTimeout);
        idleTimeout = window.setTimeout(() => {
          navTranslate = 0;
        }, 1000);
      }
    };
  
    onMount(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
        setTimeout(() => {
          navTranslate = 0;
        }, 500);
      }
    });
  
    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(idleTimeout);
      }
    });
  
    let positionMotion = (node: HTMLElement) => {
      let refNode = () => {
        let rect = node.getBoundingClientRect();
        left = node.offsetLeft;
        width = rect.width;
        opacity = 1;
      };
      node.addEventListener("mouseenter", refNode);
      return {
        destroy() {
          node.removeEventListener("mouseenter", refNode);
        }
      };
    };
  
    function scrollToSection(sectionId: string) {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        const offset = 80;
        const element = document.getElementById(sectionId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  
    function onNavClick(e: MouseEvent, sectionId: string) {
      e.preventDefault();
      scrollToSection(sectionId);
      if (typeof history !== "undefined") {
        history.pushState(null, "", `#${sectionId}`);
      }
    }
</script>

<Motion
  animate={{ transform: `translateY(${navTranslate}px)` }}
  transition={{ type: "spring", stiffness: 400, damping: 30 }}
  let:motion
>
  <nav use:motion class="mx-auto max-w-2xl px-4">
    <ul
      role="list"
      aria-label="Section navigation"
      on:mouseleave={() => { opacity = 0; }}
      class="relative mx-auto flex w-full justify-center gap-1.5 rounded-[var(--radius-xl)] border border-white/10 bg-neutral-900/70 px-1.5 py-1.5 shadow-[var(--shadow-soft)] backdrop-blur-md supports-backdrop-blur:backdrop-saturate-150"
    >
      {#each navs as item}
        <li
          use:positionMotion
          class="relative z-10 block cursor-pointer rounded-[calc(var(--radius-md)-2px)] px-3 py-2 text-[11px] font-medium tracking-wide text-neutral-200 transition-colors hover:text-white focus-visible:text-white md:px-5 md:py-3 md:text-sm uppercase"
        >
          <a
            href={`#${item.link}`}
            on:click={(e) => onNavClick(e, item.link)}
            class="outline-none ring-0 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-0"
            data-sveltekit-preload-data="hover"
          >
            {item.name}
          </a>
        </li>
      {/each}

      <Motion
        animate={{ left: left, width: width, opacity: opacity }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        let:motion
      >
        <li
          use:motion
          class="absolute z-0 h-8 md:h-11 rounded-[calc(var(--radius-md)-2px)] bg-gradient-to-r from-white/25 to-white/15 shadow-inner"
        ></li>
      </Motion>

      <div class="pointer-events-none absolute inset-0 rounded-[var(--radius-md)] ring-1 ring-white/5"></div>
    </ul>
  </nav>
</Motion>
