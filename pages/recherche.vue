<template>
 
  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" >
      <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap" rel="stylesheet">
    </head>
    <header>
      <h1>Le carnet de Bineta</h1>
    </header>
    <main class="main-recherche">
      <div class="content-recherche">
        <div class="search-container-recherche">
          <button class="search-icon-recherche">
            <img src="~/assets/search-outline.svg" alt="Rechercher" />
          </button>
          <input v-model="userInput" type="text" placeholder="Recette, ingrédients, pays..." class="input-recherche" />
          <button class="filter-icon-recherche">
            <img src="~/assets/filtre.svg" alt="Filtrer" />
          </button>
        </div>
        
        <div class="plusRecherche-recherche">
          <span class="plusRecherche-title-recherche">Les plus recherchées</span>
          
        </div>
        <div class="plusrectangle-container-recherche">
          <div class="plusrectangle-item-recherche"></div>
          <div class="plusrectangle-item-recherche"></div>
          <div class="plusrectangle-item-recherche"></div>
          <div class="plusrectangle-item-recherche"></div>
        </div>
        <div class="pays-recherche">
          <span class="pays-title-recherche">Par pays</span>
          
        </div>
        <div class="paysrectangle-container-recherche">
          <div class="paysrectangle-item-recherche"></div>
          <div class="paysrectangle-item-recherche"></div>
          <div class="paysrectangle-item-recherche"></div>
          <div class="paysrectangle-item-recherche"></div>
        </div>
        <div class="ra-recherche">
            <span class="recent-title-recherche">Par ingrédients</span> 
            <div class="large-rectangle-container-recherche">
              <div class="large-rectangle-item-recherche"></div>
              <div class="large-rectangle-item-recherche"></div>
              <div class="large-rectangle-item-recherche"></div>
              <div class="large-rectangle-item-recherche"></div>
            </div>
        </div>
        
        

        <div class="bloc-bas-recherche">
            <div class="full-width-rectangle-recherche">
            <div class="email-suscribe-recherche">
              <p class="white-sentence">Pour ne rien rater des nouvelles  recettes et decouvertes !</p>
              <input type="text-suscribe-recherche" placeholder="Ton email">
              <button type="submit">s'abonner</button>
            </div>
          </div>
          <div class="full-black-width-rectangle-recherche">
            <div class="reference-recherche">
              <h1 class="reference-title-recherche">Le carnet de Bineta</h1>
                    <br>
                    <p class="reference-text-recherche">La référence des recettes africaines</p>
            </div>
            <div class="social-media-recherche">
                <a href="https://www.instagram.com" target="_blank" class="instagram">
                  <img src="~/assets/icone-instagram.svg" alt="Instagram Logo" class="social-logo">
                </a>
                    
                <a href="https://www.pinterest.com" target="_blank" class="pinterest">
                  <img src="~/assets/icone-pinterest.svg" alt="Instagram Logo" class="social-logo">
                </a>
            </div>  
          </div>

        </div>
        
    </div>

      
      
    </main>
    <footer class="foot-recherche">
        <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
        <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche-selected.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
        <nuxt-link to="/suggestion"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
        <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
        <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
    </footer>
  </div>
</template>

<style lang="scss">

