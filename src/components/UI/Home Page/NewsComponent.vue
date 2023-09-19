<script setup lang="js">
import {useI18n} from 'vue-i18n';
import NewsItem from "@/components/UI/Home Page/NewsItem.vue";
import {getNews} from "@/api/requests";
import Paginate from "vuejs-paginate-next";


const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора

import {onMounted, reactive, ref} from "vue";
let news = ref(), pagination;
let current_page=0;
const showNews=(page)=>{
  getNews(page).then((res) => {
    news.value=res.data.data;
    pagination=res.data.meta.pagination;
    console.log(news.value)
  })
}
onMounted(()=>{
  showNews(1)
})
const showPage=(page)=>{
  current_page=page;
  showNews(page)
}

</script>

<template>
  <div class="news" id="news">
    <h1 class="section-news-title">{{ $t('sections.news.title') }}</h1>
    <div class="news-container">
      <template v-for="item in news" :key="item.id">
        <NewsItem :id="item.id"
                  :title="item.attributes.title"
                  :description="item.attributes.description_short"
                  :date="item.attributes.updatedAt"
        />
      </template>
    </div>
    <div class="pagination-line " v-if="pagination!=null">
      <paginate
          :page-count="pagination.pageCount"
          :click-handler="showPage"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
      >
      </paginate>
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
.pagination-line{
  margin-top: 25px;
}
.page-link{
  margin-left: 2px;
  margin-right: 2px;
}
</style>