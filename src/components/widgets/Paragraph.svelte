<script>
  export let text = "";
  export let center = false;
</script>

<p class:center>{@html text}</p>

<style lang="scss">
  p {
    padding: 0 10px;
    font-size: 1.2em;
    line-height: 1.5em;
    margin-bottom: 30px;
    // letter-spacing: 0.01em;
    max-width: 480px;
  }

  .center {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1.3em;
    }
  }
</style>
