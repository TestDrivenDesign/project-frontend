import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const login = ref({
    user_id: 1,
    first_name: 'Greg',
    last_name: 'M',
    email: 'gm@gmail.com'
  });
  const isUserLoggedIn = ref(false);

  // const pageRedirect = computed((isUserLoggedIn) => {
  //   if (isUserLoggedIn) {
  //     return '/profile';
  //   } else {
  //     return '/';
  //   }
  // });

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