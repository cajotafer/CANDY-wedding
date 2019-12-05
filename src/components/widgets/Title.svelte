<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let text;
</script>

<h2 in:fly="{{delay: 250, duration: 1000, y: 50, opacity: 0, easing: quintOut}}">{text}</h2>

<style lang="scss">
    h2 {
        font-size: 1.5em;
        text-transform: uppercase;
        font-weight: normal;
        text-align: center;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.2em;
        z-index: 20;
    }
</style>