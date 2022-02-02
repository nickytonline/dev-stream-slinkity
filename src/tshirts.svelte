<script context="module">
  export const frontMatter = {
    layout: "layout",
    pagination: {
      data: "tshirts",
      size: 1,
      alias: "tshirt",
    },
    permalink: (data) => `/${data.tshirt.slug}/`,
  };
</script>

<script>
  export let tshirt = {};

  console.dir(tshirt);
</script>

<h1>{tshirt.name}</h1>
<ul class="tshirts">
  {#each tshirt.images as image}
    <li><img src={image} alt="" /></li>
  {/each}
</ul>

<style>
  .tshirts {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
</style>
