import axios from "axios";

export default function backendAddition(first, second) {
  return axios.get(`http://localhost:3001/addition/add/${first}/and/${second}/`);
}
