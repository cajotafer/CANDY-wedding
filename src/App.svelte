<script>
	export let name;
</script>

<main>
	<i class="arrow"></i>
</main>

<style lang="scss">
	@import './css/colors.scss';

	.arrow {
		position: absolute;
		bottom: 20px;
		left: 50%;
		border: solid $color-primary;
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 10px;
		transform: translateX(-50%) rotate(-135deg);
	}
</style>