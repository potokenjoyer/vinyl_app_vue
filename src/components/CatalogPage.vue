<template>
  <div>
    <Header />
    <div class="catalog-wrapper">
      <h1>КАТАЛОГ ПЛАСТИНОК</h1>
      <div class="catalog-grid">
        <ProductCard
          v-for="(record, index) in records"
          :key="index"
          :image="record.image"
          :title="record.title"
          :description="record.description"
          :author="record.author"
          :price="record.price"
          :show-button="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import Header from "./Header.vue";

const records = [
  {
    image: "/product1.jpeg",
    title: "Scaps",
    description: "Музыка для тех, кто слушает не ушами, а вниманием.",
    author: "The Steve Lacy Sextet",
    price: "₽ 1790 ",
  },
  {
    image: "/product2.jpeg",
    title: "Down Home Piano",
    description: "Сны на виниле: электроника, соул и немного магии.",
    author: "Mose Allison",
    price: "₽ 2100 ",
  },
  {
    image: "product3.jpeg",
    title: "Duo 1",
    description: "Грувовый фанк с винтажным звучанием. Идеально для вечеринок.",
    author: "Anthony Braxton",
    price: "₽ 2390 ",
  },
  {
    image: "/product4.jpeg",
    title: "My Baby Has Gone",
    description: "Тёплый аналоговый звук и душевные вибрации.",
    author: "Little Miss Jessie",
    price: "₽ 1990",
  },
  {
    image: "/product5.jpeg",
    title: "Hold On",
    description:
      "Синтвейв и ретроатмосфера — пластинка в духе старых VHS-кассет.",
    author: "Carolyne Mas",
    price: "₽ 1900",
  },
  {
    image: "/product6.jpeg",
    title: "The Love I Feel For You",
    description:
      "Органичный эмбиент и звуки природы, обработанные через ленты и лампы.",
    author: "Dee Dee Sharp",
    price: "₽ 2500",
  },
  {
    image: "/product7.jpeg",
    title: "Freeway",
    description:
      "Глубокий бас и ночной неон — саундтрек мегаполиса под дождём.",
    author: "Philadelphia Freeway",
    price: "₽ 2700",
  },
  {
    image: "/product8.jpeg",
    title: "Defari",
    description:
      "Хаус и трип-хоп в одной пластинке. Заброшенные сигналы прошлого.",
    author: "Spell My Name / Slumpy",
    price: "₽ 2200",
  },
];
</script>

<style scoped>
.catalog-wrapper {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
}

.catalog-wrapper h1 {
  font-size: 36px;
  margin-bottom: 40px;
}

.catalog-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
}
</style>
