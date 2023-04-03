import axios from "axios";

const usersApi = axios.create({
  baseURL: 'https://test-server-for-greg.onrender.com'
});

export const postNewUser = (newUser) => {
  return usersApi.post(`/users/registration`, {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password,
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(({ data }) => {
    return data.userData;
  });
};

export const postUserLogin = (user) => {
  return usersApi.post(`/users/login`, {
    email: user.email,
    password: user.password,
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(({ data }) => {
    return data.userData;
  });
};

export const sendPhotoForAssesment = (user_id, date_of_birth, file) => {
  return usersApi.post('/users/assessment', {
    user_id,
    date_of_birth,
    file
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(({ data }) => {
    return data.assessment;
  });
};