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
    <main class="main-index">
      <div class="content-index">
        <div v-if="document && document.data" class="rectangle-index">
          <h1 v-if="document.data['bienvenue-title']" v-html="document.data['bienvenue-title'][0].text"></h1>
          <p v-if="document.data['mots_de_bienvenue']" v-html="document.data['mots_de_bienvenue'][0].text"></p>
          <img v-if="document.data.bienvenue && document.data.bienvenue.url" :src="document.data.bienvenue.url" alt="Image de bienvenue" />
        </div>
        
        <div class="category-index">
          <span class="category-title-index">Catégories</span>
          
        </div>
        <div class="rectangle-container-index">
          <div class="rectangle-item-index">
            <img v-if="rect1.data.petit_dejeuner && rect1.data.petit_dejeuner.url" :src="rect1.data.petit_dejeuner.url" alt="Petit déjener" />
            <h1 v-if="rect1.data['petitdejeunertitle']" v-html="rect1.data['petitdejeunertitle'][0].text"></h1>
          </div>
          <div class="rectangle-item-index">
            <nuxt-link to="/liste">
            <img v-if="rect1.data.dejeuner && rect1.data.dejeuner.url" :src="rect1.data.dejeuner.url" alt="Déjener" />
            <h1 v-if="rect1.data['dejeunertitle']" v-html="rect1.data['dejeunertitle'][0].text"></h1>
          </nuxt-link>
          </div>
          <div class="rectangle-item-index">
            
            <img v-if="rect1.data.diner && rect1.data.diner.url" :src="rect1.data.diner.url" alt="Diner" />
            <h1 v-if="rect1.data['dinertitle']" v-html="rect1.data['dinertitle'][0].text"></h1>
          
          </div>
          <div class="rectangle-item-index">
            <img v-if="rect1.data.dessert && rect1.data.dessert.url" :src="rect1.data.dessert.url" alt="Petit déjener" />
            <h1 v-if="rect1.data['desserttitle']" v-html="rect1.data['desserttitle'][0].text"></h1>
          </div>
          <div class="rectangle-item-index">
            <img v-if="rect1.data.encas && rect1.data.encas.url" :src="rect1.data.encas.url" alt="Petit déjener" />
            <h1 v-if="rect1.data['encastitle']" v-html="rect1.data['encastitle'][0].text"></h1>
          </div>
          <div class="rectangle-item-index">
            <img v-if="rect1.data.boisson && rect1.data.boisson.url" :src="rect1.data.boisson.url" alt="Petit déjener" />
            <h1 v-if="rect1.data['boissontitle']" v-html="rect1.data['boissontitle'][0].text"></h1>
          </div>
        </div>
        <div class="ra-index">
            <span class="recent-title-index">Récemment ajoutés</span> 
            <div class="large-rectangle-container-index">
              <div class="large-rectangle-item-index"></div>
              <div class="large-rectangle-item-index"></div>
              <div class="large-rectangle-item-index"></div>
              <div class="large-rectangle-item-index"></div>
            </div>
        </div>
        
        
        
        <div class="discoveries-index">
          <span class="discoveries-title-index">Découvertes de la semaine</span>
          <div class="discoveries-large-rectangle-item-index"></div>
        </div>

        <div class="bloc-bas-index">
            <div class="full-width-rectangle-index">
            <div class="email-suscribe-index">
              <p class="white-sentence">Pour ne rien rater des nouvelles  recettes et decouvertes !</p>
              <input type="text-suscribe-index" placeholder="Ton email">
              <button type="submit">s'abonner</button>
            </div>
          </div>
          <div class="full-black-width-rectangle-index">
            <div class="reference-index">
              <h1 class="reference-title-index">Le carnet de Bineta</h1>
                    <br>
                    <p class="reference-text-index">La référence des recettes africaines</p>
            </div>
            <div class="social-media-index">
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
    <footer class="foot-index">
        <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil-selected.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
        <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
        <nuxt-link to="/suggestion"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
        <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
        <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
    </footer>
  </div>
</template>

<script>
  import Prismic from 'prismic-javascript';

