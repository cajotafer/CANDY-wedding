<script>
	import Shadows from '../widgets/Shadows.svelte'
	// import Arrow from '../widgets/Arrow.svelte'
	import Title from '../widgets/Title.svelte'
	import CallToAction from '../widgets/CallToAction.svelte'
	import Fullview from '../layouts/Fullview.svelte'
	import BasicContainer from '../layouts/BasicContainer.svelte'
	import Hero from '../widgets/Hero.svelte'
	import Countdown from '../widgets/Countdown.svelte'
	import Resume from '../widgets/Resume.svelte'
	import Links from '../widgets/Links.svelte'
</script>

<Shadows />
<!-- <Arrow /> -->
<Title text='02/02/20' />
<CallToAction />

<Fullview main>
	<Hero />
</Fullview>
<BasicContainer section>
	<Countdown />
</BasicContainer>
<BasicContainer section>
	<Resume />
</BasicContainer>
<BasicContainer section>
	<Links />
</BasicContainer>

<style lang="scss">

</style>