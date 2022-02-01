import axios from "axios";

export default axios.create({
  baseURL: 'https://parseapi.back4app.com',
  headers: {
    "X-Parse-Application-Id": "Uxu3E9Tj66dZlXhmULamLNmKwO1pLol4m7cGJfBp",
    "X-Parse-REST-API-Key": "urlzciZGl7FPTQaa3KZ4LasSAt40ZR9gI7WXeaHX",
    "Content-Type": "application/json",
  }
});