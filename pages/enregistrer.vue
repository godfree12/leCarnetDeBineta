<template>
    <div class="page-container-enregistrer">
        <header>
            <h1>Le carnet de Bineta</h1>
        </header>
        <main class="input-container-enregistrer">
            <h1 class="title-enregistrer">INSCRIS-TOI POUR ENREGISTRER TES RECETTES PREFEREES</h1>
            <input v-model="userInput" type="text" placeholder="Nom" class="input-enregistrer" />
            <input v-model="userInput" type="text" placeholder="Prénom" class="input-enregistrer" />
            <input v-model="userInput" type="email" placeholder="Email" class="input-enregistrer" />
            <input v-model="userInput" type="password" placeholder="Mot de passe" class="input-enregistrer" />

            <div class="terms-container-enregistrer">
                <input type="checkbox" id="terms-enregistrer" class="terms-checkbox-enregistrer" required>
                <label for="terms" class="terms-label-enregistrer">
                J'accepte les <a href="url-to-terms" target="_blank">conditions d'utilisation</a>.
                </label>
            </div>

            <button type="submit" class="submit-button-enregistrer">S'inscrire</button>
            <hr>
            <p class="deja-compte-enregistrer">J'ai déjà un compte !</p>
            <button type="submit" class="connect-button-enregistrer">Se connecter</button>
            <div class="space-enregistrer"></div>
        </main>
        <footer class="foot-index">
            <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
            <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
            <nuxt-link to="/suggestion"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
            <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer-selected.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
            <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
      </footer>
    </div>
</template>

<style lang="scss">
.input-container-enregistrer {
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


  .title-enregistrer{
    margin-bottom: 5%;
    font-size: 140%;
    margin-left: 5%;
  }
  
  .input-enregistrer {
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

  .terms-container-enregistrer {
    display: flex;
    align-items: center;
    margin-top: 10px; // Adjust the margin as needed
    margin-left: 7%; // Adjust the margin to move checkbox and label to the right
    

    .terms-checkbox-enregistrer {
      appearance: none; // Remove default appearance
      -webkit-appearance: none; // For Safari and Chrome
      -moz-appearance: none; // For Firefox
      width: 20px; // Adjust width as needed
      height: 20px; // Adjust height as needed
      background-color: #fff;
      border: none;
      border-radius: 4px;
      margin-right: 10px; // Adjust margin between checkbox and label
      cursor: pointer;
      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

      // Custom checkmark style
      &:checked {
        background-color: #CC5500; // Color when checked (optional)
        border-color: none; // Border color when checked (optional)
        &::before {
          content: '\2713'; // Unicode checkmark symbol
          display: block;
          text-align: center;
          line-height: 20px; // Adjust line-height to center checkmark
          color: #fff; // Color of the checkmark
        }
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    }

    .terms-label-enregistrer {
      font-size: 14px; // Adjust font size as needed
      color: #495057; // Adjust text color as needed
      white-space: nowrap; // Prevent label from wrapping
      margin-left: 5px; // Adjust margin to move label text further right

      a {
        color: black; // Link color
        text-decoration: underline;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .submit-button-enregistrer {
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
  .foot-index {
  margin-top: -100px; /* Ajustez cette valeur selon la hauteur de votre footer */
}
hr{
  
    border-top: 1px solid black; /* Ajoute une bordure supérieure pour créer une ligne */
    width: 90%; /* Largeur de la ligne */
    margin-left: 4.5%;
    margin-top: 3%;
}
.deja-compte-enregistrer{
    margin-left: 38%;
    margin-top: 3%;
    
}
.connect-button-enregistrer{
    width: 90%;
    height: 5.5vh;
    margin-bottom: 5%;
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

.space-enregistrer{
    margin-top: 10%;
    width: 100%;
    height: 2vh;
    background-color: none;
}




}



</style>