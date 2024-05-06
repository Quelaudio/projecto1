import './assets/main.css'

import { createApp, isRuntimeOnly } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



import firebase from "firebase"

const firebaseConfig = {

  apiKey: "AIzaSyBoOGDg0EHcK0Sl7SAFLmzVt5klkrxF52o",

  authDomain: "base-dados-22e9e.firebaseapp.com",

  databaseURL: "https://base-dados-22e9e-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "base-dados-22e9e",

  storageBucket: "base-dados-22e9e.appspot.com",

  messagingSenderId: "489997038648",

  appId: "1:489997038648:web:576412f3eeae48574322cd",

  measurementId: "G-XEHKM0W8RB"

};
firebase.initializeApp(firebaseConfig)



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
