import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap' asdfasd

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsGtjCFm1CQv1u3lrd24eUf0FLrOJiPAA",
  authDomain: "asdfadsfas.firebaseapp.com",
  projectId: "asdfadsfas",
  storageBucket: "asdfadsfas.appspot.com",
  messagingSenderId: "901281032604",
  appId: "1:901281032604:web:70bbc4bffb0e215bcf8059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { createRedux } from "./storePlugin";
import { store } from "./store";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(createRedux(store))
  .mount("#app");
