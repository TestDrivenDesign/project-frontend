import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
// import { faMen} from '@fortawesome/free-regular-svg-icons'
// import { fa } from '@fortawesome/free-brands-svg-icons';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

library.add(faCalendarDays, faUser, faBars);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