export default {
  async asyncData({ $prismic }) {
    try {
      const document = await $prismic.api.getSingle('accueil');
      const rect1 = await $prismic.api.getSingle('categorie');
      console.log(document);
      return { document, rect1 };
    } catch (e) {
      error({ statusCode: 404, message: 'Document not found' })
      
    }
  }
};
</script>

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
  .foot-index {
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
  .main-index {
    position: absolute;
    top: 15%;
    bottom: 100%;
    width: 100%;
    height: calc(100vh - 12%); // 100% de la hauteur de la fenêtre moins la hauteur du footer
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FFF5EA;
    padding: 0%;
    margin-bottom: 15%; // Marge en bas pour éviter le chevauchement avec le footer
    padding-bottom: 10%;
    
    
    

    .content-index {
      position: relative;
      padding: 0%;
      margin: 0%;
      width: 100%;
      height: 100%;
      margin-bottom: 60%;


        // Styles pour le rectangle
      .rectangle-index {
        width: 90%;
        height: 52vh;
        margin-left: 4.5%;
        border-radius: 5%;
        background-color: white;
        margin-bottom: 10px auto; // Centrer horizontalement avec une marge de 20px en haut et en bas
        margin-top: 0;
        overflow: hidden;
      }
      .rectangle-index img{
        width: 100%;
        height: auto;
        object-fit: cover; /* L'image remplira le conteneur tout en conservant ses proportions */
        
        margin-top: 7%;
      }
      .rectangle-index h1 {
        font-size: 40px;
        margin: 0 0 10px 0; /* Marge entre le titre et le texte */
        margin-left: 4.5%;
      }
      .rectangle-index p {
        font-size: 15px;
        font-weight: 100;
        margin: 0 0 10px 0; /* Marge entre le titre et le texte */
        margin-left: 4.5%;
        margin-right: 4.5%;
      }

      .rectangle-container-index{
      
        display: flex;
        overflow-x: auto; // Permettre le défilement horizontal
        margin-top: 20px; // Marge en haut pour l'espacement
        width: 100%; // S'assurer que le conteneur prend toute la largeur disponible
        white-space: nowrap; // Empêcher le retour à la ligne des éléments enfants
        margin-bottom: 12%;
        margin-left: 4.5%;
        .rectangle-item-index {
          flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
          width: 40%;
          height: 100px;
          background-color: white;
          border-radius: 10%;
          margin-right: 5%; // Espacement entre les rectangles
          /* Autres styles des rectangles */
          overflow: hidden;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;

        }
     
        
        .rectangle-item-index h1{
          padding-top: 5%;
          font-family: 'Darker Grotesque';
          font-weight: 0%; // semiBold
          font-size: 80%;
          text-align: justify;
          
        }
  
      }
        // Styles pour la catégorie
      .category-index {
        margin-top: 10%; // Espace significatif entre les sections
        display: flex;
        justify-content: space-between; // Espacement entre les éléments sur la ligne
        align-items: center; // Centrer verticalement les éléments
        margin-bottom: 5%;
       
        
        .category-title-index {
          margin-left: 4.5%;
          font-family: 'Darker Grotesque';
          font-weight: 400px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
        }
    

  
      }
  
      .ra-index{
        .recent-title-index {
          margin-left: 4.5%;
          font-family: 'Darker Grotesque';
          font-weight: 300px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
          margin-bottom: 10%;
          
        }
        
        .large-rectangle-container-index {
          overflow-x: auto; // Permettre le défilement horizontal
          width: 100%; // S'assurer que le conteneur prend toute la largeur disponible
          white-space: nowrap; // Empêcher le retour à la ligne des éléments enfants
          display: flex;
          margin-top: 5%;
          margin-bottom: 10%;
          margin-left: 4.5%;
          

          .large-rectangle-item-index {
            flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
            width: 40%;
            height: 200px;
            background-color: white;
            border-radius: 5%;
            margin-right: 5%; 
            
          }
        }
          

      }
      .discoveries-index{
          margin-top: 5px;
          margin-bottom: 10%;
          width: 100%; // Ajouté pour que la hauteur en pourcentage fonctionne
          height: auto; // Assurez-vous que la hauteur s'ajuste automatiquement
          display: flex;
          flex-direction: column;
          
          
        .discoveries-title-index{
          font-family: 'Darker Grotesque';
          font-weight: 300px; // semiBold
          font-size: 22px;
          color: $text-color;
          text-align: left;
          margin-left: 4.5%;
        }
        .discoveries-large-rectangle-item-index {
          margin-bottom: 5%;
          margin-left: 4.5%;
          flex: 0 0 auto; // Empêcher le redimensionnement des rectangles
          width: 90%;
          height: 40vh; // je parle d'ici
          background-color: white;
          border-radius: 5%;
          margin-top: 20px; // Espacement par rapport au texte précédent
          
        }
      }



    }
    //les deux bloc blanc et noir en bas 
    .bloc-bas-index{
      width: 100%;
      margin-bottom: 60%;
      height: 85vh; /* Utilisation de vh pour définir la hauteur relative à la vue */
      
      .full-width-rectangle-index {
      
      width: 100%; // Prend toute la largeur de l'écran
      height: 30vh; // Hauteur spécifiée
      background-color: white;
      margin-top: 5vh; // Espacement par rapport au contenu précédent
      margin-bottom: 0;
      overflow: hidden;
      position: relative;

      

      .email-suscribe-index{
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

        input[type="text-suscribe-index"] {
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
    .full-black-width-rectangle-index {
        
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
        .reference-index{
          position: absolute;
          left: 20%;
          right: 20%;
          top: 20%;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .reference-title-index{
            top: 50px;
            color: #FFF5EA;
            font-family: 'Great vibes';
            font-size: 30px;
            display: flex;
            justify-content:center;
            align-items: center;
            z-index: 1000;

        }
        .reference-text-index{
            
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
        .social-media-index{
          
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

.search-bar-index {
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

.main-text-index {
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600; // Semi-bold
  font-size: 18px;
  color: $text-color;
  text-align: center; // Centrer le texte
}

  </style>

  