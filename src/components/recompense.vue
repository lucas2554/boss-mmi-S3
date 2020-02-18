<template>
    <main id="recompense">
        <div class="intro">
            <p>Voici une liste des récompenses gagnés par <strong>Kathryn Bigelow</strong> !</p>
        </div>
        <img src="../assets/images/kat-recompense.jpg" alt="photo de Kathryn">

        <div class="recompense">
            <h2>Ses récompenses :</h2>

            <ul>
                National Board of Review
                <li><span class="gold">Lauréat</span> du meilleur film pour : <span>Zero Dark Thirty</span></li>
                <li><span class="gold">Lauréat</span> du meilleur réalisateur pour : <span>Zero Dark Thirty</span></li>
            </ul>

            <ul>
                New York Film Critics Circle Award (édition 77)
                <li><span class="gold">Prix</span> du meilleur film pour : <span>Zero Dark Thirty</span></li>
                <li><span class="gold">Prix</span> du meilleur réalisateur pour : <span>Zero Dark Thirty</span></li>
            </ul>

            <ul>
                Oscars / Academy Awards
                <li><span class="gold">Oscar</span> du meilleur film pour : <span>Démineurs</span></li>
                <li><span class="gold">Oscar</span> du meilleur réalisateur pour : <span>Démineurs</span></li>
            </ul>

        </div>

        <div class="nomination">


        </div>

    </main>


</template>
<script></script>
<style>

    nav.hidden {
        display: block;
    }

    #recompense > img {
        width: 25%;
        position: relative;
        left: 30%;
        top: 50vh;
        border-radius: 30px;
    }

    main#recompense {
        width: 100%;
        height: auto;
    }

    main#recompense .recompense {
        margin-bottom: 15vh;
    }

    .recompense ul {
        font-family: 'Quicksand', sans-serif;
        font-size: 1.5em;
        list-style-type: none;
        text-align: left;
        padding-left: 5%;

    }

    .recompense ul li {
        font-family: 'Quicksand', sans-serif;
        font-size: 0.8em;
        padding: 1%;

    }

    .recompense .gold {
        color: gold;
    }

    .recompense span {
        color: #585858;
        font-weight: bold;
    }

    .recompense h2 {
        font-family: 'Quicksand', sans-serif;

        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: -10vh;
        font-size: 2.5em;
        color: #585858;
        text-align: center;
        padding: 5vh 0 5vh 0;
    }

</style>