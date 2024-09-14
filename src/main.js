import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/styles.css'; // Import your global styles

// Import components for routing
import Home from './components/HeroSection.vue';
import AboutUs from './components/AboutUsSection.vue';
import Services from './components/ServicesPage.vue';
import ContactUs from './components/ContactUsSection.vue';
import FAQPage from './components/FAQPage.vue';
import Referral from './components/ClientReferralForm.vue'; // Import referral form

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/contact', component: ContactUs },
  { path: '/faq', component: FAQPage },
  { path: '/referral', component: Referral },
];

// Create Vue Router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restore scroll position if available (e.g., when using back/forward)
    } else {
      return { top: 0 }; // Scroll to top when navigating to a new page
    }
  },
});

// Create and mount the Vue app
const app = createApp(App);
app.use(router);
app.mount('#app');