// styles.scss

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');






  $text-color: #000000; // Couleur du texte principal (noir)
  $link-color: #04A364;
  

  
  body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #FFF5EA;
    overflow: hidden;
    font-family: "Darker Grotesque", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;

  }
  
  // Styles pour le header
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; // Largeur de l'entête ajustée à 100% de la largeur de l'écran
    height: 15%;
    background-color: #FFF5EA;
    color: #CC5500;
    font-family: 'Great vibes', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  // Styles pour le footer
  .foot-recherche {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background-color: #FFF5EA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius: 8%;
    border-top-right-radius: 8%;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .logo-subtitle{
      display: flex;
      flex-direction: column;
      align-items: center; // Centre horizontalement
      text-align: center; // Centre le texte
      font-family: 'Darker Grotesque', sans-serif;
      font-size: 12px;
      color: #000000;

    }

    // Styles pour les liens dans le footer
    a {
        display: flex; // Utiliser flexbox pour aligner les éléments
        
        img {
            height: 30px; // Hauteur commune pour tous les logos
            width: 30px; // Largeur commune pour tous les logos
            transition: transform 0.2s ease-in-out; // Transition agréable lors du survol
            margin: 0 5px;
            // Ajustement spécifique pour le logo "plus.svg"
            &.logo-plus {
                position: relative;
                height: 80px; // Hauteur spécifique pour le logo "plus.svg"
                width: 100%; // Largeur spécifique pour le logo "plus.svg"
                left: 5%;
                bottom: -5px;
            }

            &:hover {
                transform: scale(1.2); // Effet d'agrandissement au survol
            }
        }
    }
}  
  // Styles pour le main
  .main-recherche {
    position: absolute;
    top: 15%;
    bottom: 100%;
    width: 100%;
    height: calc(100vh - 10%); // 100% de la hauteur de la fenêtre moins la hauteur du footer
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FFF5EA;
    padding: 0%;
    margin-bottom: 15%; // Marge en bas pour éviter le chevauchement avec le footer
    padding-bottom: 10%;
    
    
    .search-container-recherche {
  position: relative;
  width: 100%; // Ensure the container takes up full width if needed
  display: flex;
  align-items: center;

  .search-icon-recherche, .filter-icon-recherche {
    position: absolute;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4.5%;
    margin-right: 5%;

    img {
      width: 90%; // Adjust the width as needed
      height: 90%; // Adjust the height as needed
    }
  }

  .search-icon-recherche {
    left: 10px; // Adjust spacing from the left edge as needed
  }

  .filter-icon-recherche {
    right: 10px; // Adjust spacing from the right edge as needed
  }

  .input-recherche {
    width: 90%;
    margin-left: 4.5%;
    height: 8vh;
    padding-left: 40px; // Adjust to make space for the search icon
    padding-right: 40px; // Adjust to make space for the filter icon
    font-size: 16px;
    color: #495057;
    background-color: #fff;
    border-radius: 10% / 45%;

    &::placeholder {
      color: #6c757d;
      opacity: 1; // Firefox
    }

    

    
  }
}



    .content-recherche {
      position: relative;
      padding: 0%;
      margin: 0%;
      width: 100%;
      height: 100%;
      margin-bottom: 60%;

      .search-container {
        position: relative;
        width: 100%;
        margin-top: 10px; /* Espacement au-dessus de l'input */
        
      }

      
        // Styles pour la catégorie
      .plusRecherche-recherche {
        margin-top: 10%; // Espace significatif entre les sections
        display: flex;
        justify-content: space-between; // Espacement entre les éléments sur la ligne
        align-items: center; // Centrer verticalement les éléments
        margin-bottom: 5%;
       
        
        .plusRecherche-title-recherche {
          margin-left: 4.5%;
          font-family: 'Darker Grotesque';
          font-weight: 400px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
        }
    

  
      }
      .plusrectangle-container-recherche{
      
      display: flex;
      overflow-x: auto; // Permettre le défilement horizontal
      margin-top: 20px; // Marge en haut pour l'espacement
      width: 100%; // S'assurer que le conteneur prend toute la largeur disponible
      white-space: nowrap; // Empêcher le retour à la ligne des éléments enfants
      margin-bottom: 12%;
      margin-left: 4.5%;
      
      .plusrectangle-item-recherche {
        flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
        width: 50%;
        height: 25vh;
        background-color: white;
        border-radius: 10%;
        margin-right: 5%; // Espacement entre les rectangles
        /* Autres styles des rectangles */
      }

    }

      .pays-recherche {
        margin-top: 10%; // Espace significatif entre les sections
        display: flex;
        justify-content: space-between; // Espacement entre les éléments sur la ligne
        align-items: center; // Centrer verticalement les éléments
        margin-bottom: 5%;
       
        
        .pays-title-recherche {
          margin-left: 6%;
          font-family: 'Darker Grotesque';
          font-weight: 400px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
        }
        

  
      }
      .paysrectangle-container-recherche{
      
      display: flex;
      overflow-x: auto; // Permettre le défilement horizontal
      margin-top: 20px; // Marge en haut pour l'espacement
      width: 100%; // S'assurer que le conteneur prend toute la largeur disponible
      white-space: nowrap; // Empêcher le retour à la ligne des éléments enfants
      margin-bottom: 12%;
      margin-left: 4.5%;
      //height: 10vh;
      .rectangle-item-recherche {
        flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
        width: 40%;
        height: 100px;
        background-color: white;
        border-radius: 10%;
        margin-right: 5%; // Espacement entre les rectangles
        /* Autres styles des rectangles */
      }
      .paysrectangle-item-recherche{
        flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
        width: 40%;
        height: 30vh;
        background-color: white;
        border-radius: 5%;
        margin-right: 5%; 
      }
  


    }

  
      .ra-recherche{
        .recent-title-recherche {
          margin-left: 4.5%;
          font-family: 'Darker Grotesque';
          font-weight: 300px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
          margin-bottom: 10%;
          
        }
        
        .large-rectangle-container-recherche {
          overflow-x: auto; // Permettre le défilement horizontal
          width: 100%; // S'assurer que le conteneur prend toute la largeur disponible
          white-space: nowrap; // Empêcher le retour à la ligne des éléments enfants
          display: flex;
          margin-top: 5%;
          margin-bottom: 10%;
          margin-left: 4.5%;
          

          .large-rectangle-item-recherche {
            flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
            width: 40%;
            height: 30vh;
            background-color: white;
            border-radius: 5%;
            margin-right: 5%; 
            
          }
        }
          

      }




    }
    //les deux bloc blanc et noir en bas 
    .bloc-bas-recherche{
      width: 100%;
      margin-bottom: 60%;
      height: 85vh; /* Utilisation de vh pour définir la hauteur relative à la vue */
      
      .full-width-rectangle-recherche {
      
      width: 100%; // Prend toute la largeur de l'écran
      height: 30vh; // Hauteur spécifiée
      background-color: white;
      margin-top: 5vh; // Espacement par rapport au contenu précédent
      margin-bottom: 0;
      overflow: hidden;
      position: relative;

      

      .email-suscribe-recherche{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%; // Ajustez selon vos besoins
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        .white-sentence{
          margin-top: 8vh;
          width: 70%;
          margin-left: 4.5%;
          font-family: 'Darker Grotesque';
          font-weight: 400px; // semiBold
          font-size: 22px;


        }

        input[type="text-suscribe-recherche"] {
          align-items: center;
          flex: 1;
          padding: 10px;
          border: 2px solid ;
          border-radius: 3vh; // Bords arrondis à gauche
          outline: none;
          font-size: 16px;
          white-space: nowrap;
          width: 90%;
          margin-bottom: 1vh;
          margin-top: 3vh;
          margin-left: 4.5%;
        }

        button {
          align-items: center;
          padding: 10px 20px;
          border: none;
          border-left: none; // Retirer la bordure à gauche pour éviter la double bordure
          border-radius:  3vh; // Bords arrondis à droite
          background-color: #CC5500;
          color: white;
          cursor: pointer;
          font-size: 16px;
          width: 90%;
          margin-left: 4.5%;
          margin-bottom: 1vh;
        }
      
        
      }
    
    }
    .full-black-width-rectangle-recherche {
        
        width: 100%; // Prend toute la largeur de l'écran
        height: 30vh; // Hauteur spécifiée
        background-color: #000;
        align-items: center;
        justify-content: center;
        margin-top: 0; // Espacement par rapport au contenu précédent
        margin-left: 0;
        position: relative;
        margin-top: 0%;
        z-index: 0;
        top: 0vh;
        .reference-recherche{
          position: absolute;
          left: 20%;
          right: 20%;
          top: 20%;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .reference-title-recherche{
            top: 50px;
            color: #FFF5EA;
            font-family: 'Great vibes';
            font-size: 30px;
            display: flex;
            justify-content:center;
            align-items: center;
            z-index: 1000;

        }
        .reference-text-recherche{
            
            color: #FFF5EA;
            width: 100%;
            font-family: 'Darker Grotesque';
            font-weight: 400;
            font-size: medium;
            display: flex;
            justify-content:center;
            align-items: center;
            z-index: 1000;
            

        }
        

      }
        .social-media-recherche{
          
          .instagram{
            position: absolute;
            left: 37%;
            top: 65%;
            gap: 20%
          }
          .pinterest{
            position: absolute;
            right: 37%;
            top: 65%;
            gap: 20%

          }
        }

    
    
    
    }


    }
    // ici

  }
  

  
  


$search-bar-background: #f0f0f0;
$search-bar-border: #ccc;
$search-bar-border-radius: 20px;

.search-bar-recherche {
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 70px;
  box-sizing: border-box;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; 
  background-color: white;
  .search-left {
    padding-left: 10px; /* Espacement du logo à gauche */
  }

  .logo-link {
    display: block; /* Assure que le lien occupe tout l'espace du logo */
  }

  .logo {
    height: 16px; /* Ajustez la taille de votre logo selon vos besoins */
    cursor: pointer;
  }
  .search-right {
    padding-right: 10px; /* Espacement du logo à gauche */
  }
  .logo-link-right {
    display: block; /* Assure que le lien occupe tout l'espace du logo */
  }
  .logo-right {
    height: 16px; /* Ajustez la taille de votre logo selon vos besoins */
    cursor: pointer;
  }



  input[type="text"] {
   
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-sizing: border-box;
    
    appearance: none;
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}

.main-text-recherche {
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600; // Semi-bold
  font-size: 18px;
  color: $text-color;
  text-align: center; // Centrer le texte
}

  </style>

  