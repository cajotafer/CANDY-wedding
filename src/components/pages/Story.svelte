<script>
    import BasicContainer from '../layouts/BasicContainer.svelte'
    import Shadows from '../widgets/Shadows.svelte'
    import Title from '../widgets/Title.svelte'
    import Subtitle from '../widgets/Subtitle.svelte'
    import Paragraph from '../widgets/Paragraph.svelte'
</script>

<Shadows />
<Title text='Nuestra historia' />

<BasicContainer main>
    <Subtitle text='Closer in Paris' primaryFont/>
    <Paragraph text='bla bla bla bla bla bla bla bla bla bla'/>
    <Subtitle text='Distante y delirante' primaryFont/>
</BasicContainer>

<style lang="scss">

</style>