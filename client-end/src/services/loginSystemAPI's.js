import axios from "axios";

export const loginAPI = (email, password) => {
  return axios.post(`${process.env.REACT_APP_BACKEND}/users/login/`, {
    email: email,
    password: password,
  });
};

export const signUpAPI = (firstName, lastName, email, password) => {
  return axios.post(`${process.env.REACT_APP_BACKEND}/users/signup/`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};
