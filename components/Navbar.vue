<template>
    <nav>
      <ul>
        <li><nuxt-link to="/"></nuxt-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques au menu de navigation */
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 10px;
  }
  </style>
  