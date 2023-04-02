import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SkinformationView from '../views/SkinformationView.vue';
import HelpView from '../views/HelpView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import TakePhotoView from '../views/TakePhotoView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserProfileView from '../views/UserProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skinformation',
      name: 'skinformation',
      component: SkinformationView
    },
    {
      path: '/help',
      name: 'help&Support',
      component: HelpView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileView
    },
    {
      path: '/takephoto',
      name: 'takePhoto',
      component: TakePhotoView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
});

export default router;
