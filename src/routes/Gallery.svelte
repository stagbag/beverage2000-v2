<script>
let colSize = $state(100);
$effect(() => { 
    const root = document.querySelector(':root');
    root.style.setProperty('--gal-row-size', colSize+"px");
});
</script>

<p>
    thumbnail width:
    
    <label>
        <input type="number" bind:value={colSize} min="100" max="1000" />
        <input type="range" bind:value={colSize} min="100" max="1000" />
    </label>
    </p>
<div class="gallery-grid-container">
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
    <div class="gallery-item" style:width={colSize}>j
    </div>
</div>

    <style>
        .gallery-item {
            display: block;
            margin: 1em;
            background-color: var(--blue-bg);
            max-width: var(--gal-row-size);
        }
        .gallery-grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(var(--gal-row-size), 1fr));
        }
    </style>