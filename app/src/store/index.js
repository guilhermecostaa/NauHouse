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
    addProperty: "",
    addEvent: "",
    category: "",
    purpose: "",
    district: "",
    bedrooms: ""
  },
  getters: {
    getJwtToken: state => state.jwt,
    getLoggedUser: state => state.loggedUser,
    getCategory: state => state.category,
    getPurpose: state => state.purpose,
    getDistrict: state => state.district,
    getBedrooms: state => state.bedrooms,
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
    EDIT_PROPERTY: (state, addProperty) => state.addProperty = addProperty,
    ADD_EVENT: (state, addEvent) => state.addEvent = addEvent,
    EDIT_EVENT: (state, addEvent) => state.addEvent = addEvent,
    DELETE_EVENT: (state, addEvent) => state.addEvent = addEvent,
    ADD_CATEGORY: (state, category) => state.category = category,
    DELETE_CATEGORY: (state, category) => state.category = category,
    ADD_PURPOSE: (state, purpose) => state.purpose = purpose, 
    DELETE_PURPOSE: (state, purpose) => state.purpose = purpose,
    ADD_DISTRICT: (state, district) => state.district = district,
    DELETE_DISTRICT: (state, district) => state.district = district,
    ADD_BEDROOMS: (state, bedrooms) => state.bedrooms = bedrooms,
    DELETE_BEDROOMS: (state, bedrooms) => state.bedrooms = bedrooms,
  },
  actions: {
  },
  modules: {
  }
})
