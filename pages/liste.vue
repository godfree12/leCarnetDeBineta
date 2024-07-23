
<template>
    <div class="page-container">
      <header>
        <h1>Le carnet de Bineta</h1>
      </header>
  
      <!-- Carrousel vide -->
      <div class="carousel-container"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd">
      <div class="carousel-content" :style="{ transform: `translateX(${translate}px)` }">
        <div class="carousel-item">
          <img v-if="rect2.data.caroussel1 && rect2.data.caroussel1.url" :src="rect2.data.caroussel1.url" alt="caroussel 1" />
        </div>
        <div class="carousel-item">
          <img v-if="rect2.data.caroussel2 && rect2.data.caroussel2.url" :src="rect2.data.caroussel2.url" alt="caroussel 2" />
        </div>
        <!-- Ajoutez d'autres éléments de carrousel au besoin -->
      </div>
    </div>
  
      <main class="main-liste">
        <!-- Overlay -->
        <div
      class="overlay"
      :style="{ height: overlayHeight }"
      @mousedown="startDragging"
      @touchstart="startDragging"
    >
          <!-- Drag bar -->
          <div class="drag-bar" @mousedown="startDragging"></div>
          <!-- Contenu de l'overlay -->
          <div class="overlay-content">
            <button type="button" class="Pcuisine">Passer en cuisine</button>
            <div v-if="rect2 && rect2.data" class="recette-liste">
                <h1 v-if="rect2.data['titrerecette']" v-html="rect2.data['titrerecette'][0].text"></h1>
            </div>
            <div v-if="rect2 && rect2.data" class="description-liste">
                <h1 v-if="rect2.data['description']" v-html="rect2.data['description'][0].text"></h1>
            </div>
            <div v-if="rect2 && rect2.data" class="textDescription-liste">
                 <p v-if="rect2.data['textdescription']" v-html="rect2.data['textdescription'][0].text"></p>
            </div>
            <div v-if="rect2 && rect2.data" class="ingredient-liste">
                <h1 v-if="rect2.data['ingredient']" v-html="rect2.data['ingredient'][0].text"></h1>
            </div>

            <div class="rectangle-container-liste">
              <div class="rectangle-item-liste">
                <img v-if="rect2.data.ingredient1 && rect2.data.ingredient1.url" :src="rect2.data.ingredient1.url" alt="Petit déjener" />
                <h1 v-if="rect2.data['titre1']" v-html="rect2.data['titre1'][0].text"></h1>
              </div>
              <div class="rectangle-item-liste">
                <img v-if="rect2.data.ingredient2 && rect2.data.ingredient2.url" :src="rect2.data.ingredient2.url" alt="Petit déjener" />
                <h1 v-if="rect2.data['titre2']" v-html="rect2.data['titre2'][0].text"></h1>
              </div>
              <div class="rectangle-item-liste">
                <img v-if="rect2.data.ingredient3 && rect2.data.ingredient3.url" :src="rect2.data.ingredient3.url" alt="Petit déjener" />
                <h1 v-if="rect2.data['titre3']" v-html="rect2.data['titre3'][0].text"></h1>
              </div>
              <div class="rectangle-item-liste">
                <img v-if="rect2.data.ingredient4 && rect2.data.ingredient4.url" :src="rect2.data.ingredient4.url" alt="Petit déjener" />
                <h1 v-if="rect2.data['titre4']" v-html="rect2.data['titre4'][0].text"></h1>
              </div>
              <div class="rectangle-item-liste">
                <img v-if="rect2.data.ingredient5 && rect2.data.ingredient5.url" :src="rect2.data.ingredient5.url" alt="Petit déjener" />
                <h1 v-if="rect2.data['titre5']" v-html="rect2.data['titre5'][0].text"></h1>
              </div>
            </div>
            <div class="recette-container-liste">
              <h1 v-if="rect2.data['recette']" v-html="rect2.data['recette'][0].text"></h1>
            </div>

            <div class="etape-container-liste">
              <div class="etape-item-liste">
                <h1 v-if="rect2.data['etape1']" v-html="rect2.data['etape1'][0].text"></h1>
                <p v-if="rect2.data['texte1']" v-html="rect2.data['texte1'][0].text"></p>
                <img v-if="rect2.data.icone_etape1 && rect2.data.icone_etape1.url" :src="rect2.data.icone_etape1.url" alt="image etape 1" />
              </div>
              <div class="etape-item-liste">
                <h1 v-if="rect2.data['etape2']" v-html="rect2.data['etape2'][0].text"></h1>
                <p v-if="rect2.data['texte2']" v-html="rect2.data['texte2'][0].text"></p>
                <img v-if="rect2.data.icone_etape2 && rect2.data.icone_etape2.url" :src="rect2.data.icone_etape2.url" alt="image etape 2" />
              </div>
              <div class="etape-item-liste">
                <h1 v-if="rect2.data['etape3']" v-html="rect2.data['etape3'][0].text"></h1>
                <p v-if="rect2.data['texte3']" v-html="rect2.data['texte3'][0].text"></p>
                <img v-if="rect2.data.icone_etape3 && rect2.data.icone_etape3.url" :src="rect2.data.icone_etape3.url" alt="image etape 3" />
              </div>
              <div class="etape-item-liste">
                <h1 v-if="rect2.data['etape4']" v-html="rect2.data['etape4'][0].text"></h1>
                <p v-if="rect2.data['texte4']" v-html="rect2.data['texte4'][0].text"></p>
                <img v-if="rect2.data.icone_etape4 && rect2.data.icone_etape4.url" :src="rect2.data.icone_etape4.url" alt="image etape 4" />
              </div>
            </div>
            <div class="conseil-container-liste">
              <p v-if="rect2.data['conseil']" v-html="rect2.data['conseil'][0].text"></p>
            </div>
            <hr>
            <div class="Pcuisine2"><nuxt-link to="#" class="pc">Passer en cuisine</nuxt-link></div>
            <div class="aimer-container-liste">
              <p class="intro-aimer">Vous pourriez aussi aimer...</p>
              <div class="part1">
                <nuxt-link to="#" class="part1_item"></nuxt-link>
                <nuxt-link to="#" class="part1_item"></nuxt-link>
              </div>
              <div class="part2">
                <nuxt-link to="#" class="part2_item"></nuxt-link>
              </div>
              <div class="part3">
                <div class="part3_item"></div>
                <div class="part3_item"></div>  
              </div>
              
            </div>
            <!-- bloc bas -->
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
            <!-- bloc bas -->
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="foot-index">
        <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil-selected.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
        <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
        <nuxt-link to="/suggestoin"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
        <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
        <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
      </footer>
    </div>
  </template>
  
  
  <script>
