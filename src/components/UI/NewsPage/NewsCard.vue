<script setup lang="ts">
import {PATH} from "@/values";
import {useI18n} from "vue-i18n";
let {t}=useI18n({useScope:'global'})
let props = defineProps({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  date:{
    type: String,
    require: true
  },
  image:{
    type: String,
    require: true
  }
})
let date=new Date(String(props.date)).toLocaleDateString();
const limitStr=(str: string, n:number, symb:string)=>{
  if (str.length<=n) return str;
  symb = symb || '...';
  return str.substr(0, n - symb.length) + symb;
}
</script>

<template>
  <div class="news-card">
    <div class="card-container">
      <p class="card-title">{{props.title}}</p>
      <p class="date">{{date}}</p>
      <p class="card-body">{{limitStr(description, 90, '...')}}</p>
      <p class="nav-link">
        <a :href='`/news/${props.id}`'>{{t(('sections.news.read_more_page'))}}</a>
      </p>
      <img :src="`${PATH}${props.image}`" class="img-fluid"/>
    </div>
  </div>
</template>

<style scoped>
  .news-card{
    padding: 5px;
    width: 350px;
    height: 400px;
  }
  .card-container{
    border-radius: 20px;
    border: 1px solid black;
    width: calc(350px - 10px);
    height: calc(400px - 10px);
    padding: 15px;
  }
  .card-title{
    font-weight: bold;
  }
  .img-fluid{
    border-radius: 20px;
  }
  .date{
    font-size: 11pt;
    font-weight: lighter;
  }
</style>