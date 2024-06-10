<template>
  <header>
    <nav>
      <div class="phone_number">
        <ul>
          <li>
            <a href="tel:9050102711810" class="number"><ion-icon name="call-outline"></ion-icon> +9050102711810</a>
          </li>
        </ul>
        <ul class="logo_container">
          <li>
            <RouterLink to="/"><img class="logo" src="../../../public/logo.png" alt="logo"></RouterLink>
          </li>
        </ul>
        <ul class="social_list">
          <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href=""><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>
      </div>
    </nav><span class="bar" v-on:click="toggleNav">
      <i class="fas fa-bars"></i>
    </span>

    <nav class="menu">
      <ol :class="{ active: nav }">
        <li class="menu-item"><RouterLink to="/catalog">Kataloq</RouterLink></li>
        <li class="menu-item"><RouterLink to="/gallery">Qalereya</RouterLink></li>
        <li class="menu-item">
          <a href="#0">Ana Səhifə
            <svg class="plus-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 125" version="1.1" x="0px" y="0px">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M86.9102564,31.025641 C85.8846154,30 84.2179487,30 83.1923077,31.025641 L50.5,63.7820513 L17.7435897,31.025641 C16.7179487,30 15.0512821,30 14.025641,31.025641 C13,32.0512821 13,33.7179487 14.025641,34.7435897 L48.5769231,69.2948718 C49.0897436,69.8076923 49.7307692,70.0641026 50.4358974,70.0641026 C51.0769231,70.0641026 51.7820513,69.8076923 52.2948718,69.2948718 L86.8461538,34.7435897 C87.9358974,33.7179487 87.9358974,32.0512821 86.9102564,31.025641 Z" fill="#333" fill-rule="nonzero"/>
              </g>
            </svg>
          </a>
          <ol class="sub-menu">
            <li class="sub-menu-item"><RouterLink to="/ironworks">Dəmir işçiliyi</RouterLink></li>
            <li class="sub-menu-item"><RouterLink to="/furnitures">Mebellər</RouterLink></li>
          </ol>
        </li>
        <li class="menu-item"><RouterLink to="/about">About</RouterLink></li>
        <li class="menu-item"><RouterLink to="/contact">Əlaqə</RouterLink></li>
      </ol>
      
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      nav: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav;
    },
    handleScroll() {
      const header = document.querySelector('.menu');
      if (window.scrollY > 50) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    },
  },
};
</script>


<style lang="less">
@import '../assets/base';
// logo start
.phone_number {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid @transparent-dark;

  .social_list {
    display: flex;
    justify-content: flex-end;
    li {
      display: flex;
      margin: 5px;
      align-items: center;
      a {
        padding: 10px;
        color: @primary;
        &:hover {
          background: @primary;
          color: @second;
        }
      }
    }
  }
}
.phone_number ul li .number {
  display: flex;
  margin: 10px;
  .flex-center();
}
// logo end

// navigation start
.menu {
  z-index: 99;
  .flex-center();
  border-bottom: 1px solid @transparent-dark;
  background: #fff;
  margin: auto;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 8px 2rem;
  height: 70px;
  font-family: 'Titillium Web', sans-serif;
  transition: all 0.3s ease;

  &.shrink {
    height: 60px;
    padding: 4px 2rem;
    margin-top: -10vh;
    .menu a {
      font-size: 11px;
    }
    .logo img {
      max-width: 80px;
      margin-top: -0.5vh;
    }
  }
}
a {
  color: @primary;
}
.menu ol {
  padding-left: 0px;
}
.logo_container {
  .flex-center();
  width: 100%;
}
.logo {
  width: 100%;
  max-width: 100px;
}
.search {
  float: right;
  position: absolute;
  top: 25px;
  right: 2rem;
  stroke: #333;
  width: 20px;
  height: 20px;
}
.menu-item {
  list-style-type: none;
  display: inline;
  position: relative;
  margin: 15px;
  font-family: 'Titillium Web', sans-serif;
}
.menu-item:before {
  position: absolute;
  content: "";
  border-bottom: 3px solid #333;
  overflow: hidden;
  width: 0%;
  left: 50%;
  top: 40px;
  transition: 0.2s ease-in-out 0.15s;
}
.menu-item:hover:before {
  width: 100%;
  left: 0%;
  transition: 0.2s ease-in-out;
}
.sub-menu {
  position: absolute;
  left: 0%;
  background: #fff;
  font-family: 'Titillium Web', sans-serif;
  top: 50px;
  padding: 0;
  text-align: left;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.15);
  max-height: 0;
  width: 150px;
  opacity: 0;
  transition: 0.45s ease all 0.1s;
  z-index: 0;
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  opacity: 0;
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) all 0.1s;
  visibility: hidden;
}
.menu-item:nth-child(n + 3):nth-child(-n + 4):hover .sub-menu {
  max-height: 200px;
  max-width: 200px;
  opacity: 1;
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
  opacity: 1;
  transition-delay: 0.15s;
  visibility: visible;
}
.sub-menu .menu-item {
  display: block;
  font-family: 'Titillium Web', sans-serif;
}
.menu-item:nth-child(n + 3):nth-child(-n + 4) .plus-icon {
  width: 15px;
  height: 15px;
  stroke: #333;
  margin-left: 2px;
  margin-bottom: -5px;
}
.menu-item:nth-child(n + 3):nth-child(-n + 4) .sub-menu-item {
  list-style-type: none;
  display: block;
  }

  // Hamburger menu start

  
.sub-menu {
  display: none;
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.menu-item:hover .sub-menu {
  display: block;
}


/* Hamburger Menü CSS */
.bar {
  display: none;
  font-size: 28px;
  cursor: pointer;
  position: relative;
  z-index: 999999;
}

@media (max-width: 1000px) {
  .bar {
    display: block;
    position: relative;
    left: 50%;
    top: 4vh;
  }

  .menu ol {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding: 25px;
    width: 100%;
  }

  .menu ol.active {
    display: flex;
  }

  .menu-item {
    width: 100%;
    text-align: left;
  }

  .sub-menu {
    position: static;
    box-shadow: none;
  }

  .menu-item {
    position: relative;
    margin: 5px;
  }

  .menu-item:before {
    display: none;
  }

  .menu ol li {
    text-align: center;
    padding: 5px; 
  }
}

@media (max-width: 1020px) {
  .menu {
    z-index: 99999;
    .flex-center();
    border-bottom: 1px solid #fff;
    background: #fff;
    margin: auto;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 10px 0rem;
    height: auto;
    font-family: 'Titillium Web', sans-serif;
    transition: all 0.3s ease;

    &.shrink {
      height: 0px;
      padding: 0px 0rem;
      margin-top: 10vh;
      .menu a {
        font-size: 11px;
      }
    }
  }

  nav ol li {
    text-align: center;
  }
}

// Hamburger menu End
</style>