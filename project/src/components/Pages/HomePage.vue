<script setup lang="ts">
import NavBar from '@/components/UI/NavBar.vue';
import NewsComponent from "@/components/UI/Home Page/NewsComponent.vue";
import ServicesComponent from "@/components/UI/Home Page/ServicesComponent.vue";
import OfficesComponent from "@/components/UI/Home Page/OfficesComponent.vue";
import PartnersComponent from "@/components/UI/Home Page/PartnersComponent.vue";
import PreviewComponent from "@/components/UI/Home Page/PreviewComponent.vue";
import AboutComponent from "@/components/UI/Home Page/AboutComponent.vue";

</script>

<template>
  <NavBar/>
  <div class="top-container">
    <PreviewComponent/>
    <AboutComponent/>
  </div>
  <!--основную часть реализована единым компонентом из-за слоного фона-->
  <div class="main">
    <NewsComponent/>
    <ServicesComponent/>
    <OfficesComponent/>
    <PartnersComponent/>

  </div>
</template>

<style scoped>
.top-container {
  background: linear-gradient(white 0%, rgba(27, 226, 248, 0.2) 85%);
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 10%;
  padding-right: 10%;
}

.main {
  background: url('@/assets/home-background.png') no-repeat,
  linear-gradient(180deg, rgba(27, 226, 248, 0.2) 0%,
      rgba(7, 32, 61, 0.2) 73.96%);
  background-size: 100% 100%;
  padding-top: 10%;
}

</style>