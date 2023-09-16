<script setup lang="ts">
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
</script>

<template>
  <div class="section">
    <h5 class="contacts-title">Контакты</h5>
    <hr class="contacts-devider">
    <div class="row">
      <div class="col-12 col-md-2">
        <p>Мы в социальных сетях</p>
        <div class="contact-item">
          <img src="img/contacts/white/vk_logo_icon.svg" id="vk" class="logo">
          <label for="vk"><a href="https://vk.com">VKontakte</a> </label>
        </div>
        <div class="contact-item">
          <img :src="images.tg" id="tg-chanel" class="logo">
          <label for="tg-chanel"><a href="https://tg.com">Telegram-канал</a> </label>
        </div>
        <div class="contact-item">
          <img :src="images.tg" id="tg-bot" class="logo">
          <label for="tg-chanel"><a href="https://tg.com">Telegram-бот</a> </label>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <p>Свяжитесь с нами</p>
        <div class="contact-item">
          <div class="contact-item">
            <img :src="images.phone" id="phone" class="logo">
            <label for="phobe"><a href="tel:123456789">123-456-789</a> </label>
          </div>
          <div class="contact-item">
            <img :src="images.email" id="email" class="logo">
            <label for="email"><a href="mailto:mail@mail.ru">mail@mail.ru</a> </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <p>Официальный репозиторий</p>
        <div class="contact-item">
          <img :src="images.github" id="github" class="logo">
          <label for="email"><a href="https://github.com">github.com</a> </label>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <p>Адрес</p>
        <div class="contact-item">
          <img src="img/contacts/white/spot_logo_icon.svg" id="address" class="logo">
          <label for="address"><a href="#">г. Белгород, ул. Костюкова, д. 41</a> </label>
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