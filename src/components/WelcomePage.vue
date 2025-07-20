<template>
  <div class="welcome-container">
    <div class="products">
      <ProductCard
        image="/product1.jpg"
        title="Midnight Needle"
        description="
Сборник тёплого аналогового звука, пропитанного джазовыми интонациями, лоу-фай ритмами и лёгкой хрипотцой старого проигрывателя"
price="1790"
      />
      <ProductCard
        image="/product1.jpg"
        title="Spins & Dreams"
        description="Пластинка с атмосферной электроникой, соулом и кинематографическими мелодиями, будто созданными для ночных прогулок и размышлений."
        price="2100"
      />
    </div>

    <div class="info">
      <h1>
        КОГДА ВРАЩАЕТСЯ ДИСК <br />
        <span class="bold">ЗАПИСЬ ОЖИВАЕТ</span><br />
        <span class="bold">А ДУША</span><br />
        <span class="bold">УНОСИТСЯ В ВЕЧНОСТЬ</span>
      </h1>
      <p>
        Винил — звук с душой и характером. Каждый трек — живое воспоминание,
        каждое вращение — магия момента. Погрузись в атмосферу настоящей музыки
        — почувствуй винил!
      </p>
      <button @click="goToAbout">Узнать больше</button>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToAbout() {
  router.push("/about");
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  gap: 80px;
  flex-wrap: wrap;
  height: 95vh; /* Высота в 100% высоты окна браузера */
  box-sizing: border-box; /* Чтобы padding учитывался внутри */
}
.products {
  display: flex;
  gap: 50px;
}

.info {
  max-width: 400px;
}

.info h1 {
  font-size: 32px;
  line-height: 1.3;
  margin-bottom: 20px;
}

.bold {
  font-weight: bold;
  color: #000;
}

.info p {
  color: #444;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.info button {
  padding: 10px 20px;
  border: 2px solid black;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.info button:hover {
  background: black;
  color: white;
}
</style>
