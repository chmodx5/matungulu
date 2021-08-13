<template>
  <v-footer color="secondary lighten-1" padless dark class="pt-16 flex-column">
    <v-container class="pa-0">
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
    </v-container>
    <v-row style="width:100%" justify="center" class="secondary" no-gutters>
      <v-col class=" py-4 text-center white--text" cols="12">
        <div class="d-flex justify-center">
          <router-link to="/" style="text-decoration: none;">
            <v-sheet color="transparent" width="auto" class=" mt-3">
              <v-img
                class="mx-auto"
                src="@/assets/chmod.png"
                height="20"
                width="20"
              >
              </v-img>
              <div>
                <p class="ma-0">
                  ChMod Websites Kenya
                </p>
                <small>
                  <v-icon small>mdi-copyright</v-icon>
                  {{ new Date().getFullYear() }}
                </small>
              </div>
            </v-sheet>
          </router-link>
        </div>
        <span class="teal lighten-3"> </span>
      </v-col>
    </v-row>
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
