<template>
    <div class="page-container-confirmation">
      <header>
        <h1>Le carnet de Bineta</h1>
      </header>
      <main class="input-container-confirmation">
        <h1 class="title-confirmation">VÉRIFICATION DE VOTRE E-MAIL</h1>
        <p class="mot">Veuillez saisir le code envoyé</p>
        <input v-model="code_Confirmation" type="text" placeholder="Code" class="input-confirmation" required />
        <button @click="confirm" class="submit-button-confirmation">Terminer</button>
        <label for="terms" class="terms-label-confirmation">
          Pas reçu ? <a @click.prevent="resendCode">Renvoyer</a>.
        </label>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        code_Confirmation: '',
        email: '' // Vous devez probablement passer cet email de la page d'inscription
      };
    },
    methods: {
      async confirm() {
        try {
          await axios.post('http://localhost:5000/api/visiteurs/verify', {
            email: this.email,
            code_Confirmation: this.code_Confirmation
          });
          this.$router.push('/success'); // Redirige vers une page de succès après vérification
        } catch (error) {
          console.error('Erreur lors de la vérification du code:', error);
        }
      },
      async resendCode() {
        try {
          await axios.post('http://localhost:5000/api/visiteurs/resend-code', {
            email: this.email
          });
          alert('Code de vérification renvoyé');
        } catch (error) {
          console.error('Erreur lors de l\'envoi du code de vérification:', error);
        }
      }
    }
  };
  </script>
  

<style lang="scss">


.input-container-confirmation {
    position: absolute;
    top: 20%;
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


  .title-confirmation{
    margin-bottom: 15%;
    margin-left: 4.5%;
    font-size: 160%;
    
  }
  .mot{
    margin-bottom: 3%;
    margin-left: 6%;
    font-weight: 100%;
    font-size: 150%;
  }
  
  .input-confirmation {
    width: 90%;
    height: 7vh;
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


    .terms-label-confirmation {
      font-size: 100%;
      font-size: 150%; // Adjust font size as needed
      color: #495057; // Adjust text color as needed
      white-space: nowrap; // Prevent label from wrapping
      margin-left: 25%; // Adjust margin to move label text further right

      a {
        color: black; // Link color
        text-decoration: underline;
        

        &:hover {
          text-decoration: underline;
        }
      }
    }
  
  .submit-button-confirmation {
    width: 90%;
    height: 7vh;
    margin-bottom: 5%;
    margin-left: 4.5%;
    margin-top: 2%;
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


}



</style>