import Prismic from 'prismic-javascript';

export default {
  async asyncData({ error, $prismic }) {
    try {
      const rect2 = await $prismic.api.getSingle('page_intermmediaire');
      return { rect2 };
    } catch (e) {
      error({ statusCode: 404, message: 'Document not found' });
      return { rect2: null };
    }
  },
  data() {
    return {
      translate: 0,
      startX: 0,
      currentX: 0,
      overlayHeight: '50%',
      dragStartY: 0,
      startHeight: 0,
      minHeight: 0,
      maxHeight: 0
    };
  },
  created() {
    this.minHeight = window.innerHeight * 0.40;
    this.maxHeight = window.innerHeight * 0.8;
    this.overlayHeight = `${this.minHeight}px`;
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.currentX = this.startX;
    },
    handleTouchMove(event) {
  if (this.startX !== null) {
    const diff = event.touches[0].clientX - this.startX;
    this.currentX = event.touches[0].clientX;

    // Ajouter la différence à translate
    this.translate += diff;

    // Déterminer la largeur d'une image du carrousel (exemple avec 100vw)
    const imageWidth = window.innerWidth;

    // Déterminer la direction du déplacement
    const direction = diff > 0 ? 1 : -1; // 1 pour droite, -1 pour gauche

    // Déterminer l'index de l'image sur laquelle s'arrêter
    const currentIndex = Math.round(-this.translate / imageWidth);
    const newIndex = currentIndex - direction;

    // Limiter newIndex pour éviter de dépasser les limites du carrousel
    const maxIndex = this.rect2.data.nombre_de_caroussel - 1;
    const minIndex = 0;
    const finalIndex = Math.min(maxIndex, Math.max(minIndex, newIndex));

    // Définir la nouvelle valeur de translate
    this.translate = -finalIndex * imageWidth;

    // Réinitialiser startX pour le prochain déplacement
    this.startX = this.currentX;
  }
},


    handleTouchEnd() {
      this.startX = null;
    },
    startDragging(event) {
      this.dragStartY = event.clientY;
      this.startHeight = parseInt(this.overlayHeight);
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDragging);
    },
    onDrag(event) {
      const deltaY = event.clientY - this.dragStartY;
      let newHeight = this.startHeight - deltaY;
      newHeight = Math.min(Math.max(newHeight, this.minHeight), this.maxHeight);
      this.overlayHeight = `${newHeight}px`;
    },
    stopDragging() {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDragging);
    }
  }
};
</script>


  
  
