<script lang="ts" setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { defaulLocale } from './locales';
const {t, locale} = useI18n({useScope:'global'});

onMounted(()=>{
  localStorage.removeItem('path')
  //проверка на наличие сохраненных настроек локализации
  if(localStorage.getItem('locale')===null){
    localStorage.setItem('locale', 'ru');//устанавливаем русскую локализацию по умолчанию
  }
  locale.value = String(localStorage.getItem('locale'));
})
</script>

<template>
    <router-view/>

</template>

<style>
body {
  min-height: calc(100vh);
  background: white;
  overflow-x:hidden;
}


</style>
