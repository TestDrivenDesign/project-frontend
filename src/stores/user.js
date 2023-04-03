import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const login = ref({
    user_id: 1,
    first_name: 'Greg',
    last_name: 'M',
    email: 'gm@gmail.com',
    date_of_birth: ''
  });
  const isUserLoggedIn = ref(true);
  const diagnosisPhotoPath = ref('');
  const assesmentValue = ref(null);

  function logUserIn(userObject) {
    login.value = userObject;
    if (login.value.email !== '') {
      isUserLoggedIn.value = true;
    }
  }

  function setDiagnosisPhotoPath(newPath) {
    diagnosisPhotoPath.value = newPath;
  }

  function logUserOut() {
    login.value = '';
    isUserLoggedIn.value = false;
  }

  function addDateOfBirth(newDate) {
    login.value.date_of_birth = newDate;
  }

  function setAssesmentValue(valueFromDatabase) {
    assesmentValue.value = valueFromDatabase;
  }

  return { login, isUserLoggedIn, logUserIn, logUserOut, addDateOfBirth, setDiagnosisPhotoPath, diagnosisPhotoPath, assesmentValue, setAssesmentValue };
});

    // const doubleCount = computed((isUserLoggedIn) => {
    //   if (login.value) {
    //     isUserLoggedIn.value = true;
    //   }
    // });