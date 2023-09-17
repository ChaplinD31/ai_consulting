<script setup lang="ts">
import {CONTACTS_LINK} from "@/values";
import {useI18n} from "vue-i18n";

let props=defineProps({
  theme:{
    type: String,
    require: true
  }
})
const images={
  vk: require(`@/assets/contacts/${props.theme}/vk_logo_icon.svg`),
  tg: require(`@/assets/contacts/${props.theme}/tg_logo_icon.svg`),
  email: require(`@/assets/contacts/${props.theme}/email_logo_icon.svg`),
  phone: require(`@/assets/contacts/${props.theme}/phone_logo_icon.svg`),
  spot: require(`@/assets/contacts/${props.theme}/spot_logo_icon.svg`),
  github: require(`@/assets/contacts/${props.theme}/github_logo_icon.svg`)
}
const {t}=useI18n({useScope: 'global'});
</script>

<template>
  <div class="section">
    <h5 class="contacts-title">{{t('sections.contacts.title')}}</h5>
    <hr class="contacts-devider">
    <div class="row">
      <div class="col-12 col-md-2">
        <p>{{t('sections.contacts.social_networks.title')}}</p>
        <div class="contact-item">
          <img :src="images.vk" id="vk" class="logo">
          <label for="vk"><a :href="CONTACTS_LINK.vk">{{t('sections.contacts.social_networks.vk')}}</a> </label>
        </div>
        <div class="contact-item">
          <img :src="images.tg" id="tg-chanel" class="logo">
          <label for="tg-chanel"><a :href="CONTACTS_LINK.tg_chanel">
            {{t('sections.contacts.social_networks.tg_chanel')}}
          </a> </label>
        </div>
        <div class="contact-item">
          <img :src="images.tg" id="tg-bot" class="logo">
          <label for="tg-chanel"><a :href="CONTACTS_LINK.tg_bot">
            {{t('sections.contacts.social_networks.tg_bot')}}
          </a> </label>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <p>{{t('sections.contacts.contact_us')}}</p>
        <div class="contact-item">
          <div class="contact-item">
            <img :src="images.phone" id="phone" class="logo">
            <label for="phone"><a :href="`tel:${CONTACTS_LINK.phone}`">{{CONTACTS_LINK.phone}}</a> </label>
          </div>
          <div class="contact-item">
            <img :src="images.email" id="email" class="logo">
            <label for="email"><a :href="`mailto:${CONTACTS_LINK.mail}`">{{CONTACTS_LINK.mail}}</a> </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <p>{{t('sections.contacts.repository')}}</p>
        <div class="contact-item">
          <img :src="images.github" id="github" class="logo">
          <label for="email"><a :href="CONTACTS_LINK.github">github.com</a> </label>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <p>{{t('sections.contacts.address.title')}}</p>
        <div class="contact-item">
          <img :src="images.spot" id="address" class="logo">
          <label for="address"><a href="#">{{t('sections.contacts.address.location')}}</a> </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-right: 10%;
  padding-left: 10%;
  min-height: 250px;
  padding-top: 35px;
}

.contacts-title {
  color: rgba(108, 113, 128, 1);
  font-weight: lighter;
  font-size: 18pt;
}

.contacts-devider {
  border-color: rgba(108, 113, 128, 1);;
}

p {
  color: black;
  font-weight: 500;
}

a {
  text-decoration: none;
  color: black;
  font-weight: lighter;
}

.logo {
  margin-right: 5px;
}
.contact-item{
  margin-bottom: 10px;
}
</style>