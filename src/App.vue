<template>
    <div id="app">
        <header>
            <nav class="hidden">
                <ul>
                    <router-link to="/">
                        <a href="">
                            <li class="accueil active">Accueil</li>
                        </a>
                    </router-link>

                    <router-link to="/filmographie">
                        <a href="">
                            <li class="filmo">Filmographie</li>
                        </a>
                    </router-link>

                    <router-link to="/detroit">

                        <a href="">
                            <li class="detroit">Detroit</li>
                        </a>
                    </router-link>

                    <router-link to="/biographie">

                        <a href="">
                            <li class="bio">Biographie</li>
                        </a>
                    </router-link>

                    <router-link to="/recompense">

                        <a href="">
                            <li class="recompense">Récompense</li>
                        </a>
                    </router-link>
                </ul>
            </nav>

        </header>
        <router-view/>
        <footer>
            <h1>Qui est Kathryn Bigelow ?</h1>
            <p>Site réalisé dans le cadre d'un exercice pédagogique au <a href="">DUT MMI de Montbéliard</a></p>
            <p>lucas.gurgey@orange.fr</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }

    // var filmo = document.querySelector('li.filmo');
    // var accueil = document.querySelector('li.accueil');
    // filmo.classList.add('active');
    // accueil.classList.remove("active")

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0;
    }

    main{
    }

    a {
        text-decoration: none;
    }

    body {
        margin: 0;
    }

   nav.hidden {
        display: none;
    }

    footer {
        width: 100%;
        height: 50vh;
        background-color: #D7D7D7;
    }

    footer h1 {
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat', sans-serif;;
        text-align: center;
        font-weight: lighter;
        color: #747474;
        margin-top: 0;
    }

    footer p {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        text-align: center;
        font-family: 'Quicksand', sans-serif;
        color: #2F3038;
        padding-top: 5vh;

    }

    footer p a {
        text-decoration: none;
        color: #2F3038;
        transition: .2s;

    }

    footer:hover a {
        color: white;
        font-weight: bold;
        transition: .2s;
    }

    footer h1:before {
        width: 10%;
        height: 10vh;
        content: "";
        position: relative;
        display: block;
        border-bottom: 4px solid white;
        border-radius: 2%;
        top: 8vh;
        left: 15%;
        opacity: 0;
    }

    footer:hover h1:before {
        opacity: 1;
        animation-name: underline;
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    nav.hidden {
        position: fixed;
        width: 100%;
        height: 15vh;
        background-color: #747474;
        top: 0;
        border-bottom: #2F3038 2px solid;
    }

    nav.hidden ul li {
        float: left;
        border-bottom: none;
        padding: 3vh 3% 0 3%;
    }

    nav.hidden ul li:before {
        content: "";
        width: 0;
        height: 0;
        position: relative;
        display: block;
        border-bottom: 2px solid white;
        border-radius: 2%;
        top: 4vh;
        left: 0;
        color: white;
        transition: .5s;

    }

    nav.hidden ul li.active:before {
        content: "";
        width: 100%;
        height: 0;
        position: relative;
        display: block;
        border-bottom: 2px solid white;
        border-radius: 2%;
        top: 4vh;
        left: 0;
        color: white;

    }

    nav.hidden ul li:hover:before {
        width: 100%;
        transition: .5s;
    }

    nav.hidden > ul > a {
        color: #D7D7D7;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    @keyframes underline {
        0% {
            left: 15%;
            width: 0;
        }

        50% {
            width: 10%;
        }

        100% {
            left: 80%;
            width: 0;
        }

    }

    main#filmo, main#detroit, main#bio, main#recompense {
        margin-top: 15vh;
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

</style>
