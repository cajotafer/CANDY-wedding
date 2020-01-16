<script>
    import Shadows from '../widgets/Shadows.svelte'
    import Title from '../widgets/Title.svelte'
    import BasicContainer from '../layouts/BasicContainer.svelte'
    import Disqus from '../widgets/Disqus.svelte'
    import Return from '../widgets/Return.svelte'
    // import Form from '../widgets/Form.svelte'
</script>

<Shadows />
<Title text='Libro de visitas' />
<Return />

<BasicContainer main>
    <Disqus />
    <!-- <Form /> -->
</BasicContainer>

<style lang="scss">

</style>