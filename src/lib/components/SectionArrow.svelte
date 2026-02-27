<script lang="ts">
    import section1 from '$assets/images/section-1.png';
    import section2 from '$assets/images/section-2.png';
    import section3 from '$assets/images/section-3.png';
    import section4 from '$assets/images/section-4.png';

    let { 
        class: className = "w-auto h-8 object-contain opacity-80",
        arrowId = 1
    } = $props<{ class?: string, arrowId: number }>();

    const arrows = [section1, section2, section3, section4];
    const currentArrow = $derived(arrows[(arrowId - 1) % arrows.length]);
</script>

<img src={currentArrow} alt="" class={className} aria-hidden="true" />
