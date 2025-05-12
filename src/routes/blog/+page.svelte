<script>
   let { data } = $props();
   //export let posts = [];
</script>

<h1>blog</h1>

<ul>
    {#each data.summaries as { slug, title }}
        <li><a href="/blog/{slug}">{title}</a></li>
    {/each}
</ul>