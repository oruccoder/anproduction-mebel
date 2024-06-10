<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="application" v-cloak>
  <RouterView />
  </div>
</template>

<style scoped>
  [v-cloak] > * {
    display: none;
  }
  [v-cloak]::before {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    background-image: url('https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=sph');
  }
  @-webkit-keyframes spin {
    0% {-webkit-transform: rotate(0deg)}
    100% {-webkit-transform: rotate(360deg);}
  }

  @keyframes spin {
    0% {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}
  }
</style>
