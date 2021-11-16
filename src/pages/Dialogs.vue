<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Diálogos</span>
    
    <q-separator spaced />

    <template v-if="nombre" >
      <span class="text-h6">{{nombre}}</span>
      <q-separator spaced />
    </template>
    
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Dialogs',
  setup() {
    const $q = useQuasar()
    const nombre = ref()

    function alert () {
      $q.dialog({
        dark: true,
        title: 'Alerta',
        message: 'Esta es una alerta.'
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    }

    function confirm () {
      $q.dialog({
        dark: true,
        title: 'Confirmación',
        message: '¿Desea apagar la laptop?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('>>>> OK')
      }).onOk(() => {
        console.log('>>>> second OK catcher')
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    }

    function prompt () {
      $q.dialog({
        dark: true,
        title: 'Prompt',
        message: 'Escribe tu nombre',
        prompt: {
          model: '',
          type: 'texto adicional opcional' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data)
        nombre.value = data 
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    }

    return { alert, confirm, prompt, nombre }

  }
})
</script>