<style scoped>
/* Reset des marges par défaut */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Conteneur de la page */
.page-container {
  position: relative;
  min-height: 100vh; /* Hauteur maximale de la vue */
}

/* Entête */
header {
  z-index: 3; /* Z-index plus haut pour l'entête */
}

/* Conteneur du carrousel */
.carousel-container {
  width: 100%;
  overflow: hidden; /* Masquer le débordement horizontal */
  position: relative;
  margin-top: 11vh; /* Marge supérieure pour espacer de l'entête */
}

/* Contenu du carrousel */
.carousel-content {
  display: flex; /* Affichage en ligne des éléments */
  transition: transform 0.5s ease; /* Transition douce */
}

.carousel-item {
  flex: 0 0 auto; /* Ne pas étirer les éléments */
  width: 100vw; /* Largeur de la vue */
  height: 50vh; /* Hauteur du carrousel, ajustez selon vos besoins */
   /* Couleur de fond de l'élément de carrousel (temporaire) */
}

/* Flèches de navigation du carrousel */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
  z-index: 2; /* Z-index pour les flèches de carrousel */
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
.carousel-item {
  flex: 0 0 auto; /* Ne pas étirer les éléments */
  width: 100vw; /* Largeur de la vue */
  height: 50vh; /* Hauteur du carrousel, ajustez selon vos besoins */
  /* Supprimez la couleur de fond temporaire */
}

/* Assurez-vous que l'image prend toute la place disponible dans le carrousel */
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajuste l'image pour couvrir entièrement l'élément */
}
.carousel-content {
  transition: transform 0.5s ease;
}



/* Overlay */
.overlay {
  width: 100%;
  position: fixed; /* Position fixe pour l'overlay */
  z-index: 1; /* Z-index inférieur pour l'overlay */
  left: 0;
  bottom: 0;
  background-color: white; /* Couleur de fond de l'overlay */
  overflow-y: hidden; /* Désactiver le défilement vertical */
  transition: height 0.5s; /* Transition de hauteur de l'overlay */
  border-top-right-radius: 5%;
  border-top-left-radius: 5%;
  overflow-y: auto;
  
}

.drag-bar {
  width: 25%;
  height: 3%;
  background-color: black;
  cursor: ns-resize;
  position: absolute;
  top: 5%;
  left: 37%;
  border-radius: 20%;
}

.overlay-content {
 
             

                .Pcuisine{
                    position: absolute;
                    padding: 1px 20px;
                    border: none;
                    border-left: none; 
                    border-radius:  10vh; 
                    background-color: #CC5500;
                    color: white;
                    cursor: pointer;
                    font-size: 16px;
                    width: 30%;
                    top: 15%;
                    right: 4.5%;
                    margin-bottom: 1vh;
                }
                .recette-liste h1{
                    position: absolute;
                    font-size: 40px;
                    color: black;
                    top: 15%;
                    font-size: 150%;
                    width: 50%;
                    left: 4.5%;


                }
                .description-liste{
                    position: absolute;
                    color: black;
                    top: 40%;
                    font-size: 70%;
                    width: 50%;
                    left: 4.5%;


                }
                .textDescription-liste{
                    position: absolute;
                    top: 50%;
                    left: 4.5%;
                    bottom: 10%;
                    margin-bottom: 10%;
                }
                .ingredient-liste{
                    position: absolute;
                    top: 65vh;
                    color: black;
                    font-size: 70%;
                    left: 4.5%;
                    margin-top: 10%;
                }

                .rectangle-container-liste{
                  position: relative;
                  width: 100%; 
                  margin-top: 72vh;
                  margin-left: 4.5%;
                  top: 10vh;

                }
               
}

