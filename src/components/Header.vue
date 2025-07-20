<template>
  <header class="header">
    <div class="logo" @click="goToHome">33 SPINS</div>

    <nav class="nav">
      <a href="#" class="nav-link" @click="goToAbout">О НАС</a>
      <a href="#" class="nav-link" @click="goToCatalog">ПЛАСТИНКИ</a>
      <a href="#" class="nav-link" @click="goToContacts">КОНТАКТЫ</a>
    </nav>

    <div class="cart">КОРЗИНА</div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToHome() {
  router.push("/");
}
function goToAbout() {
  router.push("/about");
}
function goToContacts() {
  router.push("/contacts");
}
function goToCatalog() {
  router.push("/catalog");
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  font-family: "Nunito Sans", sans-serif;
  height: 60px;
  box-sizing: border-box;
}

.logo {
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 30px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #555;
}

.cart {
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}
</style>
