import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/WelcomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import ContactsPage from "@/components/ContactsPage.vue";
import CatalogPage from "@/components/CatalogPage.vue";
import CartPage from "@/components/CartPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsPage,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogPage,
    },
        {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
  ],
});

export default router;
