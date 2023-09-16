<script setup lang="ts">

import NavBar from "@/components/UI/NavBar.vue";
import ContactsComponent from "@/components/UI/ContactsComponent.vue";
import FooterComponent from "@/components/UI/FooterComponent.vue";
</script>

<template>
  <NavBar :path="'offices'"/>
  <div class="main">
    <div class="not-found-screen">
      <h2>404 Not found</h2>
    </div>
    <ContactsComponent :theme="'white'"/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
.main {
  padding-top: 10%;
}
.not-found-screen{
  padding-left: 20%;
  padding-right: 20%;
  min-height: calc(100vh - 600px);
  width: auto;
  display: flex;
}
.not-found-screen > *{
  margin: auto;
}
</style>