import axios from "axios";
import backendLink from "../assets/backendLink";

export default function backendAddition(first, second) {
  return axios.get(`${backendLink}/addition/add/${first}/and/${second}/`);
}
