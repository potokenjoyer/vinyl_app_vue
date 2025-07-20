<template>
  <div class="cart-page">
    <h1>Корзина</h1>

    <div v-if="cart.length === 0">
      <p>Ваша корзина пуста.</p>
    </div>

    <div v-else>
      <ul class="cart-items">
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.image" alt="Обложка" />
          <div class="info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.price }} ₽</p>
          </div>
        </li>
      </ul>

      <div class="summary">
        <p>Товаров: {{ cart.length }}</p>
        <p>Итого: {{ totalPrice }} ₽</p>
        <button>Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cart: [
        {
          title: 'Midnight Needle',
          price: 4999,
          image: '/product1.jpg',
        },

      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
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
