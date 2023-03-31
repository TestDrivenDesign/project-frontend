import axios from "axios";

const usersApi = axios.create({
  baseURL: 'http://localhost:3001'
});

export const postNewUser = (newUser) => {
  // console.log(newUser);
  return usersApi.post(`/users`, {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password,
  }).then(({ config }) => {
    console.log(config.data);
  });
};

export const sendPhotoForAssesment = (user_id, date_of_birth, file) => {
  // console.log(user_id, date_of_birth, file);
  return usersApi.post('/...', {
    user_id,
    date_of_birth,
    file
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    console.log(response);
  });
};