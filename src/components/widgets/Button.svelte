<script>
  export let text;
  export let href;
  export let outline = false;
  export let disabled = false;
</script>

{#if href && text }
<a {href} class:outline class:disabled aria-disabled="{disabled}" tabindex="0"
  >{text}</a
>
{:else if text}
<span
  role="button"
  class:outline
  class:disabled
  aria-disabled="{disabled}"
  tabindex="0"
>
  {text}
</span>
{/if}

<style lang="scss">
  @import "../../css/colors.scss";

  .disabled {
    opacity: 0.3;
    cursor: initial;
  }

  a,
  :global(button, .call-to-action, [role="button"]) {
    display: inline-block;
    font-family: "Open Sans", Roboto, "Helvetica Neue", Helvetica, Optima, Segoe,
      "Segoe UI", Candara, Calibri, Arial, sans-serif;
    font-weight: 600;
    line-height: 100%;
    background: #fff;
    font-size: 15px;
    border: 1px solid transparent;
    padding: 13px 12px 12px 13px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
    -webkit-font-smoothing: antialiased !important;
    outline-color: rgb(162, 113, 0.5);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0.5px rgba(50, 50, 93, 0.17),
      0 2px 5px 0 rgba(50, 50, 93, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 0 transparent !important;
    color: $grey !important;
    margin-bottom: 10px;

    &:hover {
      color: $color-primary !important;
      background-color: #fafafa;
    }

    &:active {
      border-width: 2px 1px 0px 1px;
    }
  }
</style>
