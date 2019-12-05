<script>

</script>

<div class="shadow shadow--top"></div>
<div class="shadow shadow--bottom"></div>


<style lang="scss">
    .shadow {
        width: 100%;
        height: 15vh;
        position: fixed;
        z-index: 10;
    }

    .shadow--top {
        top: 0;
        background: linear-gradient(0deg, rgba(31, 31, 31, 0) 20%, #ccc 100%);
    }

    .shadow--bottom {
        bottom: 0;
        background: linear-gradient(0deg, #ccc 20%, rgba(31, 31, 31, 0) 100%);
    }
</style>