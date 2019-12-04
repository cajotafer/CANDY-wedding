<script>
    import Button from './Button.svelte'
</script>

<h2>Si te preguntas,</h2>
<p>Nos conocimos hace más de dos años a través de <a href="https://www.smule.com/Polarchoo/favorites" target="_BLANK"
        rel="noopener noreferrer">Smule</a>, una aplicación para cantar karaoke con personas
    alrededor
    del mundo y créeme, nadie se imaginó que se convertiría en una historia de amor...</p>
<Button text="Conocer más" />


<style lang="scss">
    h2 {
        margin-bottom: 20px;
        font-size: 2.2em;
        letter-spacing: 0.02em;
    }

    p {
        padding: 0 10px;
        font-size: 1.2em;
        line-height: 1.5em;
        margin-bottom: 30px;
        // letter-spacing: 0.01em;
        max-width: 480px;
    }

    @media screen and (min-width: 768px) {
        h2 {
            font-size: 2.6em;
        }

        p {
            font-size: 1.3em;
        }
    }
</style>