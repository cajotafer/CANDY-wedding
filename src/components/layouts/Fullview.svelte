<script>
    export let main;
    export let section;
</script>

{#if section}
    <section class="container">
        <slot>

        </slot>
    </section>
{:else if main}
    <main class="container">
        <slot>

        </slot>
    </main>
{:else}
    <div class="container">
        <slot>

        </slot>
    </div>
{/if}


<style lang="scss">
    .container {
        padding: 20px;
        height: 100vh;
        min-height: 480px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
</style>