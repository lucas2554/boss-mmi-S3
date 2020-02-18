<template>
    <main id="accueil">
        <header>
            <nav>
                <ul>
                    <a href="">
                        <router-link to="/">
                            <li>Accueil <i class="fas fa-plus-circle"></i></li>
                        </router-link>
                    </a>
                    <router-link to="/filmographie">
                        <a href="">
                            <li>Filmographie <i class="fas fa-plus-circle"></i></li>
                        </a>
                    </router-link>

                    <router-link to="/detroit">
                        <a href="">
                            <li>Detroit <i class="fas fa-plus-circle"></i></li>
                        </a>
                    </router-link>

                    <router-link to="/biographie">
                        <a href="">
                            <li>De la peinture au cinéma <i class="fas fa-plus-circle"></i></li>
                        </a>
                    </router-link>

                    <router-link to="/recompense">
                        <a href="">
                            <li class="last">Une réalisatrice récompensé <i class="fas fa-plus-circle"></i></li>
                        </a>
                    </router-link>
                </ul>

            </nav>
        </header>
        <div class="entete">
            <h1>
                <span class="qui">Qui est</span> <br>
                <span>
                <span class="haut">KATHRYN</span>
                <br>
                <span class="bas">BIGELOW</span>
                <br>
                ?
            </span>
            </h1>
            <i class="fas fa-angle-down"></i>
        </div>

        <div class="presentation">
            <p>Qui est <strong>Kathryn Bigelow </strong> ? Un peintre, une réalisatrice ? Sur ce site vous en aprendrez
                plus sur la vie de cette femme aux multiples facettes.</p>
            <img class="kathlyn" src="../assets/images/presentation.png" alt="kathryn bigelow">

            <router-link to="/biographie"><a href=""> <img class="plus" src="../assets/images/add.svg" alt="voir plus"></a>
            </router-link>
        </div>


    </main>


</template>
<script>
    export default {
        name: 'accueil',
        data() {
            return {
                msg: 'bienvenu'
            }
        }
    }


</script>
<style>

    nav.hidden {
        z-index: 0;
    }
    main{
        z-index: -2;
    }

    nav {
        position: absolute;
        top: 0;
        width: 30%;
        height: 100vh;
        background-color: #D7D7D7;
        z-index: 2;
    }

    nav > ul {
        list-style-type: none;
        padding: 0 20% 0 8%;

    }

    nav > ul li {
        padding: 8vh 0 8vh 0;
        border-bottom: 2px solid #747474;
        text-align: left;
    }

    nav > ul li.last {
        border-bottom: none;
    }

    nav > ul {
        list-style-type: none;
        font-family: 'Montserrat', sans-serif;

    }

    nav > ul > a {
        text-decoration: none;
        color: #585858;
    }

    nav.hidden > ul > a {
        color: #D7D7D7;
    }

    nav > ul li i {
        margin-left: 5%;
        opacity: 0;
    }

    nav > ul li:hover i {
        margin-left: 10%;
        transition: 1s;
        animation-name: opacity;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }

    @keyframes opacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    main#accueil {
        width: 100%;
        height: auto;
    }

    .entete {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(115deg, #2F3038, #111224);
        z-index: 2;
    }

    #accueil .presentation {
        width: 100%;
        height: 50vh;
    }

    #accueil .presentation img.kathlyn {
        width: 277px;
        height: auto;
        float: right;
        margin-top: -10vh;
        margin-right: 8%;
        position: relative;
        top: -4vh;
        z-index: -1;
    }

    .presentation img.plus {
        width: 5%;
        height: auto;
        position: relative;
        left: 2%;
        transition: 1s;
        top: 3vh;
        opacity: 0;
    }

    .presentation:hover img.plus {
        top: 5vh;
        opacity: 1;
        transition: 1s;
    }

    .entete h1 {
        color: #585858;

        float: right;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        line-height: 8vw;
        font-size: 5vw;

    }

    .entete h1 span.qui {
        font-size: 5vw;
        color: #585858;
        text-align: center;
    }

    .entete h1 > span {
        font-size: 12vw;
        text-align: center;

    }

    .entete h1 > span > span.bas {
        background-image: url("../assets/images/image-accueil.jpg");
        background-repeat: no-repeat;
        background-position: right -25vh;
        background-size: 100% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .entete h1 > span > span.haut {
        background-image: url("../assets/images/image-accueil.jpg");
        background-repeat: no-repeat;
        background-position: right -2vh;
        background-size: 100% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .presentation p {
        font-family: 'Quicksand', sans-serif;
        width: 60%;
        margin-top: 20vh;
        margin-left: 5%;
        font-size: 2em;
        text-align: center;

    }

    .entete i {
        color: #D7D7D7;
        position: relative;
        left: 0;
        top: 0;
        width: 50%;
        margin-left: 30%;
        animation: bounce infinite ease-in-out 1s;
    }

    @keyframes bounce {
        0% {
            top: -5vh;
        }
        50% {
            top: -10vh;
        }
        100% {
            top: -5vh;
        }
    }


</style>