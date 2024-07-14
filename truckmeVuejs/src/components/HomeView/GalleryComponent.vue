<template>
  <section id="partnerships">
    <div class="carousel" ref="carousel">
      <h2>Parceiros</h2>
      <div class="carousel-inner" :style="{ transform: `translateX(${translateValue}px)` }">
        <div class="carousel-item" v-for="(partner, index) in partners" :key="index">
          <img :src="partner.image" :alt="'Slide ' + (index + 1)" />
        </div>
      </div>
      <div class="carousel-controls">
        <button id="prev" @click="prevSlide">Anterior</button>
        <button id="next" @click="nextSlide">Próximo</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import RepomImage from '@/assets/images/carousel/repom.png';
import ChubbImage from '@/assets/images/carousel/chubb.png';
import InsertSegurosImage from '@/assets/images/carousel/insert-seguros.png';

type Partner = {
    image: string;
    alt: string;
}

const carousel = ref<HTMLDivElement | null>(null);

const partners = ref<Array<Partner>>([
  { image: RepomImage, alt: 'Repom' },
  { image: ChubbImage, alt: 'Insert Seguros' },
  { image: InsertSegurosImage, alt: 'Chubb' }
]);

let currentIndex = ref<number>(0);
const totalItems: number = partners.value.length;
const itemWidth = ref<number>(1080);
let translateValue = ref<number>(0);

function updateCarouselDimensions ():void {
  if (carousel.value) {
    itemWidth.value = carousel.value.offsetWidth;
    translateValue.value = -currentIndex.value * itemWidth.value;
  }
};

function nextSlide():void {
  if (currentIndex.value < totalItems - 1) {
    currentIndex.value++;
    translateValue.value = -currentIndex.value * itemWidth.value;
  }
};

function prevSlide ():void {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    translateValue.value = -currentIndex.value * itemWidth.value;
  }
};

onMounted(() => {
  updateCarouselDimensions();
  window.addEventListener('resize', updateCarouselDimensions);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateCarouselDimensions);
});

</script>

<style scoped>
#partnerships {
  padding: 50px 0px;
}
.carousel {
  width: 1080px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}
.carousel-item div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carousel-controls button {
  background-color: var(--truck-orange);
  border: none;
  color: var(--truck-white);
  padding: 10px;
  border-radius: 5px;
}
@media (max-width: 1080px) {
    #partnerships{
        text-align: center;
    }
    #partnerships h2{
        margin-bottom: 80px;
    }
    .carousel {
        width: 500px;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
    }
}
@media (max-width: 768px) {
    .carousel {
        width: 300px;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
    }
    .carousel img{
        max-width: 280px;
    }
}
</style>
