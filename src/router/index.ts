import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CalendarPage from '../pages/CalendarPage.vue';
import JournalPage from '../pages/JournalPage.vue';
import BenefitsPage from '../pages/BenefitsPage.vue';
import RewardsPage from '../pages/RewardsPage.vue';
import LoginPage from '../pages/LoginPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage,
  },
  {
    path: '/journal',
    name: 'Journal',
    component: JournalPage,
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: BenefitsPage,
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: RewardsPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;