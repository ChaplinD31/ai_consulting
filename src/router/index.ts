import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/components/Pages/HomePage.vue'
import PublicationsPage from "@/components/Pages/PublicationsPage.vue";
import NewsPage from "@/components/Pages/NewsPage.vue";
import OfficesPage from "@/components/Pages/OfficesPage.vue";
import ServicesPage from "@/components/Pages/ServicesPage.vue";
import PartnersPage from "@/components/Pages/PartnersPage.vue";
import ContactsPage from "@/components/Pages/ContactsPage.vue";
import NotFound from "@/components/Pages/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/news/:id',
    name: 'news_item',
    component: NewsPage
  },
  {
    path: '/offices',
    name: 'offices',
    component: OfficesPage
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage
  },
  {
    path: '/partners',
    name: 'partners',
    component: PartnersPage
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationsPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
