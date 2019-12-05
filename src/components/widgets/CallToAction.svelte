<script>
    if (typeof window !== 'undefined') {
        window.addeventasync = function () {
            addeventatc.settings({
                dropdown: { order: "appleical,google,outlookcom" },
            });
        };
    }
</script>

<div title="Agregar al Calendario" class="addeventatc" role="button" data-dropdown-y="up">
    Agregar al Calendario
    <span class="start">02/02/2020 01:00 AM</span>
    <span class="end">02/02/2020 05:00 AM</span>
    <span class="timezone">GMT</span>
    <span class="title">Boda de Carlos y Dyah</span>
    <span class="description">Transmisión en vivo de la boda de Carlos y Dyah desde Indonesia. Evento exclusivo para
        familiares y amigos.</span>
    <span class="location">Gresik, East Java, Indonesia</span>
</div>

<style lang="scss">
    @import '../../css/colors.scss';

    .addeventatc {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        color: $grey !important;
        padding: 13px 12px 12px 13px;
        margin-bottom: 10px;
        z-index: 20;

        &:hover {
            color: $color-primary !important;
        }
    }

    :global(.addeventatc_icon.atc_node.notranslate) {
        display: none !important;
    }
</style>