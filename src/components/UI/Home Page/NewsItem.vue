<script lang="ts" setup>
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
  }
})
</script>

<template>
  <div class="container-fluid d-flex align-items-center">
    <div class="row">
      <div class="col-12 col-md-5">{{ props.title }}</div>
      <div class="col-12 col-md-5">{{ props.description }}</div>
      <div class="col-12 col-md-2"><RouterLink :to="'/news/'+props.id" class="nav-link">
        Читать далее
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

.col-5,
.col-2 {
  align-items: center;
  justify-content: center;

}
.row{
  width: 100%;
}
</style>