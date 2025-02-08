import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import './assets/css/vendor.min.css'
import './assets/css/app.min.css'


import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// import axios from "axios";
// axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem("accessToken");
// axios.defaults.headers.common['Client-Id'] = 'client_web';

const app = createApp(App)

// app.config.globalProperties.baseURL = process.env.VUE_APP_BASE_URL
app.use(bootstrap)
app.use(router)
app.mount('#app')
