<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {onMounted, ref} from "vue";
import {getAbout} from "@/api/requests";
import * as marked from "marked";

const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора
let about = ref({})
const toHTML=(marks: string)=>{
   return marked.parse(marks);
}

getAbout.then(res => {
  console.log(res);
  about.value = res.data.data.attributes;
})
</script>

<template>
  <div class="row">
    <div class="container-fluid">
      <div class="text-container">
        <h4 class="section-titul-title">{{ $t('sections.about.title') }}</h4>
        <p v-if="about.description!=null" v-html="toHTML(about.description)"></p>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="d-none d-md-block col-1">
            <img src="img/about/about-lines.svg" class="figure-img img"/>
          </div>
          <div class="col-12 col-md-11">
            <div class="section">
              <div class="container-fluid">
                <p v-html="toHTML($t('sections.about.offices'))"></p>
              </div>
            </div>
            <div class="section">
              <div class="container-fluid">
                <p v-html="toHTML($t('sections.about.services'))"></p>
                
              </div>
            </div>
            <div class="section">
              <div class="container-fluid">
                <p v-html="toHTML($t('sections.about.publications'))"></p>
              </div>
            </div>
            <div class="section">
              <div class="container-fluid">
                <p v-html="toHTML($t('sections.about.contacts'))"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>


.text-container {
  text-align: justify;
  width: 100%;
  font-size: 15pt;
  font-weight: 400;
}

.text-container .section-titul-title {
  font-size: calc(13pt + 2vw);
  text-transform: uppercase;
  color: rgba(9, 137, 187, 1)
}

.row {
  padding-top: 2rem;
}

.section {
  padding-top: 20px;
}

.section > p {
  text-align: justify;
}


.img {
  width: calc(140%);
  height: auto;
}
</style>