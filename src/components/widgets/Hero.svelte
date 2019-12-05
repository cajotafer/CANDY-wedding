<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
</script>

<h2 class="primary-font" in:fly="{{delay: 500, duration: 1000, y: 50, opacity: 0, easing: quintOut}}">La
    Boda <br>de<br> <span class="secondary-font">CANDY</span></h2>
<h1 in:fly="{{delay: 750, duration: 1000, y: 50, opacity: 0, easing: quintOut}}">Carlos & Dyah</h1>
<i class="arrow"></i>

<style lang="scss">
    @import '../../css/colors.scss';

    h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        margin-top: -15px;
    }

    h2 {
        font-size: 2.5em;
    }

    h1,
    h2 {
        text-align: center;
    }

    span {
        font-size: 1.9em;
    }

    @media screen and (min-width: 768px) {
        h2 {
            font-size: 3.4em;
        }

        h1 {
            font-size: 2em;
        }
    }

    @keyframes floating {
        0% {
            transform: translateX(-50%) translateY(0) rotate(-135deg);
        }

        50% {
            transform: translateX(-50%) translateY(40%) rotate(-135deg);
        }

        100% {
            transform: translateX(-50%) translateY(0) rotate(-135deg);
        }
    }

    .arrow {
        position: absolute;
        bottom: 90px;
        left: 50%;
        border: solid $color-primary;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 6px;
        transform: translateX(-50%) rotate(-135deg);
        animation: floating 2s infinite;
    }
</style>