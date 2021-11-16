<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Formulario</span>
    
    <q-separator spaced />

    <div class="row justify-center">
      
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
        >
          <q-input
            filled
            v-model="userForm.email"
            label="Correo electrónico"
            hint="Correo electrónico válido"
            type="email"
            lazy-rules
            no-error-icon
            :rules="[ 
              val => val && val.length > 0 || 'Por favor escriba un correo electrónico válido',
              isValidEmail
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password1"
            label="Contraseña"
            lazy-rules
            no-error-icon
            :rules="[ val => val && val.length > 0 || 'Por favor escriba una contraseña']"
          />

          <q-input
            filled
            type="password"
            v-model="userForm.password2"
            label="Repetir Contraseña"
            lazy-rules
            no-error-icon
            :rules="[ 
              val => val && val.length > 0 || 'Por favor escriba una contraseña',
              isSamePassword
            ]"
          />

          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
          <q-checkbox v-model="userForm.conditions" 
                      label="Acepto términos y condiciones"
                      :style="userForm.errorConditions 
                              && !userForm.conditions
                              && 'color: red'" 
          />

          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Formulario',
  setup() {

    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorConditions: false
    })

    const $q = useQuasar()

    return {
      userForm,
      onSubmit () {
        userForm.value.errorConditions = false
        if (!userForm.value.conditions) {

          $q.notify({
            message: 'Se debe aceptar términos y condiciones',
            color: 'red',
            icon: 'las la-skull-crossbones'
          })

          userForm.value.errorConditions = true
          return
        }
        console.log(userForm.value)
      },
      onReset () {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorConditions: false
        }
      },
      isValidEmail( val ) {
        const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || 'El correo no parece ser válido';
      },
      isSamePassword(val) {
        return (val === userForm.value.password1) || 'Las contraseñas no son iguales.'
      }
    }
  }
})
</script>
