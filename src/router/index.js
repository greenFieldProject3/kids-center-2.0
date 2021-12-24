import { createRouter, createWebHistory } from 'vue-router';
import Home     from '../components/Home.vue';
import SignIn   from '../components/SignIn.vue' ;
import SignUp   from '../components/SignUp.vue';
import About    from '../components/About.vue';
import Forum    from '../components/Forum.vue';
import Services from '../components/Services.vue';
import Contact  from '../components/Contact.vue'
import Admin    from '../components/Admin.vue';

const routes = [
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/forum/:id',
    component: Forum
  },
  {
    path: '/signin',
    component: SignIn 
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/admin/index',
    component: Admin
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
