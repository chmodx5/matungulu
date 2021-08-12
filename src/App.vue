<template>
  <v-app>
    <nav-bar :nav-links="navLinks"></nav-bar>
    <v-main>
      <div v-if="$route.path != '/'">
        <v-parallax height="300" src="https://source.unsplash.com/j7tWLBlK9mk">
          <v-overlay light absolute color="secondary" opacity=".5">
            <v-container style="width:100vw" class="">
              <h1 class="text-h3 font-weight-black text-capitalize">
                {{ $route.name }} page
              </h1>
              <p class="text-decoration-underline">{{ $route.path }}</p>
            </v-container>
          </v-overlay>
        </v-parallax>
      </div>
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
