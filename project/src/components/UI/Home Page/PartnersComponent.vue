<script setup lang="ts">
import {getAbout, getPartners} from "@/api/requests";
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора
let partners=ref({});
getPartners.then(res=>partners.value=res.data.data)
</script>

<template>
  <div class="section">
    <div class="text-container">
      <h4 class="mb-4">{{ $t('sections.partners') }}</h4>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-sm-around">
        <div class="col" v-for="item in partners" :key="item.id">
          <img class="partner" :src='`https://ais.bstu.ru/cms${item.attributes.image.data.attributes.url}`'/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.partner{
  width: 80%;
  height: auto;
  margin-bottom: 10px;
}
</style>