import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRegUsersStore = defineStore('registeredUsers', () => {
  const registeredUsers = ref([]);

  function addNewUser(newUser) {
    registeredUsers.value.push(newUser);
  }

  return { registeredUsers, addNewUser };
});