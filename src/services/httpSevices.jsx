import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const http = {
  Get: axios.get,
  Post: axios.post,
  Put: axios.put,
  Delete: axios.delete,
};

export default http;
