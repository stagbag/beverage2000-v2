<script>
    
        const tabList = $state([
        { title: 'home', href:'/', color: 'var(--base-bg)', selected: false },
		{ title: 'films', href:'/films', color:'var(--base-bg)', selected: false },
        { title: 'portfolio', href:'/portfolio', color:'ghostwhite', selected: false},
        { title: 'design', href:'/design', color:'aliceblue', selected: false},
        { title: 'links', href:'/links', color:'honeydew', selected: false},
        { title: 'blog', href:'/blog', color:'beige', selected: false},
        { title: 'about', href:'/about', color:'oldlace', selected: false}
    ]);

    import Tabnav from './Tabnav.svelte';
    let { children } = $props();
    //let article = $state();



</script>

<main class="grid-container">

    <header class="title">
        <h1><a href="/"><img src="render2.png" alt="beverage2000"></a></h1>
    </header>

    <Tabnav {tabList} />
    
    <aside class="sidenav reg">
        <h3>sitemap</h3>
        {#each tabList as link}
        <a href={link.href}>{ link.title }</a>
        {/each}
        <div class="placeholder-s"></div>
        <h4>latest updates</h4>
        <div class="placeholder-s"></div>
    </aside>

    <b class="gutter"></b>

    <article
    class="content-main-container reg">

        <div class="content-main">

            {@render children()}

        </div>
       
 
    </article>

    <b class="gutter"></b>

    <footer class="bumper reg">
        <h4>footer</h4>
    </footer>

</main>

<style>
    h1 img {
        width:100%;
        height:48px;
        object-fit: fill;
    }
    .content-main-container {
        background-color: var(--color-bg);
    }
    .sidenav a {
        display: block;
        margin: 0;
        color: var(--blue-bg);
        width:100%;
    }
    .sidenav a:hover {
        background-color: black;
        color: var(--linkv-text);
    }

    /* sidenav (aside) */
    .sidenav { 
        grid-column: 1;
        justify-self: stretch;
    }
</style>

