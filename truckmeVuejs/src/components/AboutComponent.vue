<template>
  <section id="about">
    <div>
      <h2>Sobre Nós</h2>
      <div>
        <p>
          Somos a TruckMe, pioneira em soluções digitais para o transporte de cargas. Nossa missão é
          modernizar a logística, oferecendo uma plataforma que simplifica e otimiza o envio de
          mercadorias. A TruckMe conecta clientes e transportadores de forma rápida e eficaz,
          garantindo que cada carga chegue ao seu destino com segurança e economia. Com nossa
          tecnologia de ponta, monitoramos todo o percurso, proporcionando tranquilidade e
          eficiência para o seu negócio.
        </p>
        <div>
          <img src="../assets/images/truck.png" alt="" class="truckImg" />
        </div>
      </div>
      <div id="additional-text" v-show="isVisible">
        <div>
          <img src="../assets/images/full-logo.png" alt="logo" />
        </div>
        <div>
          <h3>Solução Inteligente em Fretes</h3>
          <p>
            Somos frutos da uberização de serviços. Nossa solução inteligente surgiu devido a
            necessidade de inovação e agilidade no modelo tradicional dos processos de frete,
            objetivando dinamizar o dia a dia dos nossos clientes e trazer muito mais economia.
          </p>
          <p>
            A TruckMe funciona como uma plataforma digital e aplicativo, projetada para conectar,
            negociar e monitorar as cargas desde a solicitação do embarcador até a descarga das
            cargas.
          </p>
        </div>
      </div>
      <button id="read-more" @click="toggleViewMore">Leia mais</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const isVisible: Ref<boolean> = ref(false);

  function toggleViewMore() {
    isVisible.value = !isVisible.value
  }
</script>

<style scoped>
#about{
    width: 100%;
    padding: 100px 0px;
    color: var(--truck-black);
}
#about > div{
    width: 1080px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    row-gap: 20px;
    font-weight: 500;
} 
#about > div p{
    font-weight: 500;
} 
#about > div h2{
    font-size: 2.5rem;
} 
#about > div h3{
    font-size: 1.8rem;
    margin-bottom: 20px;
}
#about > div > div{
    display: flex;
    align-items: center;
    row-gap: 20px;
    column-gap: 70px;
}
#about > div > div > div:first-child{
    background-color: var(--truck-gray);
    padding: 10px;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hidden {
    height: 0;
    overflow: hidden;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-out, max-height 0.5s ease-out;
}

.visible {
    height: auto;
    transform: scaleY(1);
}

#read-more{
    background-color: var(--truck-orange);
    color: var(--truck-white);
    font-weight: 600;
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 300px;
    align-self: center;
    transition: transform 0.2s ease-in-out;
}
#read-more:hover{
    transform: scale(1.1);
    cursor: pointer;
}
@media (max-width: 1080px) {
    header nav, #about{
        padding: 100px 15px;
    }
    #about > div{
        width: 100%;
    }
    #about > div h2, #about > div h3{
        text-align: center;
    }
}
@media (max-width: 920px) {
    #about > div, #about > div > div{
       flex-direction: column;
    }
    #about > div > div:last-child{
       flex-direction: column-reverse;
    }
}
@media (max-width: 768px) {
    .truckImg{
        max-width: 100%;
    }
}
</style>
