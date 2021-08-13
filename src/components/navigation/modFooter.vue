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
            Matungulu Medical Health and Wellness Centre is an NHIF accredited
            17-bed private medical facility situated in the heart of Tala
            Market, well placed to serve both Kangundo and Matungulu Districts
          </p></v-col
        >

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
            0700 631 291 / 0738 669 259
          </p>
          <p>
            info@matungulumedical.co.ke / complaints@matungulumedical.co.ke
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col class=" py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }}
          <p>
            ChMod Websites Kenya
          </p>
          <div class="d-flex justify-center">
            <router-link to="/" style="text-decoration: none;">
              <v-sheet
                height="60"
                width="60"
                class="d-flex align-center justify-center mt-3"
                elevation="3"
              >
                <v-img src="@/assets/chmod.png" height="60" width="60"> </v-img>
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
