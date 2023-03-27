<template>
  <form class="form" @submit.prevent="submitLoginForm">
    <div class="form-field">
      <label for="email">Email: </label>
      <input id="email" type="email" v-model="formData.email" />
      <small class="error" v-for="error in v$.email.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="form-field">
      <label for="password">Password: </label>
      <input id="password" type="password" v-model="formData.password" />
      <small class="error" v-for="error in v$.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <button type="submit">Login</button>
  </form>
  <p class="register-msg">
    Not Registered yet?: <RouterLink to="register">Register Here</RouterLink>
  </p>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const formData = ref({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email is required field', required),
      email: helpers.withMessage('Not a valid email address', email)
    },
    password: {
      reuired: helpers.withMessage('Password is required field', required),
      minLength: helpers.withMessage('Password must be at least 6 characters long', minLength(6))
    }
  }
})

const v$ = useVuelidate(rules, formData)

const submitLoginForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    console.log(formData.value)
  } else {
    console.log('form not submitted')
  }
}
</script>

<style scoped>
.form-field {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 20px;
}

.form-field label {
  display: block;
  color: #777;
  margin-bottom: 5px;
}

.form-field input {
  display: block;
  width: 100%;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
}

.form-field input:focus {
  outline-color: #777;
}

.form-field small.error {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #e74c3c;
}

.form button {
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  color: #fff;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
}

.register-msg {
  margin-top: 10px;
  color: #777;
}
.register-msg a {
  text-decoration: none;
  color: #000;
}
.register-msg a:hover {
  text-decoration: underline;
}
</style>
