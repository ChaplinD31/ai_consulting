<script lang="ts" setup>
import {reactive} from "vue";

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
  }
})
let date=reactive({
  day: '0',
  hours: '0',
  minutes: '0'
});

date.day=new Date(String(props.date)).toLocaleDateString();
date.hours=String(new Date(String(props.date)).getHours());
date.minutes=String(new Date(String(props.date)).getMinutes());


</script>

<template>
  <div class="container-fluid d-flex align-items-center">
    <div class="row">
      <div class="col-12 col-md-5 d-flex flex-column justify-content-around">
        <p class="news-title">{{ props.title }}</p>
        <p class="news-date">{{`${date.day} ${date.hours}:${date.minutes}`}}</p>
      </div>
      <div class="col-12 col-md-5 d-flex align-items-center">
        <p class="news-description">{{ props.description }}</p>
      </div>
      <div class="col-12 col-md-2 d-flex align-items-center"><RouterLink :to="'/news/'+props.id" class="nav-link">
        Читать далее →
      </RouterLink></div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  border-radius: 4px;
  min-height: 5rem;
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
  box-shadow: 1px 1px gray;
}
.row{
  width: 100%;
}
.news-title{
  font-weight: bold;
}
.news-date{
  font-size: 10pt;
}
.news-description{
  font-weight: 450;
}
.nav-link{
  font-weight: lighter;
}
</style>