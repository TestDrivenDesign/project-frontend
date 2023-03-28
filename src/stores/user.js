import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const login = ref({
    firstName: 'Greg',
    lastName: 'Doe',
    email: 'gregdoe@gmail.com'
  });
  const isUserLoggedIn = ref(false);
  function logUserIn(userObject) {
    login.value = userObject;
    if (login.value.email !== '') {
      isUserLoggedIn.value = true;
    }
  }

  function logUserOut() {
    login.value = '';
    isUserLoggedIn.value = false;
  }

  return { login, isUserLoggedIn, logUserIn, logUserOut };
});

    // const doubleCount = computed((isUserLoggedIn) => {
    //   if (login.value) {
    //     isUserLoggedIn.value = true;
    //   }
    // });