<script>
	import Shadows from '../widgets/Shadows.svelte'
	import Arrow from '../widgets/Arrow.svelte'
	import Title from '../widgets/Title.svelte'
	import Fullview from './Fullview.svelte'
	import Hero from '../widgets/Hero.svelte'
	import Countdown from '../widgets/Countdown.svelte'
	import Resume from '../widgets/Resume.svelte'

	export let name;
</script>

<Shadows />
<Arrow />
<Title />

<Fullview main>
	<Hero />
</Fullview>
<Fullview section>
	<Countdown />
</Fullview>
<Fullview section>
	<Resume />
</Fullview>

<style lang="scss">

</style>