<template>
  <div class="cart-page">
    <h1>Корзина</h1>

    <div v-if="cartStore.cart.length === 0">
      <p>Ваша корзина пуста.</p>
    </div>

    <div v-else>
      <ul class="cart-items">
        <li v-for="(item, index) in cartStore.cart" :key="index" class="cart-item">
          <img :src="item.image" alt="Обложка" />
          <div class="info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.price }} ₽</p>
          </div>
        </li>
      </ul>

      <div class="summary">
        <p>Товаров: {{ cartStore.cart.length }}</p>
        <p>Итого: {{ cartStore.totalPrice }} ₽</p>
        <button>Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 4px;
}

.cart-item .info h2 {
  font-size: 16px;
  margin-bottom: 4px;
}

.summary {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.summary p {
  font-weight: bold;
  margin-bottom: 8px;
}

.summary button {
  padding: 10px 20px;
  border: 2px solid black;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.summary button:hover {
  background: black;
  color: white;
}
</style>
