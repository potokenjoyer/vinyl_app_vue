<template>
    <div class="contacts-wrapper">
      <div class="contacts-box">
        <h1>КОНТАКТЫ</h1>
        <p><strong>Адрес:</strong> Москва, ул. Виниловая, д. 33</p>
        <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
        <p><strong>Email:</strong> contact@33spins.ru</p>
        <p><strong>Время работы:</strong> Пн–Вс: с 11:00 до 21:00</p>
      </div>
<h1 style="font-size: 60px;">33 <br>SPINS </br></h1>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scoped>
.contacts-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  box-sizing: border-box;
}

.contacts-box {
  max-width: 400px;
  width: 100%;
  text-align: left;
  font-family: "Nunito Sans", sans-serif;
}

.contacts-box h1 {
  font-size: 32px;
  margin-bottom: 24px;
  text-align: left;
}

.contacts-box p {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 12px;
}
</style>
