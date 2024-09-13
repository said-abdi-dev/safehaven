import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/styles.css'; 

import Home from './components/HeroSection.vue';
import AboutUs from './components/AboutUsSection.vue';
import Services from './components/ServicesPage.vue';
import ContactUs from './components/ContactUsSection.vue';
import FAQPage from './components/FAQPage.vue'; 
import Referral from './components/ClientReferralForm.vue' // Import the new FAQ page component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/contact', component: ContactUs },
  { path: '/faq', component: FAQPage },
  { path: '/referral', component: Referral }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
