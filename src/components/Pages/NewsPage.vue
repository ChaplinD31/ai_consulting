<script setup lang="js">

import NavBar from "@/components/UI/NavBar.vue";
import ContactsComponent from "@/components/UI/ContactsComponent.vue";
import FooterComponent from "@/components/UI/FooterComponent.vue";
import {useRoute} from "vue-router";
import {getAnotherNewsItem, getNewsItem} from "@/api/requests";
import {reactive, ref} from "vue";
import {PATH} from "@/values";
import * as marked from "marked";


const routs=useRoute();
let title=ref(), description_short=ref(), description=ref(), image=ref(), day=ref();//основная статья
let related_news=ref();//связанные статьи
getNewsItem(String(routs.params.id)).then(res=>{
  console.log(res);
  image.value=res.data.data.attributes.image.data.attributes.url;
  title.value=res.data.data.attributes.title;
  day.value=new Date(String(res.data.data.attributes.updatedAt)).toLocaleDateString();
  description.value=res.data.data.attributes.description;
  description_short.value=res.data.data.attributes.description_short;
})
getAnotherNewsItem(String(routs.params.id)).then(res=>{
  console.log('filtered')
  console.log(res)
})
const formatDate=(date)=>{
  let out=date;
  if(Number(date)<10){
    date='0'+date;
  }
  return date;
}
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
  padding-left: 10%;
}
</style>