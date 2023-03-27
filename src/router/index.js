import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SkinformationView from '../views/SkinformationView.vue';
import GetSupportView from '../views/GetSupportView.vue';
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
      path: '/support',
      name: 'getSupport',
      component: GetSupportView
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
