<template>
  <q-page class="flex column q-pa-md">
    <!-- <h1>Typography</h1> -->
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>
    <q-separator/>
    <span class="text-subtitle1">Subtitulo 1</span>
    <span class="text-subtitle2">Subtitulo 2</span>
    <q-separator/>
    <p class="text-body1">Cuerpo de texto 1</p>
    <p class="text-body2">Cuerpo de texto 2</p>

    <q-btn color="secondary" 
           :label="sideMenuOpen? 'Cerrar menú lateral' : 'Abrir menú lateral'" 
           class="q-mt-md"
           @click="toggleSideMenu"
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import useUI from '../composables/useUI'

export default defineComponent({
  name: 'Typography',

  setup() {

    const {sideMenuOpen, toggleSideMenu} = useUI()

    return {
      sideMenuOpen, 
      toggleSideMenu
    }

  }
})
</script>
