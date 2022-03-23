import axios from "axios";
const instance = axios.create();

instance.defaults.headers.common["Authorization"] =
  "Token ca59e5bf618265e51f738c590596d62b867bba0c9e6b610f3da4b58bd09dd5b0";

export default instance;
