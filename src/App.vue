<template>
  <v-app>
    <nav-bar :nav-links="navLinks"></nav-bar>
    <v-main v-scroll:#scroll-target="onScroll" id="scroll-target">
      <router-view />
    </v-main>
    <mod-footer></mod-footer>
  </v-app>
</template>

<script>
import navBar from "@/components/navigation/navBar.vue";
import modFooter from "@/components/navigation/modFooter.vue";

export default {
  name: "App",
  components: {
    navBar,
    modFooter,
  },
  data: () => ({
    navLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/About",
      },
      {
        name: "services",
        link: "/Services",
      },
      {
        name: "contact",
        link: "/Contacts",
      },
    ],
    offsetTop: 0,
  }),
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
};
</script>
