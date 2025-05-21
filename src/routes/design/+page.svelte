
<script>

	export let data;
	const { designs } = data;

</script>

<h1>SELECTED WORKS: web design archive</h1>

{#if designs }
	<div class="entries-grid">
		{#each designs as design}
		<div class="entry-card">
		<div class="namedate">
			<a href={design.url}>{design.name}</a><p class="date">{design.date}</p>
		</div>
			{#if design.preview}
				<img src={design.preview} alt={design.name} />
			{/if}
		</div>
		{/each}
	</div>
{:else}
	<p>No posts found</p>
{/if}

<style>

	h1 { color: var(--steelblue); line-height: 150%;}
	.entries-grid {
		display: grid;
	}

	.entry-card {
		align-self: end;
		padding-bottom: 1rem;
	}
	.date {
		color: var(--base-bg);
		background-color: black;
		position: absolute;
		transform: translateY(-1px);

	}

	.entry-card a {
		color: var(--blue-bg);
		font-family: Arial, sans-serif;
		text-decoration: underline;
	}
	.entry-card a:hover {
		color:var(--link-text); 
	}

	.namedate {
	
		font-size: 115%;
		float: left;
	}

	.entry-card img {
		max-width: 50%;
		float: right;
		border: 1px solid var(--blue-bg);
		margin: var(--grid-gap);
	}
	.entry-card img:hover {
		filter: saturate(0.75) brightness(1.1);
	}

</style>
