<template>
  <header>
    <nav>
      <a href="index.html">
        <img src="@/assets/images/logo.png" alt="truckme logotipo" />
      </a>
      <ul :class="['menu', {active: isMenuOpen}]">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><a href="#about" class="link">Sobre</a></li>
        <li><a href="#services" class="link">Serviços</a></li>
        <li><a href="#contact" class="link">Contato</a></li>
      </ul>
      <div class="hamburger-lines" @click="toggleMenu">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const isMenuOpen: Ref<boolean> = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="css" scoped>
header {
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 2;
}
header nav {
  width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
header nav a {
  display: block;
}
header nav a img {
  width: 133px;
  height: 29px;
}
header nav .menu {
  display: flex;
  column-gap: 20px;
}
header nav .menu li a {
  color: var(--truck-black);
  font-weight: 600;
  font-size: 1.1rem;
}
header nav .menu li a:hover {
  color: var(--truck-orange);
}
.hamburger-lines {
  display: none;
  cursor: pointer;
}
@media (max-width: 1080px) {
  header{
    padding: 0px 10px
  }
}
@media (max-width: 768px) {
  .hamburger-lines {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    width: 30px;
    height: 30px;
  }
  .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: black;
  }
  .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .hamburger-lines .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }
  .hamburger-lines.active .line1 {
    transform: translateY(-2px) rotate(45deg);
  }

  .hamburger-lines.active .line2 {
    transform: scaleY(0);
  }

  .hamburger-lines.active .line3 {
    transform: rotate(-45deg);
  }

  header nav .menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    width: 100%;
    top: 60px;
    left: 0px;
    background-color: var(--truck-white);
    padding: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

    transform: translateY(-150%);
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
  header nav .menu li,
  header nav .menu li a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  header nav .menu li a {
    padding: 5px 0px;
  }

  header nav .menu.active {
    transform: translateY(0px);
  }

  header nav .menu li {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>
