<template>
  <div class="product-card">
    <img :src="image" alt="" />
    <h2>{{ title }}</h2>
    <h2>{{ author }}</h2>
    <p class="description">{{ description }}</p>

    <p class="price">{{ price }}</p>
    <button v-if="showButton" class="buy-button" @click="handleBuy">
      Купить
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  description: String,
  price: [String, Number],
  author: String,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['buy']);

function handleBuy() {
  emit('buy', {
    image: props.image,
    title: props.title,
    description: props.description,
    price: Number(props.price), // желательно приводить к числу
    author: props.author,
  });
}
</script>

<style scoped>
.product-card {
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.product-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  margin-bottom: 12px;
  border-radius: 4px;
}

.product-card h2 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
  text-align: center;
}

.product-card .description {
  font-size: 13px;
  color: #555;
  margin-bottom: 12px;
  text-align: center;
}

.product-card .price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.buy-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  border: 2px solid black;
  cursor: pointer;
  transition: 0.3s;
}

.buy-button:hover {
  background: rgb(255, 59, 59);
  color: white;
}
</style>
