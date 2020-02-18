<template>
    <main id="detroit">
        <div class="intro">
            <p>Voici une fiche d'information sur le film <strong>Detroit</strong> réalisé par <strong>Kathryn
                Bigelow</strong> en 2017</p>
        </div>


        <div class="container">
            <h2>Detroit, un film étonnant</h2>

            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YSxkUjRqUcY?start=9"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>

            </iframe>

            <div class="content">
                <p class="date">Sortit en France le : <span>11 octobre 2017</span></p>
                <p class="real">Réalisé par : <span>Kathryn Bigelow</span></p>
                <p class="duree">Durée : <span>2h 24min</span></p>
                <ul class="acteur">Acteurs principaux :
                    <li>- John Boyega</li>
                    <li>- Will Poulter</li>
                    <li>- Hannah Murray</li>
                </ul>

            </div>
            <h3>Synopsis</h3>
            <div class="grid">
                <p class="synopsis">Se déroulant dans les années 1960, "Detroit" est un drame historique américain. L'histoire s'inspire des
                    célèbres émeutes qui ont eu lieu à Détroit, dans l'État du Michigan, en juillet 1967 pendant cinq jours. Une
                    véritable guerre civile qui a commencé quand des policiers arrêtent des soldats afro-américains dans un bar
                    clandestin. Une intervention brutale qui va déclencher la révolte et le soulèvement de la population du
                    quartier. Au final, plus d'une quarantaine de morts, des milliers de blessés et autant d'arrestations</p>
                <img src="../assets/images/films/detroit-fiche.jpg" alt="affiche du film">
            </div>

        </div>


    </main>


</template>
<script>
    export default {
        name: 'detroit',
        data() {
            return {
                msg: 'bienvenu'
            }
        }
    }
</script>
<style>

    nav.hidden{
        display: block;
    }
    header{

    }

    #detroit h2 {
        color: #2F3038;

        margin-left: 5%;
        text-align: left;
    }

    #detroit h2:after {
        content: "";
        width: 25%;
        height: 0;
        border-top: 5px solid #D7D7D7;
        position: relative;
        display: block;
        left: 80%;

        top: -4vh;
    }

    #detroit .container p.date, p.real, p.duree {
        margin: 10% 0 5vh 0;
        color: #747474;
        font-size: 1.2em;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;

    }

    #detroit p.date, p.duree {
        border-right: 1px solid #747474;
    }

    #detroit .container p span {
        color: #2F3038;
    }

    #detroit .container h3 {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        color: #2F3038;
        font-size: 2em;

    }

    #detroit .acteur{
        padding: 0;
        color: #747474;
        list-style-type: none;
        font-size: 1.2em;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        margin-top: 0;


    }

    .acteur li{
        color: #2F3038;
        padding: 1vh 0 1vh 0;
    }

    p.synopsis{
        width: 100%;
        margin-right: auto;
        text-align: left;
        font-family: 'Quicksand', sans-serif;
        font-size: 1.2em;
        margin-left: 5%;


    }

    main#detroit {
        width: 100%;
        height: auto;
    }

    #detroit .container {
        width: 100%;
        height: auto;
    }

    iframe {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .content {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 20vh 20vh;
        text-align: center;
        width: 80%;

        margin: 5vh auto 10vh auto;
    }

    #detroit .grid {
        display: grid;
        grid-template-columns: 70% 30%;
        grid-template-rows: 50vh;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .grid img {
        width: 150px;
        height: auto;
        margin-left: 30%;
        margin-top: -5vh;
        border: 2px solid #2F3038;
    }

    .container h2 {
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        font-size: 3em;
        margin-bottom: 5vh;
        color: #585858;
        text-transform: uppercase;

    }

    .container h2 > span {
        color: #747474;
        font-size: 0.8em;
    }


</style>
