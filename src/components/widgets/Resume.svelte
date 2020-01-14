<script>
    import Subtitle from './Subtitle.svelte'
    import Paragraph from './Paragraph.svelte'
    import Button from './Button.svelte'
</script>

<figure>
    <img src="https://candy-boda.netlify.com/assets/we.png" alt="Carlos y Dyah">
</figure>
<Subtitle text='Si te preguntas,'/>
<Paragraph text={`Nos conocimos hace más de dos años a través de <a href="https://www.smule.com/Polarchoo/favorites" target="_BLANK"
rel="noopener noreferrer">Smule</a>, una aplicación para cantar karaoke con personas
alrededor
del mundo y créeme, nadie se imaginó que se convertiría en una historia de amor...`}/>
<Button text="Conocer más" href="/historia"/>


<style lang="scss">

</style>