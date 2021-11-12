<template>
  <q-page>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col  bg-accent"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col col-6 bg-secondary"></div>
      <div class="col  bg-accent"></div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Flex'
})
</script>

<style scoped>
.col, .col-4, .col-6, .col-12 {
  height: 50px;
}
</style>