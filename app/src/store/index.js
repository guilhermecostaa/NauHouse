import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

const axiosConfig = {
  baseURL: "http://localhost:3000",
}

const HTTP = axios.create(axiosConfig)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: "",
    loggedUser: {},
    addnew: "",
    addContact: "",
    addUser: "",
    addProperty: ""
  },
  getters: {
    getJwtToken: state => state.jwt,
    getLoggedUser: state => state.loggedUser,
  },
  mutations: {
    SIGN_IN: (state, payload) => state.loggedUser = payload,
    SET_JWT_TOKEN: (state, jwt) => state.jwt = jwt,
    LOAD_LOGGED_USER: (state, payload) => state.loggedUser = payload,
    SET_AUTH_HEADERS: state => {
      HTTP.defaults.headers.common["Authorization"] = "Bearer " + state.jwt
    },
    SIGN_OUT: state => {
      delete HTTP.defaults.headers.common["Authorization"]
      state.jwt = ""
      state.loggedUser = {}
    },
    ADD_NEW: (state, addnew) => state.addnew = addnew,
    DELETE_NEW: (state, addnew) => state.addnew = addnew,
    EDIT_NEW: (state, addnew) => state.addnew = addnew,
    ADD_CONTACT: (state, addContact) => state.addContact = addContact,
    EDIT_CONTACT: (state, addContact) => state.addContact = addContact,
    DELETE_CONTACT: (state, addContact) => state.addContact = addContact,
    ADD_USER: (state, addUser) => state.addUser = addUser,
    DELETE_USER: (state, addUser) => state.addUser = addUser,
    ADD_PROPERTY: (state, addProperty) => state.addProperty = addProperty,
    DELETE_PROPERTY: (state, addProperty) => state.addProperty = addProperty,
  },
  actions: {
  },
  modules: {
  }
})
