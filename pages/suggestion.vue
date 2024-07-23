<template>
    <div class="page-container-compte">
        <header>
            <h1>Le carnet de Bineta</h1>
        </header>
        
        <main class="input-container-suggestion">
            <h1 class="title-suggestion">SUGGÉRER UNE RECETTE</h1>
            <form @submit.prevent="submitForm">
              <input v-model="recipeName" type="text" placeholder="Nom de la recette" class="input-suggestion" required/>
              <input v-model="preparationTime" type="number" placeholder="Préparation" class="input-suggestion1" />
              <input v-model="cookingTime" type="number" placeholder="Cuisson" class="input-suggestion1"/>

              <div class="difficulty-container">
                  <div class="difficulty-selector">
                      <img src="~/assets/fleche bas.svg" class="bfleche" alt="fleche">
                      <select  class="input-difficulty" >
                          <option  value="" disabled>Niveau de difficulté</option>
                          <option value="facile">Facile</option>
                          <option value="moyen">Moyen</option>
                          <option value="difficile">Difficile</option>
                      </select>
                  </div>
              </div>
              <div class="country-selector">
                  <select v-model="selectedCountry" class="input-country">
                      <option disabled value="">Sélectionner un pays</option>
                      <option v-for="country in sortedCountries" :key="country.name.common" :value="country.name.common">
                          {{ country.name.common }}
                      </option>
                  </select>
              </div>
              <input v-model="description" type="text" placeholder="Description (la petite histoire)" class="input-suggestion2" />
              <input v-model="ingredients" type="text" placeholder="Ingredients de la recette" class="input-suggestion2" />
              <input v-model="instruction" type="text" placeholder="instructions / étapes de la recette" class="input-suggestion2" />
              <input v-model="email" type="text" placeholder="Email" class="input-suggestion" required/>


              <button type="submit" class="connect-suggestion">Envoyer</button>

          </form>
        </main>
        <footer class="foot-index">
            <div class="logo-subtitle"><nuxt-link to="/index"><img src="~/assets/accueil.svg" alt="Home"></nuxt-link><span>Acceuil</span></div>
            <div class="logo-subtitle"><nuxt-link to="/recherche"><img src="~/assets/recherche.svg" alt="Search"></nuxt-link><span>Rechercher</span></div>
            <nuxt-link to="/suggestion"><img src="~/assets/plus.svg" alt="Add" class="logo-plus"></nuxt-link>
            <div class="logo-subtitle"><nuxt-link to="/enregistrer"><img src="~/assets/enregistrer.svg" alt="Bookmark"></nuxt-link><span>Enregistrer</span></div>
            <div class="logo-subtitle"><nuxt-link to="/compte"><img src="~/assets/compte.svg" alt="Profile"></nuxt-link><span>Compte</span></div>
        </footer>
    </div>
</template>
<script>
export default {
  data() {
    return {
      recipeName: '',
      preparationTime: '',
      cookingTime: '',
      difficulty: '',
      selectedCountry: '',
      description: '',
      ingredients: '',
      instruction: '',
      email: '',
      countries: []
    };
  },
  computed: {
    sortedCountries() {
      return this.countries.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        return 0;
      });
    }
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        this.countries = data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
    async submitForm() {
      console.log('Méthode submitForm appelée');
      const formData = {
        recipeName: this.recipeName,
        preparationTime: this.preparationTime,
        cookingTime: this.cookingTime,
        difficulty: this.difficulty,
        selectedCountry: this.selectedCountry,
        description: this.description,
        ingredients: this.ingredients,
        instruction: this.instruction,
        email: this.email
      };

      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          
          alert('Email envoyé avec succès');
        } else {
          alert('Erreur lors de l\'envoi de l\'email');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Erreur lors de la soumission du formulaire: ' + error);
      }
    }
  }
};
</script>

<style lang="scss">
.input-container-suggestion{
    position: absolute;
    top: 15%;
    bottom: 100%;
    width: 100%;
    height: calc(100vh - 12%); 
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FFF5EA;
    padding: 0%;
    margin-bottom: 20%; // Marge en bas pour éviter le chevauchement avec le footer
    padding-bottom: 60%;
    margin-top:5%;

    .title-suggestion{
        font-size: 120%;
        margin-bottom: 5%;
        margin-left: 25%;
        white-space: nowrap;
    }

    .input-suggestion {
        width: 90%;
        height: 6vh;
        margin-bottom: 5%;
        margin-left: 4.5%;
        padding-left: 4%;
        font-size: 16px;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: none;
        border-radius:  5% / 45%;
        outline: none;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        &::placeholder {
        color: #6c757d;
        opacity: 1; // Firefox
        }

    }
    .input-suggestion1 {
        width: 42%;
        height: 6vh;
        margin-bottom: 5%;
        margin-left: 4.5%;
        padding-left: 4%;
        font-size: 16px;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: none;
        border-radius:  5%;
        background-position: 90% center;
        outline: none;
        white-space: nowrap;
        background-image: url('assets/ios-time-outline.svg');
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        &::placeholder {
        color: #6c757d;
        opacity: 1; // Firefox
        }

    }

.difficulty-selector {
    position: relative;
    .bfleche{
        position: absolute;
        margin-left: 85.5%;
        margin-top: 3.5%;
        
    }
    
    .input-difficulty {
        z-index: 0;
        width: 90%;
        height: 6vh;
        margin-bottom: 1%;
        margin-left: 4.5%;
        padding-left: 4%;
        font-size: 16px;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: none;
        border-radius:  5%;
        outline: none;

        &::placeholder {
            color: #6c757d;
            opacity: 1; // Firefox
        
        }
    

        
    }
}
.country-selector {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;

  .input-country {
    width: 100%;
    height: 6vh;
    margin-bottom: 5%;
    margin-left: 0%;
    padding-left: 4%;
    font-size: 16px;
    line-height: 1.5;
    color: #495057;
    background-color: #fbf9f6;
    border: none;
    border-radius: 5% / 45%;
    outline: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    background-position: 95% center;
    background-image: url('assets/fleche bas.svg');
    
    
  }
}
.input-suggestion2{
    width: 90%;
    height: 10vh;
    margin-bottom: 5%;
    margin-left: 4.5%;
    padding-left: 4%;
    font-size: 16px;
    line-height: 1.5;
    color: #495057;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5% / 45%;
    outline: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}
.connect-suggestion {
    width: 90%;
    height: 7vh;
    margin-bottom: 5%;
    margin-left: 4.5%;
    margin-top: 5%;
    padding-left: 4%;
    font-size: 150%;
    color: white;
    line-height: 1.5;
    background-color: #CC5500;
    border: none;
    border-radius: 10% / 45%;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: #f96a05;;
    }
  }


}



</style>