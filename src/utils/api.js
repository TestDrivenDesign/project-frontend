import axios from "axios";

const usersApi = axios.create({
  baseURL: 'http://localhost:3001'
});

export const postNewUser = (newUser) => {
  console.log(newUser);
  return usersApi.post(`/users`, {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password,
  }).then(({ config }) => {
    console.log(config.data);
  });
};