import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },

  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: () => import("../views/Appointment.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/faq.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
