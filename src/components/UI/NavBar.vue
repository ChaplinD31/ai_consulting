<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import {ref, getCurrentInstance, onMounted, watch} from 'vue'
const { t, locale } = useI18n({ useScope: 'global' });

const toggleLocale = (lang: string) => {
    localStorage.setItem('locale', lang);
    locale.value = lang;
    location.reload();
}
let props=defineProps({
  path:{
    type: String,
    require: true,
    default: 'home'
  }
})
const image={
  logo: require('@/assets/logo.svg')
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
                    <img :src="image.logo" loading="lazy" class="logo-image"/>
                </router-link>
            </div>
            <!-- Left elements -->

            <!-- Center elements -->
            <ul class="navbar-nav flex-row d-none d-md-flex">
                <li class="nav-item">
                    <router-link
                        :to="'/'"
                        :class="{'nav-link active': props.path=='home', 'nav-link': props.path!='home'}"
                    >{{ $t('navbar.about') }}
                    </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                      :to="'/offices'"
                      :class="{'nav-link active': props.path=='offices', 'nav-link': props.path!='offices'}"
                  >{{ $t('navbar.offices') }}
                  </router-link>
                </li>

                <li class="nav-item">
                    <router-link
                        :to="'/services'"
                        :class="{'nav-link active': props.path=='services', 'nav-link': props.path!='services'}"
                    >{{ $t('navbar.services') }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        :to="'/partners'"
                        :class="{'nav-link active': props.path=='partners', 'nav-link': props.path!='partners'}"
                    >{{ $t('navbar.partners') }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        :to="'/publications'"
                        :class="{'nav-link active': props.path=='publications', 'nav-link': props.path!='publications'}"
                    >{{ $t('navbar.publications') }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        :to="'/contacts'"
                        :class="{'nav-link active': props.path=='contacts', 'nav-link': props.path!='contacts'}"
                    >{{ $t('navbar.contacts') }}
                    </router-link>
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