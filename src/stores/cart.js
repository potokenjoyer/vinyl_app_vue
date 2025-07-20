import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([
    {
      title: 'Midnight Needle',
      price: 4999,
      image: '/product1.jpg',
    },
  ]);

  function addToCart(product) {
    cart.value.push(product);
  }

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + Number(item.price), 0)
  );

  return { cart, addToCart, totalPrice };
});
