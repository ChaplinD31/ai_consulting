<script setup lang="ts">

import NavBar from "@/components/UI/NavBar.vue";
import ContactsComponent from "@/components/UI/ContactsComponent.vue";
import FooterComponent from "@/components/UI/FooterComponent.vue";
</script>

<template>
  <NavBar :path="'news'"/>
  <div class="main">
    <ContactsComponent :theme="'white'"/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
.main {
  padding-top: 10%;
}
</style>