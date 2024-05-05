import axios from "axios";

const backendAddition = async (first, second) => {
  return await axios.get(`${process.env.REACT_APP_BACKEND}/addition/add/${first}/and/${second}/`);
}

export default backendAddition;
