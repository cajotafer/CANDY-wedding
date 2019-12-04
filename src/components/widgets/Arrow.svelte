<script></script>

<i class="arrow"></i>

<style lang="scss">
    @import '../../css/colors.scss';

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
        position: fixed;
        bottom: 20px;
        left: 50%;
        border: solid $color-primary;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 10px;
        transform: translateX(-50%) rotate(-135deg);
        animation: floating 2s infinite;
    }
</style>