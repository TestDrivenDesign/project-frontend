<template>
  <form class="form" @submit.prevent="submitRegisterForm">
    <div class="register-field">
      <label for="first-name">First Name: </label>
      <input id="first-name" name="first-name" type="text" v-model="formData.first_name" />
      <small class="error" v-for="error in v$.first_name.$errors" :key="error.$uid">
        {{ error.$message }}
      </small>
    </div>
    <div class="register-field">
      <label for="last-name">Last Name: </label>
      <input id="last-name" name="last-name" type="text" v-model="formData.last_name" />
      <small class="error" v-for="error in v$.last_name.$errors" :key="error.$uid">
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
    <div class="register-field password">
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
    <p class="success-msg" v-if="successMsg">{{ successMsg }}</p>
    <p class="error-msg" v-else-if="errorMsg">{{ errorMsg }}</p>
    <button>Register</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
// import { useRegUsersStore } from '../stores/registeredUsers'
import { useUserStore } from '../stores/user'
import router from '../router/index'
import { postNewUser } from '../utils/api'

// const usersRegister = useRegUsersStore()
// const { addNewUser, registeredUsers } = usersRegister

const user = useUserStore()
const { logUserIn } = user

const passwordRegx = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number

const formData = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  passwordConfirm: ''
})
const successMsg = ref('')
const errorMsg = ref('')

// const isUserRegistered = () => {
//   const userExist = registeredUsers.some((user) => {
//     return user.email === formData.value.email
//   })

//   return userExist
// }
const redirectPage = () => {
  router.push({ path: '/profile' })
}

const updateMsg = (result, message) => {
  if (result === 'error') {
    errorMsg.value = message
  } else if (result === 'success') {
    successMsg.value = message
  }
}

const rules = computed(() => {
  return {
    first_name: {
      required: helpers.withMessage('First Name is required field', required),
      minLength: helpers.withMessage('First Name must be at least 3 characters long', minLength(3))
    },
    last_name: {
      required: helpers.withMessage('Last Name is reuired field', required),
      minLength: helpers.withMessage('Last Name must be at least 3 characters long', minLength(3))
    },
    email: {
      required: helpers.withMessage('Email is required field', required),
      email: helpers.withMessage('Not a valid email address', email)
    },
    password: {
      reuired: helpers.withMessage('Password is required field', required),
      passwordCheck: helpers.withMessage(
        'Password must be minimum 8 characters, have one uppercase letter, one lowercase letter and a number',
        passwordRegx
      )
    },
    passwordConfirm: {
      // required: helpers.withMessage('Please type your password again', required),
      sameAs: helpers.withMessage("Passwords don't match!", sameAs(formData.value.password))
    }
  }
})

const v$ = useVuelidate(rules, formData)

const submitRegisterForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    postNewUser(formData.value)
      .then((newUser) => {
        const loginDetails = {
          user_id: newUser.user_id,
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          date_of_birth: ''
        }
        logUserIn(loginDetails)
        redirectPage()
        updateMsg('success', 'Registration successfull')
        formData.value.firstName = ''
        formData.value.lastName = ''
        formData.value.email = ''
        formData.value.password = ''
        formData.value.passwordConfirm = ''
      })
      .catch((err) => {
        console.log(err)
        updateMsg('error', 'This email already exist!')
      })
  }
}
</script>

<style scoped>
.register-field {
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.register-field.password {
  padding-bottom: 30px;
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

.form .success-msg {
  color: #4bb543;
}
.form .error-msg {
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

@media (max-width: 480px) {
  .register-field.password {
    padding-bottom: 20px;
  }

  .register-field input {
    width: 95%;
  }
}
</style>
