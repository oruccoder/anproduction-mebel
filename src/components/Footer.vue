<template>
  <footer>
    <div class="f_nav">
      <ul>
        <li><RouterLink to="/">Ana Səhifə</RouterLink></li>
        <li><RouterLink to="/furnitures">Mebellər</RouterLink></li>
        <li><RouterLink to="/ironworks">Dəmir Konstruksiyalar</RouterLink></li>
        <li><RouterLink to="/contact">Sifariş Ver</RouterLink></li>
      </ul>
    </div>
    <div class="social">
      <ul>
        <li>
          <RouterLink to="//"><ion-icon name="logo-instagram"></ion-icon></RouterLink>
        </li>
        <li>
          <RouterLink to="//"><ion-icon name="logo-facebook"></ion-icon></RouterLink>
        </li>
        <li>
          <RouterLink to="//"><ion-icon name="logo-whatsapp"></ion-icon></RouterLink>
        </li>
      </ul>
      <ul class="copy">
        <li>
          <p class="copy">&copy all right reserved</p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="less">
@import '../assets/base';
footer {
  min-height: 30vh;
  background: @primary;
  color: @second;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  div {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      color: @second;
    }
  }
  .f_nav ul {
    display: flex;
    flex-wrap: wrap;
  }
  .copy {
    margin: 5px;
    padding: 10px;
  }
  ul {
    display: flex;
    li {
      display: flex;
      margin: 10px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
