<script>
  import { itsTime, addedToCalendar } from "../../js/utils/stores.js";
  import Button from "./Button.svelte";

  function addeventconfig() {
    window.addeventasync = function() {
      addeventatc.settings({
        dropdown: { order: "appleical,google,outlookcom" }
      });
      addeventatc.register("button-dropdown-click", function(obj) {
        addedToCalendar.set(true);
        console.log(
          "button-dropdown-click -> " + obj.id + ", service -> " + obj.service
        );
      });
    };
  }
</script>

<svelte:window on:load="{addeventconfig}" />
<svelte:head>
  {#if !$itsTime}
  <script
    type="text/javascript"
    src="https://addevent.com/libs/atc/1.6.1/atc.min.js"
    defer
  ></script>
  {/if}
</svelte:head>

{#if $itsTime}
<a
  href="https://youtu.be/ur6Keb67phg"
  class="call-to-action"
  tabindex="0"
  target="_blank"
  rel="noreferrer noopener"
  >Ver la transmisión en directo</a
>
{:else if $addedToCalendar}
<a href="/comentarios" class="call-to-action" tabindex="0">Libro de visitas</a>
{:else}
<div
  title="Agregar al Calendario"
  class="addeventatc"
  role="button"
  data-dropdown-y="up"
>
  Agregar al Calendario
  <span class="start" hidden>02/01/2020 08:00 PM</span>
  <span class="end" hidden>02/02/2020 12:00 AM</span>
  <span class="timezone" hidden>America/Bogota</span>
  <span class="title" hidden>Boda de Carlos y Dyah</span>
  <span class="description" hidden>
    Transmisión en vivo de la boda de Carlos y Dyah desde Indonesia. Evento
    exclusivo para familiares y amigos.
    <br />
    <br />08:00 PM - Perú / Colombia / Ecuador <br />09:00 PM - Venezuela
    <br />02:00 AM - España
  </span>
  <span class="location" hidden>Gresik, East Java, Indonesia</span>
</div>
{/if}

<style lang="scss">
  @import "../../css/colors.scss";

  .addeventatc,
  .call-to-action {
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

  @media only screen and (orientation: landscape) and (max-height: 640px) {
    .addeventatc,
    .call-to-action {
      left: initial;
      right: 0;
      transform: translateX(-20%);
      font-size: 0.8em;

      &:hover {
        font-size: 0.8em;
      }
    }
  }
</style>
