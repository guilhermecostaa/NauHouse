import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListProperties from '../views/ListProperties.vue'
import News from '../views/News/News.vue'
import New from '../views/News/New.vue'
import Contact from '../views/Contact.vue'
import Property from '../views/Property.vue'
import Consultants from '../views/Consultants/Consultants.vue'
import Perfil from '../views/Consultants/Perfil.vue'
import Contacts from '../views/Consultants/Contacts.vue'
import Login from '../views/Consultants/Login.vue'
import Agenda from '../views/Consultants/Agenda.vue'
import BackofficeNews from '../views/Backoffice/BackofficeNews.vue'
import BackofficeProperties from '../views/Backoffice/BackofficeProperties.vue'
import BackofficeUsers from '../views/Backoffice/BackofficeUsers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/list',
    name: 'ListProperties',
    component: ListProperties
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    children: [
      {
        path: "new/:id",
        name: "New",
        component: New,
      }
    ],
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/property/:id',
    name: 'Property',
    component: Property
  },
  {
    path: '/consultants',
    name: 'Consultants',
    component: Consultants,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/consultant/:id",
    name: "Perfil",
    component: Perfil,
    children: [
      {
        path: "contacts",
        name: "Contacts",
        component: Contacts,
      },
      {
        path: "agenda",
        name: "Agenda",
        component: Agenda,
      },
    ],
  },
  {
    path: "/backoffice/news",
    name: "BackofficeNews",
    component: BackofficeNews,
  },
  {
    path: "/backoffice/users",
    name: "BackofficeUsers",
    component: BackofficeUsers,
  },
  {
    path: "/backoffice/properties",
    name: "BackofficeProperties",
    component: BackofficeProperties,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
