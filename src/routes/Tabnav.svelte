<script>
    
    import { page } from '$app/state';
    let {  tabList  } = $props();
    $effect(() => { 
        for (var t=0; t< tabList.length; t++){
            const root = document.querySelector(':root');
            if(page.url.pathname === tabList[t].href) {
                root.style.setProperty('--color-bg', tabList[t].color);
    }
}
});
   

    
    //derived.by(() =>
        //    const root = document.querySelector(':root');
    //    root.style.setProperty('--color-bg', tabColor);
     // for loop: iterate array
     // if i.href === active)
     //set --color-bg to i.color
     //endfor
    
    //onclick={() => update(tab.color)}
    //function update(tabColor) {
    //    const root = document.querySelector(':root');
    //    root.style.setProperty('--color-bg', tabColor);
    //}
//function update(tabColor) {        
//            let root = document.querySelector(':root');
 //           root.style.setProperty('--color-bg', tabColor);
 //       }
</script>

<nav class="tab-nav">
    <ul >

        {#each tabList as tab}
            <li>
                <a
                href={ tab.href }
                style:background-color={tab.color}
                class:selected= { tab.href === page.url.pathname }
                > { tab.title } </a>
            </li>
            
        {/each}

    </ul>
    
</nav>

<style>

    .tab-nav {
        grid-column: 3;
        align-self: end;
    }

    .tab-nav ul {
        display: flex;
        flex-direction: row;
        gap: 0.1rem;
        max-width:100%;
    }

    .tab-nav li {
        display: inline-flex;
    }
    .tab-nav a {
    flex-shrink:3;
    padding: 0.2rem;
    background-color: var(--base-bg);
    color: var(--blue-text);
    text-decoration: underline;
    text-decoration-style:double;
    text-decoration-color: var(--blue-bg);
    border: 1px solid var(--blue-text);
    border-bottom: none;
}

    .tab-nav a:hover {
        color: var(--link-text);
        background-color: beige;
    }
        
    .tab-nav .selected  {
        transform: translateY(1px);
        }
</style>
