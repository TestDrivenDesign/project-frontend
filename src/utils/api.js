import axios from "axios";

const usersApi = axios.create({
  baseURL: 'http://ec2-13-51-251-17.eu-north-1.compute.amazonaws.com'
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
    console.log(data.user);
    return data.user[0];
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
    return data.user;
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
export const getAllDiagnoses = (user_id) => {
  return usersApi.post('/users/diagnoses', {
    user_id
  }).then(({ data }) => {
    return data.diagnoses;
  });
};