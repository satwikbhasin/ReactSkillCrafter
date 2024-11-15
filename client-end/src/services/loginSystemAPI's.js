import axios from "axios";

export const loginAPI = (email, password) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login/`, {
    email: email,
    password: password,
  });
};

export const signUpAPI = (firstName, lastName, email, password) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup/`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};
