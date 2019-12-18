import axios from "axios";
import { THROW_ERROR } from "@store/actions/errors";
import store from "@store";

var api = axios.create({
  // baseURL: "http://localhost:8080/overlook"
  baseURL: "/api/overlook"
});

api.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    store.commit(THROW_ERROR, error);
    return Promise.reject(error);
  }
);

export const Api = api;
