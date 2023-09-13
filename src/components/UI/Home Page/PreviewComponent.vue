<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {onMounted, ref} from "vue";
import {getAbout} from "@/api/requests";

const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора
let about = ref({})

getAbout.then(res => {
  console.log(res);
  about.value = res.data.data.attributes;
})
</script>

<template>
    <div class="row">
      <div class="d-none d-md-flex col-md-12 align-content-center justify-content-center mb-4">
        <div class="technical-vision-frame titul-categories">{{ $t('sections.titul.technic-vision') }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="text-container">
          <h4 class="section-titul-title">{{ about.title }}</h4>
          <p>{{ $t('sections.titul.description')}}</p>
          <button class="titul-btn">{{ $t('sections.titul.button') }} ></button>
        </div>
      </div>
      <div class="d-none d-md-flex flex-md-column col-md-4">
        <div class="preprocessing-frame titul-categories">{{ $t('sections.titul.preprocessing') }}</div>
        <div class="data-mining-frame titul-categories">{{ $t('sections.titul.data-mining') }}</div>
      </div>
    </div>
    <div class="row">
      <div class="d-none d-md-flex col-md-12 mt-4 justify-content-end px-2">
        <div class="tematical-modelling-frame titul-categories">{{ $t('sections.titul.thematic-modelling') }}</div>
      </div>
    </div>
</template>

<style scoped>

.text-container {
  text-align: left;
  width: 55%;
}

.text-container .section-titul-title {
  font-size: calc(13pt + 2vw);
  text-transform: uppercase;
  color: rgba(9, 137, 187, 1)
}

.technical-vision-frame {
  background: url('@/assets/titul/technic-vision-logo.svg') no-repeat 5%, linear-gradient(178.24deg, rgba(109, 207, 253, 0.9) 1.41%, rgba(230, 247, 255, 0.9) 135%),
  linear-gradient(0deg, #7BD3FF, #7BD3FF);
  background-size: calc(34% + 10px);
  padding: 10px 10px;
  width: 300px;
}

.preprocessing-frame {
  background: url('@/assets/titul/preprocessing-icon.svg') no-repeat 5%, linear-gradient(rgba(9, 137, 187, 0.9) 0%, rgba(109, 207, 253, 0.9) 95%);
  background-size: calc(30% + 10px);
  padding: 10px 10px;
  width: calc(55% + 10px);
  position: relative;
  right: 30%;
  margin-bottom: calc(10vh);
}

.data-mining-frame {
  background: url('@/assets/titul/data-minig-logo.svg') no-repeat 5%, linear-gradient(178.24deg, rgba(116, 177, 255, 0.9) 1.41%, rgba(232, 242, 255, 0.378) 136.19%),
  linear-gradient(0deg, #97C5FF, #97C5FF);
  background-size: calc(32% + 10px);
  padding: 10px 10px;
  width: calc(44% + 10px);
  position: relative;
  right: 45%;

}

.tematical-modelling-frame {
  background: url('@/assets/titul/thematic-modelling.svg') no-repeat 5%, linear-gradient(178.24deg, rgba(20, 61, 117, 0.9) 1.41%, rgba(246, 247, 251, 0.9) 157.66%),
  linear-gradient(0deg, #364E6E, #364E6E);
  background-size: calc(18% + 10px);
  padding: 10px 10px;
  width: calc(35% + 10px);

}

.titul-categories {
  font-size: calc(1px + 1.5vw);
  text-align: center;
  border-radius: 10px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}

.titul-btn {
  background: linear-gradient(180deg, #0989BB 0%, rgba(9, 137, 187, 0.58) 100%);
  border-radius: 20px;
  padding: 7px 18px;
  border-color: rgba(255, 255, 255, 0);
  color: white;
  font-weight: 600;
}

</style>