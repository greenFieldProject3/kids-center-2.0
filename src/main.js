import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
import mitt from 'mitt'

const EventBus = mitt();
const app = createApp(App);
app.provide('EventBus', EventBus);
app.use(router);
app.mount('#app');

// createApp(App).use(router).mount('#app')
