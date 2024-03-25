import { createApp } from 'vue'
import App from './App.vue'
//!import axios
import axios from 'axios'
//!import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './routes'

const app=createApp(App)
app.use(axios);
app.use(router);
app.mount('#app');
