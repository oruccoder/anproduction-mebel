<script setup>
import IronworksSwiperComponent from '../components/IronworksSwiper.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import WhatsappComponent from '../components/Whatsapp.vue'
import IronworksComponent from '../components/Pages/Ironworks.vue'
import IronworksCategoryComponent from '../components/Pages/IronworksCategory.vue'
import FooterComponent from '../components/Footer.vue'
</script>

<template>
  <NavigationMenu />
  <WhatsappComponent />
  <br /><br />
  <IronworksSwiperComponent />
  <IronworksCategoryComponent />

  <div class="page_header">
    <h2>Məhsullar</h2>
  </div>
  <!-- products  -->
  <IronworksComponent />
  <FooterComponent />
</template>

<style lang="less">
@import '../assets/base';

.container_category {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  grid-auto-rows: 200px;
  grid-gap: 20px;
  height: 100%;
  justify-content: center;
}

.card {
  height: 100%;
  max-height: 150px;
  margin: 20px;
  .flex-x-center();
  border: 1px solid @primary;
  background: #f2f2f2;
  border-radius: 5px;
  box-shadow: 4px 4px 8px -3px rgba(0, 0, 0, 0.15);
}

.avatar {
  .flex-center();
  padding: 15px 0 15px 15px;
}

.image {
  width: 120px;
  height: auto;
}
.page_header {
  width: 100%;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  margin: 2%;
}
.page_header h2:before {
  position: absolute;
  height: 5px;
  width: 5%;
  left: 0;
  bottom: -5px;
  background: @primary;
  display: block;
  content: '';
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
}

.title {
  margin: 0 0 5px 0;
  font-weight: 500;
  font-size: 1.2rem;
}

.content {
  font-size: 0.8em;
  margin: 0;
}
</style>
