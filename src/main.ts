import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import VueScrollTo from 'vue-scrollto'
import { createI18n, useI18n } from 'vue-i18n'
import {defaulLocale, langs} from '@/locales/index';

const messages = Object.assign(langs);//переводы

const i18n = createI18n({
    legacy: false,//использование Composition API
    locale: defaulLocale,//локализация устаналиватся по умолчанию
    fallbackLocale: 'ru',//локализация если язык не поддерживается
    messages
    
})

createApp(App,{
    setup(){
        const {t} = useI18n();
        return {t};
    }
}).use(i18n).
    use(router).
use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
}).
    mount('#app')
