<template>
  <footer>
    <div>
      <img src="@/assets/images/full-logo.png" />
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
    <p>
      Desenvolvido por
      <a href="https://www.linkedin.com/in/gabrieljordandev/" target="_blank">Gabriel Jordan</a>.
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  background-color: var(--truck-black);
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--truck-white);
  place-items: center;
  row-gap: 80px;
  padding: 75px 0px 5px 0px;
}
footer a {
  color: var(--truck-white);
}
footer a:hover {
  color: var(--truck-orange);
}
footer p {
  grid-column: 1/3;
  text-align: center;
}
footer nav ul {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
}
footer p a {
  font-weight: 600;
}
@media (max-width: 768px) {
    footer{
        grid-template-columns: 1fr;
    }
    footer p{
        grid-column: 1/2;
        text-align: center;
    }
}
</style>
