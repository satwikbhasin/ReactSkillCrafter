import axios from "axios";

export default function backendAddition(first, second) {
  return axios.get(`${process.env.REACT_APP_BACKEND}/addition/add/${first}/and/${second}/`);
}
