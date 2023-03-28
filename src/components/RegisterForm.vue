<template>
  <form class="form" @submit.prevent="submitRegisterForm">
    <div class="register-field">
      <label for="first-name">First Name: </label>
      <input id="first-name" name="first-name" type="text" v-model="formData.firstName" />
      <small class="error" v-for="error in v$.firstName.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="register-field">
      <label for="last-name">Last Name: </label>
      <input id="last-name" name="last-name" type="text" v-model="formData.lastName" />
      <small class="error" v-for="error in v$.lastName.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="register-field">
      <label for="email">Email: </label>
      <input id="email" name="email" type="email" v-model="formData.email" />
      <small class="error" v-for="error in v$.email.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="register-field">
      <label for="password">Password: </label>
      <input id="password" name="password" type="password" v-model="formData.password" />
      <small class="error" v-for="error in v$.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="register-field">
      <label for="password-confirm">Confirm Password: </label>
      <input
        id="password-confirm"
        name="password-confirm"
        type="password"
        v-model="formData.passwordConfirm"
      />
      <small class="error" v-for="error in v$.passwordConfirm.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <button>Register</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('First Name is required field', required),
      minLength: helpers.withMessage('First Name must be at least 3 characters long', minLength(3))
    },
    lastName: {
      required: helpers.withMessage('Last Name is reuired field', required),
      minLength: helpers.withMessage('Last Name must be at least 3 characters long', minLength(3))
    },
    email: {
      required: helpers.withMessage('Email is required field', required),
      email: helpers.withMessage('Not a valid email address', email)
    },
    password: {
      reuired: helpers.withMessage('Password is required field', required),
      minLength: helpers.withMessage('Password must be at least 6 characters long', minLength(6))
    },
    passwordConfirm: {
      required: helpers.withMessage('Please type your password again', required),
      sameAs: helpers.withMessage("Passwords don't match!", sameAs(formData.value.password))
    }
  }
})

const v$ = useVuelidate(rules, formData)

const submitRegisterForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    console.log(formData.value)
  }
}
</script>

<style scoped>
.register-field {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 20px;
}

.register-field label {
  display: block;
  color: #777;
  margin-bottom: 5px;
}

.register-field input {
  display: block;
  width: 100%;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
}

.register-field input:focus {
  outline-color: #777;
}

.register-field small {
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
</style>
