import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

require('./assets/style/style.scss');

createApp(App).use(store).use(router).mount('#app');
