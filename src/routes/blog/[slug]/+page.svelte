<script>
    let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

<!--no back button if already on root blog page-->

<button>
    <a href="/blog/">back</a>
</button>
