import axios from "axios";

const instance = axios.create({
  baseURL: "https://web-weekly-friends-generator.onrender.com",
});
export default instance;
