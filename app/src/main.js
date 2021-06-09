import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import VueSweetalert2 from 'vue-sweetalert2';
import ToggleButton from 'vue-js-toggle-button';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import VueSwal from 'vue-swal'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import * as VueGoogleMaps from 'vue2-google-maps';

import{ init } from 'emailjs-com';
init("user_ERkgj4TuWJz3216R2nMuM");

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const http = axios.create({
  baseURL: "http://localhost:3000",
});

Vue.prototype.$http = http

Vue.use(VueSwal)
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ToggleButton);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(VueSplide);
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
