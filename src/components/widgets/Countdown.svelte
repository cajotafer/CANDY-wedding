<script>
    import Fullview from '../layouts/Fullview.svelte'
    import Button from './Button.svelte'

    let date = new Date(Date.UTC(2020, 1, 2, 1))
    let currentDate = new Date()
    let itsTime = false;

    if (date.getTime() > currentDate.getTime()) {
        window.setInterval(function () {
            currentDate = new Date()
        }, 60000);
    } else {
        itsTime = true;
    }

    const daysLeft = () => {
        let daysLeft = date.getTime() - currentDate.getTime()
        daysLeft = Math.floor(daysLeft / (1000 * 3600 * 24))
        daysLeft = daysLeft < 10 ? `0${daysLeft}` : daysLeft
        return daysLeft
    }

    const hoursLeft = () => {
        let hoursLeft = date.getHours() - currentDate.getHours()
        hoursLeft = hoursLeft < 0 ? 24 + hoursLeft : hoursLeft
        hoursLeft = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft
        return hoursLeft
    }

    const minutesLeft = (currentDate) => {
        let minutesLeft = date.getMinutes() - currentDate.getMinutes()
        minutesLeft = minutesLeft < 0 ? 60 + minutesLeft : minutesLeft
        minutesLeft = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
        return minutesLeft
    }

</script>

{#if itsTime}
    <h3 class="its-time">¡Es la hora!</h3>
    <Button text="Ver la transmisión en directo" disabled={!itsTime}/>
{:else}
    <h3 class="primary-font">Faltan</h3>
    <h2>{daysLeft()}<small>D</small> : {hoursLeft()}<small>H</small> :
        {minutesLeft(currentDate)}<small>M</small></h2>
    <div class="btn-container">
        <div title="Agregar al Calendario" class="addeventatc" role="button">
            Agregar al Calendario
            <span class="start">02/02/2020 08:00 AM</span>
            <span class="end">02/02/2020 12:00 PM</span>
            <span class="timezone">WIB</span>
            <span class="title">Boda de Carlos y Dyah</span>
            <span class="description">Transmisión en vivo de la boda de Carlos y Dyah desde Indonesia. Evento exclusivo para
                familiares y amigos.</span>
            <span class="location">Gresik, East Java, Indonesia</span>
        </div>
        <Button text="Libro de visitas" href="/comentarios" />
    </div>
{/if}

<style lang="scss">
     @import '../../css/colors.scss';

    .its-time { 
    margin-bottom: 10px;
    }

    h3 {
        font-size: 2.4em;
        font-weight: normal;
    }

    h2 {
        font-size: 2.2em;
        letter-spacing: 0.1em;
        font-weight: normal;
        margin-bottom: 10px;
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .addeventatc {
        color: $grey !important;
        padding: 13px 12px 12px 13px;   
        margin-bottom: 10px;

        &:hover {
            color: $color-primary !important;
        } 
    }

    :global(.addeventatc_icon.atc_node.notranslate){
        display: none !important;
    }  

    @media screen and (min-width: 768px) {
        h2 {
            font-size: 3.4em;
        }

        h3 {
            font-size: 3em;
        }

        .btn-container {
            flex-direction: initial;
        }
    }
</style>