<script>
    import Shadows from '../widgets/Shadows.svelte'
    import Title from '../widgets/Title.svelte'
    import Fullview from '../layouts/Fullview.svelte'
    import Disqus from '../widgets/Disqus.svelte'
    // import Form from '../widgets/Form.svelte'
</script>

<Shadows />
<Title text='Libro de visitas' />

<Fullview main>
    <Disqus />
    <!-- <Form /> -->
</Fullview>

<style lang="scss">

</style>