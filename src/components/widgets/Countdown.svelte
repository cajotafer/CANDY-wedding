<script>
    import { itsTime } from '../../js/utils/stores.js';

    import Fullview from '../layouts/Fullview.svelte'
    import Button from './Button.svelte'
    import P from './Paragraph.svelte'

    let date = new Date(Date.UTC(2020, 1, 2, 0))
    let currentDate = new Date()

    if (date.getTime() > currentDate.getTime()) {
        window.setInterval(function () {
            currentDate = new Date()
        }, 60000);
    } else {
        itsTime.set(true);
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

{#if $itsTime}
    <h3 class="its-time">¡Es la hora!</h3>
    <P text="{`
        Ya puedes ver la
        <a href="https://www.instagram.com/polarchoo/" tabindex="0" target="_blank" rel="noreferrer noopener">
            transmisión en directo.
        </a>`}" center></P>
{:else}
    <h3 class="primary-font">Faltan</h3>
    <h2>{daysLeft()}<small>D</small> : {hoursLeft()}<small>H</small> :
        {minutesLeft(currentDate)}<small>M</small></h2>
    <P text="Aquí podrás ver la transmisión en vivo el mismo día de la boda <i>(en América será el 01/02/2020 en la noche)</i>." center/>
    <div class="btn-container">
        <Button href="https://www.instagram.com/polarchoo/" text="Próximamente <b>en vivo<b>"/>
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

    @media screen and (min-width: 568px) {
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