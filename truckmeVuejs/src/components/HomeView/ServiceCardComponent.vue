<template>
  <article class="card">
    <div>
      <div class="icon-container"><component :is="props.icon" /></div>
      <div>
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
      </div>
    </div>
    <div>
      <span>R$ {{ props.value }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps({
  icon: {
    type: Object as () => Component,
    default: null
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  value: {
    type: Number,
    default: 0
  }
});
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 20px 25px;
    border-radius: 15px;
    color: #1B252D;
}
.card > div:first-child {
    display: flex;
    align-items: center;
    column-gap: 30px;
}
.card > div:first-child > div:last-child {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
.card > div:first-child > div:last-child h3 {
    font-size: 1.8rem;
}
.card > div:first-child > div:last-child p {
    font-size: 1.1rem;
}
.card > div:last-child {
    font-size: 2rem;
    font-weight: 700;
    color: #F05123;
    padding: 0px 20px;
    width: 180px;
}
.icon-container svg {
    width: 150px;
}
@media (max-width: 920px) {
    #services .card{
        flex-direction: column;
        row-gap: 20px;
        padding: 30px;
    }
    #services .card > div:first-child{
        flex-direction: column;
        text-align: center;
        row-gap: 20px;
    }
}
</style>
