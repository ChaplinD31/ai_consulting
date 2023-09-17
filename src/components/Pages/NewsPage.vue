<script setup lang="js">

import NavBar from "@/components/UI/NavBar.vue";
import ContactsComponent from "@/components/UI/ContactsComponent.vue";
import FooterComponent from "@/components/UI/FooterComponent.vue";
import {useRoute} from "vue-router";
import {getAnotherNewsItem, getNews, getNewsItem} from "@/api/requests";
import {onMounted, onUpdated, reactive, ref} from "vue";
import {PATH} from "@/values";
import * as marked from "marked";
import CardItem from "@/components/UI/CardItem.vue";
import NewsCard from "@/components/UI/NewsPage/NewsCard.vue";
import Paginate from "vuejs-paginate-next";
import {useI18n} from "vue-i18n";


const routs=useRoute();
let title=ref(), description_short=ref(), description=ref(), image=ref(), day=ref();//основная статья

const getMainNews=(id)=>{
  getNewsItem(id).then(res=>{
    console.log(res);
    image.value=res.data.data.attributes.image.data.attributes.url;
    title.value=res.data.data.attributes.title;
    day.value=new Date(String(res.data.data.attributes.updatedAt)).toLocaleDateString();
    description.value=res.data.data.attributes.description;
    description_short.value=res.data.data.attributes.description_short;
  })
}
let related_news=ref();//связанные статьи
let current_page=1, pagination;
let {t}=useI18n({useScope:'global'});
const showNews=(page)=>{
  getAnotherNewsItem(String(routs.params.id), String(page)).then(res=>{
    related_news.value=res.data.data;
    pagination=res.data.meta.pagination;
    console.log("related")
    console.log(related_news.value)
  })
}
const showPage=(page)=>{
  current_page=page;
  showNews(page)
}
onMounted(()=>{
  getMainNews(String(routs.params.id));
  showPage(1);
})
const toHTML=(marks)=>{
  return marked.parse(marks);
}

</script>

<template>
  <NavBar :path="'news'"/>
  <div class="main">
    <div class="article">
      <p><RouterLink to="/" class="nav-link">← Вернуться на главную страницу</RouterLink></p>
      <div class="preview-image" :style="{background: `url('${PATH}${image}') no-repeat`, backgroundSize: `cover`}">
        <h2 class="news-title">{{title}}</h2>
        <h4 class="news-date">{{`${day}`}}</h4>
      </div>
      <div class="short-description-container" v-html="toHTML(description_short)" v-if="description_short!=null"/>
      <div class="description-container" v-html="toHTML(description)" v-if="description!=null">
      </div>
    </div>
    <div class="related">
      <hr>
      <p class="mt-4 mb-4 another-news-title">{{t('sections.news.read_another_news')}}</p>
      <div class="row row-cols-1 row-cols-md-3 justify-content-md-around justify-content-center">
        <template v-for="item in related_news" :key="item.id">
          <NewsCard
              :date="item.attributes.updatedAt"
              :title="item.attributes.title"
              :description="item.attributes.description_short"
              :image="item.attributes.image.data.attributes.url"
              :id="item.id"
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

    <ContactsComponent :theme="'white'"/>
    <FooterComponent/>
  </div>
</template>

<style scoped>
.main {
  padding-top: 10px;
}
.article{
  padding-left: 10%;
  padding-right: 10%;
}
.preview-image{
  width: 100%;
  min-height: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.news-title{
  padding-left: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}
.news-date{
  padding-left: 40px;
  font-weight: normal;
  text-transform: uppercase;
  color: white;
}
.short-description-container{
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
}
.description-container{
  padding-bottom: 20px;
}
.related{
  padding-left: 10%;
  padding-right: 10%;
}
hr{
  border-color: #5c636a;
}
.pagination-line{
  margin-top: 25px;
}
.another-news-title{
  font-size: 13pt;
  font-weight: bold;
}
</style>