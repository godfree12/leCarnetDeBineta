<template>
    <div class="page-container-compte">
        <header>
            <h1>Le carnet de Bineta</h1>
        </header>
        <main class="input-container-connection">
            <h1 class="title-connection">SE CONNECTER</h1>
            <input v-model="userInput" type="text" placeholder="Email" class="input-connection" />
            <input v-model="userInput" type="text" placeholder="Mot de passe" class="input-connection" />
            <button type="submit" class="submit-button-connection">Se connecter</button>
            
            <a href="url-to-terms" target="_blank" class="mdp">Mot de passe oublié ?</a>
            
            <hr class="trait">
            <p class="deja-connection">Je n'ai pas de compte !</p>
            <nuxt-link to="/connection"><button type="submit" class="connect-button-connection">S'inscrire</button></nuxt-link>
            
            <label for="terms" class="terms-label-connection">
                <span class="cone-line line1">En vous connectant, vous acceptez les <a href="url-to-terms" target="_blank">conditions d'utilisation</a> et la</span>
                <span class="cone-line line3"><a href="url-to-terms" target="_blank">politique de confidentialité</a> du Carnet De Bineta.</span>
            </label>
            <div class="space-connection"></div>

        </main>
        <footer class="foot-index">
            <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
            <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
            <nuxt-link to="/suggestoin"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
            <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
            <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte-selected.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
      </footer>
    </div>
</template>

<style lang="scss">
.input-container-connection {
    position: absolute;
    top: 15%;
    bottom: 100%;
    width: 100%;
    height: calc(100vh - 12%); // 100% de la hauteur de la fenêtre moins la hauteur du footer
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FFF5EA;
    padding: 0%;
    margin-bottom: 20%; // Marge en bas pour éviter le chevauchement avec le footer
    padding-bottom: 40%;
    margin-top:5%;


  .title-connection{
    margin-bottom: 5%;
    margin-left: 25%;
  }
  .input-connection {
    width: 90%;
    height: 5.5vh;
    margin-bottom: 5%;
    margin-left: 4.5%;
    padding-left: 4%;
    font-size: 16px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: none;
    border-radius: 5% / 45%;
    outline: none;

    &::placeholder {
      color: #6c757d;
      opacity: 1; // Firefox
    }


  }
  .trait{
    margin-top: 5%;
    width: 90%;
    margin-left: 5%;
  }
  .mdp{
    margin-left: 35%;
    color: black;
    margin-bottom: 5%;
  }
  .terms-label-connection {
            text-align: center;
            display: block;
            font-size: small;
            color: black;
        }
        .cone-line {
            display: block;
            margin: 0 auto;
            color: black;
        }
        .line1 { width: 90%; }
        .line2 { width: 90%; }
        .line3 { width: 60%; }
        .line4 { width: 40%; }
        .terms-label-connection a {
            color: black; /* Définit la couleur des liens en noir */
        }
    
  .submit-button-connection {
    width: 90%;
    height: 5.5vh;
    margin-bottom: 5%;
    margin-left: 4.5%;
    margin-top: 10%;
    padding-left: 4%;
    font-size: 150%;
    color: white;
    line-height: 1.5;
    background-color: #CC5500;
    border: none;
    border-radius: 5% / 45%;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: #f96a05;;
    }
  }
  .deja-connection{
    margin-left: 35%;
    margin-top: 3%;   
}
.connect-button-connection{
    width: 90%;
    height: 5.5vh;
    margin-bottom: 25%;
    margin-left: 4.5%;
    margin-top: 5%;
    padding-left: 4%;
    font-size: 150%;
    color: #CC5500;
    line-height: 1.5;
    background-color: white;
    border: 1px solid #CC5500;
    border-radius: 5% / 45%;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

}
.space-connection{
    margin-top: 20%;
   
}

}

</style>