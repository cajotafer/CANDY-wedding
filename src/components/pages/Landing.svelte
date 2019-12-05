<script>
	import Shadows from '../widgets/Shadows.svelte'
	import Arrow from '../widgets/Arrow.svelte'
	import Title from '../widgets/Title.svelte'
	import Fullview from '../layouts/Fullview.svelte'
	import BasicContainer from '../layouts/BasicContainer.svelte'
	import Hero from '../widgets/Hero.svelte'
	import Countdown from '../widgets/Countdown.svelte'
	import Resume from '../widgets/Resume.svelte'
	import Links from '../widgets/Links.svelte'

	export let name;
</script>

<Shadows />
<Arrow />
<Title text='02/02/20' />

<Fullview main>
	<Hero />
</Fullview>
<Fullview section>
	<Countdown />
</Fullview>
<Fullview section>
	<Resume />
</Fullview>
<BasicContainer section>
	<Links />
</BasicContainer>

<style lang="scss">

</style>