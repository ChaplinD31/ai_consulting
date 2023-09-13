<script setup lang="ts">
import CardItem from "@/components/UI/CardItem.vue";
import {getOffices} from "@/api/requests";
import {ref} from "vue";
let offices=ref({})
getOffices.then(res => {
  console.log(res);
  offices.value = res.data.data.attributes;
})
</script>

<template>
  <div class="section">
    <div class="text-container">
      <h3>{{offices.title}}</h3>
      <p>{{offices.description}}.</p>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 justify-content-around gy-2">
        <div class="col">
          <CardItem/>
        </div>
        <div class="col">
          <CardItem/>
        </div>
        <div class="col">
          <CardItem/>
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

.text-container {
  padding-left: 20%;
  padding-right: 20%;
  color: white;
}

.text-container > * {
  text-align: center;
}
</style>