<script>
  export let text = "";
</script>

<h2>{@html text}</h2>

<style lang="scss">
  h2 {
    margin-bottom: 20px;
    font-size: 2.2em;
    letter-spacing: 0.02em;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2.6em;
    }
  }
</style>
