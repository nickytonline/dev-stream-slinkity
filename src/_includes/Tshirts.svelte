<script>
  export let tshirts = [];

  console.dir(tshirts);
</script>

<!-- markup -->
<ul>
  {#each tshirts as tshirt}
    <li><a href={tshirt.slug}>{tshirt.name}</a></li>
  {/each}
</ul>

<style lang="css">
</style>
