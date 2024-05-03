import axios from "axios";
import backendLink from "../assets/backendLink";

export const loginAPI = (email, password) => {
  return axios.post(`${backendLink}/users/login/`, {
    email: email,
    password: password,
  });
};

export const signUpAPI = (firstName, lastName, email, password) => {
  return axios.post(`${backendLink}/users/signup/`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};
