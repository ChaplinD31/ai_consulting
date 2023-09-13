<script setup lang="ts">
import {getAbout} from "@/api/requests";
import {useI18n} from "vue-i18n";
const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора

</script>

<template>
  <div class="section">
    <div class="text-container">
      <h3>{{ $t('sections.services.title') }}</h3>
      <p>{{ $t('sections.services.description') }}.</p>
    </div>
    <div class="services-container">

    </div>
  </div>
</template>

<style scoped>
.services-container {
  position: relative;
  width: 100%;
  min-height: 40rem;
  background-color: white;
  box-shadow: 1px 1px gray;
  border-radius: 4px;
  margin-top: 10px;
}

.section {
  padding-right: 10%;
  padding-left: 10%;
  min-height: 250px;
  padding-top: 35px;
}

.text-container {
  padding-left: 20%;
  padding-right: 20%;
  color: white;
}

.text-container > * {
  text-align: center;
}

</style>