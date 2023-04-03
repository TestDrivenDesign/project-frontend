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
    <p class="error-msg" v-if="errorMsg">{{ errorMsg }}</p>
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
// import { useRegUsersStore } from '../stores/registeredUsers'
import { useUserStore } from '../stores/user'
import router from '../router/index'
import { postUserLogin } from '../utils/api'

// const usersRegister = useRegUsersStore()
// const { registeredUsers } = usersRegister

const user = useUserStore()
const { logUserIn } = user

const formData = ref({
  email: '',
  password: ''
})
const errorMsg = ref('')

const updateMsg = (message) => {
  errorMsg.value = message
}

const redirectPage = () => {
  router.push({ path: '/profile' })
}

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

// const loginUserFind = () => {
//   const loggedUser = registeredUsers.filter((user) => {
//     return user.email === formData.value.email && user.password === formData.value.password
//   })
//   if (loggedUser.length) {
//     return loggedUser[0]
//   } else {
//     updateMsg('Email or password incorrect!')
//   }
// }

const v$ = useVuelidate(rules, formData)

const submitLoginForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    const user = {
      email: formData.value.email,
      password: formData.value.password
    }
    postUserLogin(user)
      .then((loggedUser) => {
        const loginDetails = {
          user_id: loggedUser.user_id,
          first_name: loggedUser.first_name,
          last_name: loggedUser.last_name,
          email: loggedUser.email,
          date_of_birth: ''
        }
        redirectPage()
        logUserIn(loginDetails)
      })
      .catch((err) => {
        console.log(err)
        updateMsg('Email or password incorrect!')
      })
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
p.error-msg {
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
  background-color: #205295;
  border: 2px solid #205295;
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

@media (max-width: 480px) {
  .form-field.password {
    padding-bottom: 20px;
  }

  .form-field input {
    width: 95%;
  }
}
</style>
