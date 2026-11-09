<body>
    <main>
        <div class="bg-gradient">
            <div class="heading">
                <img class="deco-img" src="blinkies/brain.gif" alt="brain">
                <a class="title-img" href="index.html"><img src="render2.png" alt="Beverage2000"></a>
                <img class="deco-img2" src="blinkies/world.gif" alt="earth">
            </div>
            <div class="sub-heading">
                <a href="index.html" class="plain-button link1">home</a>
                <a class="plain-button link2">simple view</a>
                <a class="plain-button link3">information</a>
                <a class="plain-button link4 disabled">MORE...</a>
            </div>
            <div class="container">

                <div class="divider">
                    <img src="blinkies/linechain.gif" alt="-o-o-o-- divider --o-o-o-">
                </div>

                <div class="grid-content quicklinks">
                    <a href="https://beverage2000.tumblr.com">tumblr</a>
                    <a href="https://twitter.com/beverage2000">twitter</a>
                    <a href="https://vimeo.com/user101470068">vimeo</a>
                    <a href="https://www.instagram.com/beverage2000">instagram</a>
                    <a href="https://beverage2000.gumroad.com/">gumroad</a>
                    <a href="https://www.patreon.com/user/membership?u=23618028">patreon</a>
                    <a href="mailto:beverage2k@protonmail.com">contact</a>
                </div>

                <div class="divider">
                    <img src="blinkies/linechain.gif" alt="-o-o-o-- divider --o-o-o-">
                </div>

            </div>
            <div>
                <div class="footer">
                    <img class="deco-img" src="blinkies/construction.gif" alt="under construction">
                    <p> copyright 2023-2026 beverage2000 </p>
                </div>
            </div>
        </div>
    </main>
</body>

<style>
    .bg-gradient {
        background-image: linear-gradient(black, #222, blue);
    }

    .heading {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas:
	      'deco1 title deco2';
        align-items: center;
    }

    .link4 {grid-area: link4; }
    .link3 {grid-area: link3; }
    .link2 {grid-area: link2; cursor: pointer;}
    .link1 {grid-area: link1; }

    .deco-img {
        grid-area: deco1;
        width: 100%;
    }

    .deco-img2 {
        grid-area: deco2;
        width: 100%;
    }

    .plain-button {
        background: #eee;  
        font-family: $lagrange;
        color: black;
        border: 5px outset #ccc;
    }

    .plain-button:hover {
        background: #c9c9c9;
        color: blue;
        border: 5px inset #999; 
    }

    .disabled {
        color: #555;
        background-color: #c9c9c9;
        border-style: inset;
    }

    .disabled:hover {
        color: #555;
        cursor:not-allowed;
        background-color: #c9c9c9;
        border-style: inset;
    }

    .title-img {
        grid-area: title;
    }

    .grid-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 3px;
    }

    .quicklinks {
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
        margin-left:3px;
        margin-right:3px;
    }

    .quicklinks a {
        background-color: #444;
    }
</style>