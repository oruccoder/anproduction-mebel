<script setup>
import NavigationComponent from '../components/NavigationMenu.vue'
import WhatsappComponent from '../components/Whatsapp.vue'
import FooterComponent from '../components/Footer.vue'
</script>
<template>
  <WhatsappComponent />
  <NavigationComponent />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <FooterComponent />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
