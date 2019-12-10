<script>
    import Button from './Button.svelte'
</script>

<h2>Otros enlaces</h2>

<div>
    <Button text="Galería" href="/galeria"/>
    <Button text="Libro de visitas" href="/comentarios" />
    <Button text="Videos en smule" href="https://www.smule.com/Polarchoo/favorites" />
</div>
<address>
    <a href="https://cajotafer.com" hreflang="en" target="_BLANK">desarrollado por <strong>cajotafer</strong></a>
</address>

<style lang="scss">
    h2 {
        margin-bottom: 20px;
        font-size: 1.6em;
        letter-spacing: 0.02em;
    }

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 568px) {
        h2 {
            font-size: 2em;
        }

        div {
            flex-direction: initial;
        }
    }
</style>