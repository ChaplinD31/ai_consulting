<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import NewsItem from "@/components/UI/Home Page/NewsItem.vue";
import {getNews} from "@/api/requests";

const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора

import {onMounted, reactive, ref} from "vue";
let news = ref(), pagination;
getNews(1).then((res) => {

  news.value=res.data.data;
  pagination=res.data.meta.pagination;
})

</script>

<template>
  <div class="news">
    <h1 class="section-news-title">{{ $t('sections.news') }}</h1>
    <div class="news-container">
      <template v-for="item in news" :key="item.id">
        <NewsItem :id="item.id" :title="item.attributes.title" :description="item.attributes.description_short"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.section-news-title {
  font-size: calc(20pt + 2vw);
  z-index: 1;
  color: rgba(18, 45, 82, 1);
}

.news-container {
  position: relative;
  z-index: 2;
  top: -25px;
  width: 100%;
  min-height: 20rem;
}

.news {
  padding-left: 10%;
  padding-right: 10%;
}
</style>