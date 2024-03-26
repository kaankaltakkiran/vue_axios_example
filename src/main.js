//! vue instance oluşturma import
import { createApp } from 'vue'
import App from './App.vue'
//!import axios
import axios from 'axios'
//!import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//!import router
import router from './routes'
//!Vue instance oluşturma
const app=createApp(App);
//!axios kullanımı
app.use(axios);
//!router kullanımı
app.use(router);
//!app'i mount etme
app.mount('#app');
