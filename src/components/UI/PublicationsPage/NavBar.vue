<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import {ref, getCurrentInstance, onMounted, watch} from 'vue'
const { t, locale } = useI18n({ useScope: 'global' });
import {onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";

let instance = getCurrentInstance();
const toggleLocale = (lang: string) => {
    localStorage.setItem('locale', lang);
    locale.value = lang;
    location.reload();
}

</script>
<template>
  <div class="main-container">
    <nav class="navbar navbar-expand-lg" style="background-color: white;">
        <div class="container-fluid justify-content-between">
            <!-- Left elements -->
            <div class="d-flex">
                <!-- Brand -->
                <router-link :to="'/'" class="navbar-brand me-2 mb-1 d-flex align-items-center">
                    <img src="img/logo.svg" loading="lazy" class="logo-image"/>
                </router-link>
            </div>
            <!-- Left elements -->

            <!-- Center elements -->
            <ul class="navbar-nav flex-row d-none d-md-flex">
                <li class="nav-item">
                    <router-link :to="'/'" class="nav-link"  >{{ $t('navbar.about') }}</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="'/news'" class="nav-link" >{{ $t('navbar.news') }}</router-link>
                </li>

                <li class="nav-item">
                  <router-link :to="'/offices'" class="nav-link" >{{ $t('navbar.offices') }}</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="'/services'" class="nav-link" >{{ $t('navbar.services') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/partners'" class="nav-link" >{{ $t('navbar.partners') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/publications'" class="nav-link active" >{{ $t('navbar.publications') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/contacts'" class="nav-link" >{{ $t('navbar.contacts') }}</router-link>
                </li>
            </ul>
            <!-- Center elements -->

            <!-- Right elements -->
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <a :class="{'nav-link': locale!='ru', 'nav-link active': locale=='ru'}" @click="toggleLocale('ru')">RU</a>
                </li><li class="nav-item">
                    <a :class="{'nav-link': locale!='en', 'nav-link active': locale=='en'}" @click="toggleLocale('en')">EN</a>
                </li><li class="nav-item">
                    <a :class="{'nav-link': locale!='de', 'nav-link active': locale=='de'}"  @click="toggleLocale('de')">DE</a>
                </li>
            </ul>
            <!-- Right elements -->
        </div>
    </nav>
  </div>
</template>

<style scoped>
.logo-image {
    width: 142px;
    height: 40px;
}

.navbar {
    border-bottom: 1px solid black;
    margin-left: 10%;
    margin-right: 10%;
  width: 100%;

}
.active{
    font-weight:500;
}
a{
    cursor: pointer;
}
.main-container{
  display: flex;
  justify-content: center;
}


</style>