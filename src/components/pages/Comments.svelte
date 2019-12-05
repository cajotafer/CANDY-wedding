<script>
    import Shadows from '../widgets/Shadows.svelte'
    import Title from '../widgets/Title.svelte'
    import Fullview from '../layouts/Fullview.svelte'
    import Form from '../widgets/Form.svelte'

    export let name;
</script>

<Shadows />
<Title text='Libro de visitas' />

<Fullview main>
    <Form />
</Fullview>

<style lang="scss">

</style>