import axios from "axios";

export const loginAPI = (email, password) => {
  return axios.post("http://localhost:3001/users/login/", {
    email: email,
    password: password,
  });
};

export const signUpAPI = (firstName, lastName, email, password) => {
  return axios
    .post("http://localhost:3001/users/signup/", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
};
