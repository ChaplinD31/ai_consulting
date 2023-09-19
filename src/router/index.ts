import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/components/Pages/HomePage.vue'
import PublicationsPage from "@/components/Pages/PublicationsPage.vue";
import NewsPage from "@/components/Pages/NewsPage.vue";
import OfficesPage from "@/components/Pages/OfficesPage.vue";
import ServicesPage from "@/components/Pages/ServicesPage.vue";
import PartnersPage from "@/components/Pages/PartnersPage.vue";
import ContactsPage from "@/components/Pages/ContactsPage.vue";
import NotFound from "@/components/Pages/NotFound.vue";
import DataTrasformPage from "@/components/Pages/Services/DataTrasformPage.vue";
import TableDataAnalysePage from "@/components/Pages/Services/TableDataAnalysePage.vue";
import TextAnalysePage from "@/components/Pages/Services/TextAnalysePage.vue";
import VideoComparePage from "@/components/Pages/Services/VideoComparePage.vue";

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
    path: '/services/dataTransform',
    name: 'dataTransform',
    component: DataTrasformPage
  },
  {
    path: '/services/tableDataAnalyse',
    name: 'tableDataAnalyse',
    component: TableDataAnalysePage
  },
   {
    path: '/services/videoCompare',
    name: 'videoCompare',
    component: VideoComparePage
  },
  {
    path: '/services/textAnalyse',
    name: 'textAnalyse',
    component: TextAnalysePage
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
