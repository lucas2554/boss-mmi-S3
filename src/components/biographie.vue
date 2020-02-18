<template>
    <main id="bio">
        <div class="intro">
            <p>Découvrez ici une courte biographie de la vie de <strong>Kathryn Bigelow</strong> !</p>
        </div>

        <h2>Kathryn Bigelow, de la peinture au cinéma</h2>

        <p>Kathryn Bigelow, née le 27 novembre 1951 à San Carlos (Californie), est une réalisatrice et scénariste
            américaine, première femme à recevoir un Oscar de la meilleure réalisation <br>
            Elle était marié au réalisateur <strong>James Cameron</strong>, mais malheureusement le couple se sépare en 1991.
        </p>
        <img class="kat" src="../assets/images/kat.jpg" alt="photo de kathryn Bigelow">

        <h3>Ses débuts dans le cinéma</h3>
        <p>Kathryn Bigelow étudie la théorie et la critique de cinéma à l'université Columbia où elle a notamment pour
            professeurs l'écrivaine Susan Sontag et le cinéaste Miloš Forman.

            Après un court métrage avec la violence pour toile de fond (The Set-up), et un film coréalisé avec Monty
            Montgomery (The Loveless), Kathryn Bigelow met en scène, en 1987, Aux frontières de l'aube (Near Dark), un film
            de vampires. La même année, elle réalise la vidéo de Touched by the Hand of God de New Order. Elle tourne
            ensuite Blue Steel, un film où une jeune policière (Jamie Lee Curtis) est poursuivie par un tueur psychopathe.

            En 1991, elle remporte son premier grand succès commercial avec <strong> Point Break </strong> avec dans les rôles principaux
            Patrick Swayze et Keanu Reeves.

            En 1995, <strong> Strange Days</strong>, un film de science-fiction, reçoit de bonnes critiques mais ne rencontre pas de succès
            public.

            En 2000, alors que le thriller à moyen budget Le Poids de l'eau est un flop commercial, la cinéaste se voit
            confier la responsabilité de réaliser une grosse production - le plus gros budget de sa carrière, 100 millions
            de dollars. Ce thriller à suspense, nommé <strong> K-19 : Le Piège des profondeurs </strong> (K-19: The Widowmaker), sort en 2002.
            Essentiellement un huis-clos se déroulant dans le premier sous-marin nucléaire russe, elle y dirige Harrison
            Ford, face à Liam Neeson. Le film essuie cependant un cuisant échec commercial, ne rapportant que 66 millions de
            dollars, et divisant la critique.

            Si en 2003, la cinéaste est membre du jury lors de la Berlinale, elle se retire bien des plateaux de cinéma.
            Elle ne revient vers la mise en scène qu'en 2004, afin de mettre en boite le dixième et dernier épisode de
            l'éphémère série d'action Karen Sisco, avec Carla Gugino dans le rôle-titre.</p>

        <h3>Ses gros succès depuis les années 2000</h3>
        <p>Il faudra attendre 2009 pour qu'elle revienne sur grand écran : ce sera pour un film indépendant, le thriller de
            guerre <strong>Démineurs</strong>, avec un inconnu, Jeremy Renner, en tête d'affiche, dans le rôle d'un soldat spécialisé dans le
            déminage pendant la guerre d'Irak. Produit pour 15 millions, le film en rapporte 50 et reçoit des critiques
            dithyrambiques. En 2010, elle est la première femme à remporter le prix du meilleur film et du meilleur
            réalisateur pour Démineurs à la 63e cérémonie des BAFTA Awards1. Quelques semaines plus tard, lors de la 82e
            cérémonie des Oscars, elle gagne également le trophée des catégories du meilleur film et du meilleur
            réalisateur. Le film obtient par ailleurs quatre autres récompenses. Ainsi devient-elle la première femme de
            l'histoire du cinéma à recevoir l'Oscar de la meilleure réalisation2.

            Le film donne surtout le ton du cinéma de Kathryn Bigelow : un univers masculin, et ayant pour thèmes de
            prédilection la violence, la terreur et l'humanité menacée.

            Elle revient dès décembre 2012 avec un autre projet, au sujet éminemment politique et poursuivant son
            exploration de la guerre en Irak : Zero Dark Thirty est consacré à la traque de Ben Laden par une équipe
            gouvernementale dirigée par Maya, une analyste de la CIA incarnée par Jessica Chastain. Lors de sa sortie en
            salles, le film remporte à la fois un succès critique et public, rapportant 132 millions de dollars de recettes
            mondiales pour un budget de 40 millions3. Le film reçoit 5 nominations à la 85e cérémonie des Oscars et 4 aux
            70e Golden Globes. Chastain emporte celui de la meilleure actrice.

            En 2017, elle revient avec un troisième long-métrage scénarisé par le journaliste Mark Boal, <strong>Detroit</strong>, drame
            historique sur les émeutes survenues dans la ville américaine de Détroit en 1967 et les événements survenu à
            l'Algiers Motel.</p>



        <div class="grille-image">
            <img class="passif" src="../assets/images/films/detroit.jpg" alt="affiche du film detroit">
            <img src="../assets/images/films/zdt.jpg" alt="affiche du film point zero dark thirty">
            <img src="../assets/images/films/eau.jpg" alt="affiche du film le poids de l'eau">
            <img src="../assets/images/films/demineurs.jpg" alt="affiche du film demineurs">
            <img src="../assets/images/films/pointbreak.jpg" alt="affiche du film point break">
            <img src="../assets/images/films/strange.jpg" alt="affiche du film strange day">

        </div>


    </main>


</template>
<script>
    export default {
        name: 'biographie'
    }
</script>
<style>

    .hidden{
        display: block;
    }
    nav{
        z-index: 2;
    }

    main#bio {
        width: 100%;
        height: auto;
    }

    div.grille-image {
        display: grid;
        grid-template-columns: 33.333% 33.333% 33.333%;
        grid-template-rows: 50%;
        width: 80%;

        margin: 10vh auto 5vh auto;
    }

    div.grille-image img {
        width: 100%;
        height: auto;
        transition: 1s;
        z-index: 1;

    }

    div.grille-image img:hover {
        transform: scale(1.2);
        transition: 1s;
    }



    div.grille-image img {
        transform: scale(1);
        transition: 1s;
    }


    #bio h2{
        font-family: 'Quicksand', sans-serif;
        font-size: 1.4em;
        color: #747474;
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;

    }


    #bio h3{
        font-family: 'Quicksand', sans-serif;
        font-size: 1.2em;
        color: #585858;
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;

    }

    #bio p{
        color: #2F3038;
        font-family: 'Quicksand', sans-serif;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%  ;
        line-height: 1.5em;


    }

    .intro p {
        font-family: 'Quicksand', sans-serif;
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 3em;
        text-align: center;
        padding-top: 5vh;
        width: 80%;

    }

    .intro {
        width: 100%;
        height: 30%;
        background-color: #D7D7D7;
        box-shadow: 0 4px 12px #aaa;
    }

    img.kat {
        width: 30%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 30px;
    }





</style>