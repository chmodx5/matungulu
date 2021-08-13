<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <div v-if="$route.path != '/'">
        <v-parallax height="300" src="https://source.unsplash.com/j7tWLBlK9mk">
        
          <v-overlay light absolute color="secondary" opacity=".5">
            <v-container style="width:100vw" class="">
              <h1 class="text-h3 font-weight-black text-capitalize">
                {{ $route.name }} page
              </h1>
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
    offsetTop: 0,
  }),
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
};
</script>
