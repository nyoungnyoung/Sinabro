import axios from "axios";

// local : http://localhost:5000
// 서버 : https://i8d203.p.ssafy.io/api

export default axios.create({
  baseURL: "https://i8d203.p.ssafy.io/api",
});
