<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
</script>

<h2 in:fly="{{delay: 250, duration: 1000, y: 50, opacity: 0, easing: quintOut}}">02/02/20</h2>

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
    }
</style>