.rectangle-item-liste {
  display: flex; 
  align-items: center;
  margin-bottom: 2vh;
  gap: 2vh;
  
}

.rectangle-item-liste img {
  margin-right: 10px; 
  max-width: 100px; 
}

.rectangle-item-liste h1 {
  font-size: 90%;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 0;
  
}

.recette-container-liste{
  position: relative;
  width: 90%;
  height: 7vh;
  border: solid #CC5500;
  margin-left: 5%;
  margin-top: 5%;
  top: 12vh;
  
}
.recette-container-liste h1 {
  position: absolute;
  left: 37%;
  color: #CC5500;
  font-size: 3.5vh;
  
}


.etape-container-liste {
  position: relative;
  width: 100%;
  
  margin-top: 25%;
  margin-left: 4.5%;
}

.etape-item-liste {
  display: flex; 
  align-items: flex-start; 
  margin-bottom: 10px; 
}

.text-container {
  flex-grow: 1; 
  margin-right: 10px; 
}

.etape-item-liste img {
  max-width: 100px; 
  max-height: 100px; 
  margin-top: 6%;
  margin-left: 5%;
}

.etape-item-liste h1 {
  font-size: 90%;
  white-space: nowrap;
  margin-bottom: 5%;
  bottom: 5%;
  color: tan;
  
}

.etape-item-liste p {
  margin-top: 5%;
  margin-left: -12%;
  width: 70%;
  padding: 0; 
}
.conseil-container-liste{
  width: 90%;
  height: 5%;
  background-color: #04A364;
  position: relative;
  top: 5vh;
  left: 3.5vh;
  border-radius: 10% / 30%;
  

}
.conseil-container-liste p{
  position: relative;
  margin-bottom: 20%;
  font-size: 90%;
  color: white;
  padding: 5%;
  

}
hr{
  border: none; /* Supprime la bordure par défaut */
    border-top: 1px solid #DDD0C7; /* Ajoute une bordure supérieure pour créer une ligne */
    width: 100%; /* Largeur de la ligne */
    margin: 20px 0;
    margin-bottom: 10%;
}
.Pcuisine2 {
  width: 90%;
  height: 5%;
  background-color: black;
  margin-bottom: 10%;
  margin-left: 5%;
  border-radius: 10% / 45%;
  text-align: center;

  
  .pc{
    display: inline-block;
    color: white;
    cursor: pointer;
    font-size: 3.5vh;
  }
}
.aimer-container-liste{
  height: auto;
  width: 100%;
  background-color: #FFF5EA;
  margin-bottom: 100%;
  text-align: center;
  padding-top: 5%;
  
}
.part1{
  width: 100%;
  height: 50vh;
  display: flex;
  white-space: nowrap;
  padding-top: 10%;
  padding-left: 5%;
  
}
.part1_item{
    width: 40%;
    height: 80%;
    background-color: white;
    margin-left: 5%;
    border-radius: 3%;
    
  }
.part2{
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 10%;
  padding-bottom: 15%;

}
.part2_item{
  width: 47vh;
  height: 25vh;
  background-color: white;
  
  border-radius: 3%;
}
.part3{
  width: 100%;
  height: 50vh;
  display: flex;
  white-space: nowrap;
  padding-left: 5%;
}
.part3_item{
  width: 40%;
  height: 80%;
  background-color: white;
  margin-left: 5%;
  border-radius: 3%;
}






.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Afficher en block au lieu de inline */
  transition: 0.3s; /* Transition d'effets au survol (couleur) */
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1; /* Changer la couleur au survol */
}

/* Footer */
footer {
  position: fixed; /* Position fixe pour le footer */
  bottom: 0;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  z-index: 2; /* Z-index plus élevé pour le footer */
}
</style>
