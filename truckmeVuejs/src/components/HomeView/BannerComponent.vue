<template>
  <section id="hero">
    <div>
      <h1>Bem vindo à truck<span>me</span> !</h1>
      <p>
        Onde suas necessidades de transporte encontram soluções rápidas, seguras e confiáveis.
        Explore nossos serviços e descubra como podemos ajudar a levar seu negócio mais longe!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
#hero{
    height: 85vh;
    background-image: url('@/assets//images/banner-1.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
}
#hero div {
    margin-top: 200px;
    width: 50%;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
}
#hero div h1 {
    color: var(--truck-black);
    font-size: 3rem;
    text-align: center;
}
#hero div h1 span{
    color: var(--truck-orange);
}
#hero div p{
    text-align: center;
    background-color: #8b8b8b7e;
    padding: 10px;
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--truck-white);
}
@media (max-width: 1080px) {
    #hero div h1{
        font-size: 2rem;
    }
}
@media (max-width: 768px) {
    #hero div{
        margin-top: 150px;
        width: 90%;
    }
}
@media (max-width: 920px) {
    #hero div{
        margin-top: 100px;
        width: 90%;
    }
}
</style>
