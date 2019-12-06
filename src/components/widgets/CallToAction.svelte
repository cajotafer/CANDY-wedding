<script>
    import { itsTime } from '../../js/utils/stores.js';

    let itsTimeValue;

    const unsubscribe = itsTime.subscribe(value => {
        itsTimeValue = value;
    });

    if (!itsTimeValue && typeof window !== 'undefined') {
        window.addeventasync = function () {
            addeventatc.settings({
                dropdown: { order: "appleical,google,outlookcom" },
            });
        };
    }
</script>

{#if itsTimeValue}
    <Button text="Ver la transmisión en directo" disabled={!itsTimeValue} />
{:else}
    <div title="Agregar al Calendario" class="addeventatc" role="button" data-dropdown-y="up">
        Agregar al Calendario
        <span class="start">02/01/2020 08:00 PM</span>
        <span class="end">02/02/2020 12:00 AM</span>
        <span class="timezone">America/Bogota</span>
        <span class="title">Boda de Carlos y Dyah</span>
        <span class="description">
            Transmisión en vivo de la boda de Carlos y Dyah desde Indonesia. Evento exclusivo para
            familiares y amigos.
            <br/>
            <br/>08:00 PM - Perú / Colombia / Ecuador
            <br/>09:00 PM - Venezuela
            <br/>02:00 AM - España
        </span>
        <span class="location">Gresik, East Java, Indonesia</span>
    </div>
{/if}

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
        outline-color: rgb(162, 113, 0.5);

        &:hover {
            color: $color-primary !important;
        }
    }

    :global(.addeventatc_icon.atc_node.notranslate) {
        display: none !important;
    }
</style>