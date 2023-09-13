<script setup lang="ts">

import NavBar from "@/components/UI/PartnersPage/NavBar.vue";
import ContactsComponent from "@/components/UI/ContactsWhiteComponent.vue";
import FooterComponent from "@/components/UI/FooterComponent.vue";
</script>

<template>
  <NavBar/>
  <div class="main">
    <ContactsComponent/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
.main {
  padding-top: 10%;
}
</style>