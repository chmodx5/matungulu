import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },

  {
    path: "/contacts",
    name: "Contact Us",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/services/:id?",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/appointment/:ffsdd?",
    name: "Appointment",
    component: () => import("../views/Appointment.vue"),
  },

  {
    path: "/faq",
    name: "FAQ",
    component: () => import("../views/faq.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
