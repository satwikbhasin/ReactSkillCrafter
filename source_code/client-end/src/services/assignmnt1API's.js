import axios from "axios";

export default function backendAddition(first, second) {
  return axios.get(`http://localhost:3001/add/${first}/and/${second}/`);
}
