<script setup lang="ts">
import { ref } from 'vue'
// import menuBooks from './menu-books.vue'

const books = ref([
  {
    id: 0,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: true,
  },
  {
    id: 1,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 2,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 3,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 4,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 5,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 6,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 7,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 8,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
  {
    id: 9,
    title: 'Chain of Iron: Volume 2',
    author: 'Cassandra Clare',
    price: 23.24,
    image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg',
    quantity: 1,
    favorite: false,
  },
])

const indexStart = ref(0)
function getCardStartStyle(cardIndex: number) {
  const position = (cardIndex - indexStart.value + books.value.length) % books.value.length

  const styles = [
    { transform: 'translateX(-360vw)', opacity: 0 },
    { transform: 'translateX(-280vw)', opacity: 0 },
    { transform: 'translateX(-200vw)', opacity: 0 },
    { transform: 'translateX(-120vw)', opacity: 0 },
    { transform: 'translateX(-30vw)', opacity: 1 },
    { transform: 'translateX(40vw)', opacity: 0.5 },
    { transform: 'translateX(120vw)', opacity: 0 },
    { transform: 'translateX(200vw)', opacity: 0 },
    { transform: 'translateX(280vw)', opacity: 0 },
    { transform: 'translateX(360vw)', opacity: 0 },
  ]

  return { ...styles[position], transition: 'all 0.5s ease-in-out', position: 'absolute' }
}

const nextStart = () => (indexStart.value = (indexStart.value + 1) % books.value.length)
const prevStart = () =>
  (indexStart.value = (indexStart.value - 1 + books.value.length) % books.value.length)
</script>

<template>
  <div id="container-books" class="relative mt-5 h-[110vw] w-[280px] flex justify-center items-centers">
    <span class="material-symbols-outlined button-start" id="prev-start" @click="prevStart">arrow_back_ios</span>
    <span class="material-symbols-outlined button-start" id="next-start" @click="nextStart">arrow_forward_ios</span>
    <ul>
      <menuBooks v-for="book in books" :key="book.id" :book="book" :style="getCardStartStyle(book.id)" />
    </ul>
  </div>
</template>

<style scoped>
#container-books {
  .button-start {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    background-color: #d9d9d95c;
    font-size: 4vw;
    color: #27ae60;
    position: absolute;
    cursor: pointer;
    transform: translateY(450%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  #prev-start {
    left: 0vw;
  }

  #next-start {
    right: -20vw;
  }
}
</style>
