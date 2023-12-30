import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR1WidAnWBRcG3s_Yt98Plk7NqjBIDtQY",
  authDomain: "johnozoveheobansa.firebaseapp.com",
  projectId: "johnozoveheobansa",
  storageBucket: "johnozoveheobansa.appspot.com",
  messagingSenderId: "966368056617",
  appId: "1:966368056617:web:1b95232b3dfed904981338",
  measurementId: "G-FEL0GVCXS5"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

// export default analytics;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
getAnalytics(firebase_app);

