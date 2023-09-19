<script setup lang="ts">
import {getAbout} from "@/api/requests";
import {useI18n} from "vue-i18n";
const {t, locale} = useI18n({useScope: 'global'});//подключение локализатора

</script>

<template>
  <div class="section" id="services">
    <div class="text-container">
      <h3>{{ $t('sections.services.title') }}</h3>
      <p>{{ $t('sections.services.description') }}.</p>
    </div>
    <div class="services-container">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="service-card compare-video-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-8">
                  <h2 class="service-title">Сравнение видео</h2>
                </div>
                <div class="col-12 col-md-4">
                  <button>
                    <router-link to="/services/videoCompare" class="nav-link">Попробовать ></router-link>
                  </button>
                </div>
                <div class="col-12">
                  <p class="service-description">
                    Этот сервис позволит вам сравнить два видеофрагмента.
                    Наши тесты показывают, что действительно похожие видео имеют степень совпадения больше 50%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="service-card analyse-text-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <button>
                    <router-link to="/services/textAnalyse" class="nav-link">Попробовать ></router-link>
                  </button>
                </div>
                <div class="col-12">
                  <h2 class="service-title mt-2">Анализы текстов</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="service-card table-data-alyse-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <h2 class="service-title">Анализы табличных данных</h2>
                </div>
                <div class="col-12">
                  <button>
                    <router-link to="/services/tableDataAnalyse" class="nav-link">Попробовать ></router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <div class="service-card data-transform-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <button>
                    <router-link to="/services/dataTransform" class="nav-link">Попробовать ></router-link>
                  </button>
                </div>
                <div class="col-12">
                  <h2 class="service-title mt-2">Трансформация данных</h2>
                </div>
                <div class="col-12">
                  <p class="service-description">Этот сервис позволит вам преобразовать ваш датасет в числовой датасет,
                    размерность которого может быть выбрана вами.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  position: relative;
  width: 100%;
  min-height: 40rem;
  border-radius: 4px;
  margin-top: 10px;
}

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
.service-card{
  margin: 20px 5px 5px 5px;
  padding: 20px 60px 20px 20px;
  border-radius: 20px;
  height: 400px;
  background: linear-gradient(rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.87) 100%);
  display: flex;
}
.compare-video-container{
  align-items: flex-start;
}
.analyse-text-container{
  align-items: flex-end;
}
.table-data-alyse-container{
  align-items: flex-start;
}
.data-transform-container{
  align-items: flex-end;
}
button{
  background: white;
  border-radius: 20px;
  padding: 5px 10px;
  border: 1px solid white;
}
.service-title{
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}
.service-description{
  color: white;
  margin-top: 10px;
}
</style>