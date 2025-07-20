<template>


    <div class="about-wrapper">
      <div class="about-box">
        <h1>О МАГАЗИНЕ</h1>
        <p>
          <strong>33 SPINS</strong> — это магазин пластинок, который находится в
          центре Москвы и где всегда можно найти качественные пластинки по
          адекватной цене. В нём работают его владельцы, которые бережно следят
          за коллекцией и всегда помогут выбрать нужную пластинку.
        </p>
        <p>
          Не важно кто вы — коллекционер со стажем или человек, далёкий от
          музыки, который хочет сделать подарок — в <strong>33 SPINS</strong> вы
          можете обратиться к продавцу за советом, и он всегда поможет.
        </p>
        <p style="font-size: 12px">
          <b
            >Сайт сделан в рамках Производственной практики
            (проектно-технологической)</b
          >
        </p>
        <p style="font-size: 12px">
          <b>Выполнил студент группы БВТ2251 Пестравкин Артём Дмитриевич</b>
        </p>
      </div>
    </div>

</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scoped>
.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  box-sizing: border-box;
}

.about-box {
  max-width: 800px;
  width: 100%;
  text-align: left;
  font-family: "Nunito Sans", sans-serif;
}

.about-box h1 {
  font-size: 32px;
  margin-bottom: 24px;
  text-align: center;
}

.about-box p {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 16px;
}
</style>
