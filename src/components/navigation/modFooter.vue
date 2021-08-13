<template>
  <v-footer color="secondary lighten-1" padless dark class="pt-16">
    <v-container>
      <v-row class="">
        <v-col cols="12" sm="6" md="4">
          <m-heading medium>
            about us
          </m-heading>
          <br />
          <p>
            We offer round-the-clock inpatient, outpatient, laboratory and
            maternity services. We are a recognized and highly acclaimed level
            three medical facility in the region serving the community as well
            as institutional clients
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <m-heading medium>
            quick links
          </m-heading>
          <br />
          <div class="">
            <v-btn
              v-for="route in $router.options.routes"
              :key="route.path"
              :to="route.path"
              color="white"
              text
              small
              class="my-0"
            >
              {{ route.name }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <m-heading medium>
            contact information
          </m-heading>
          <br />
          <p class="text-capitalize">
            tala market, matungulu district, machakos county
          </p>
          <p>
            1-800-1324-765, 1-800-7653-098
          </p>
          <p>
            info@demolink.org
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col class=" py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }}
          <div class="d-flex justify-center">
            <router-link to="/" style="text-decoration: none;">
              <v-sheet
                height="50"
                width="150"
                class="d-flex align-center justify-center mt-3"
                shaped
                color="grey darken-4"
                elevation="3"
                outlined
              >
                <m-heading large>
                  <span class="teal--text">Ch</span><span>Mod</span
                  ><span class="teal--text">.</span>
                </m-heading>
              </v-sheet>
            </router-link>
          </div>
          <span class="teal lighten-3"> </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import mHeading from "@/components/mHeading.vue";

export default {
  name: "modFooter",
  components: {
    mHeading,
  },
  data: () => ({
    links: [
      {
        title: "home",
        link: "/",
      },
      "Home",
      "About Us",
      "Team",
      "Services",
      "Blog",
      "Contact Us",
    ],
  }),
};
</script>
