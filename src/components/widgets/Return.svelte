<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Button from "./Button.svelte";

  let text = "Regresar";
  let scrollY = 0;
  let scrollAux = 0;

  function handler() {
    let [returnButton] = document.getElementsByClassName("return") || [];
    if (scrollY >= scrollAux + 50) {
      text = "<";
      returnButton.style.width = "35px";
      scrollAux = scrollY - 50;
    } else if (scrollY < scrollAux - 50) {
      text = "Regresar";
      scrollAux = scrollY;
      returnButton.style.width = "82px";
    }
    console.log(returnButton);
  }
</script>
<svelte:window on:scroll|stopPropagation="{handler}" bind:scrollY="{scrollY}" />

<a
  href="/"
  class="return call-to-action"
  tabindex="0"
  in:fly="{{delay: 500, duration: 1000, y: 50, opacity: 0, easing: quintOut}}"
  >{text}</a
>

<style lang="scss">
  @import "../../css/colors.scss";

  .return {
    overflow: hidden;
    transition: width 0.3s;
    position: fixed;
    bottom: 10px;
    left: initial;
    right: 10px;
    transform-origin: right;
    font-size: 0.8em;
    width: 82px;
    z-index: 20;

    &:hover {
      font-size: 0.8em;
    }
  }

  @media screen and (min-width: 640px) {
    .return {
      bottom: initial;
      top: 20px;
      left: initial;
      right: 20px;
    }
  }
</style>
