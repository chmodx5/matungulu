<template>
  <div class="pb-9">
    <v-card elevation="2" tile flat height="600" class=" ">
      <v-carousel
        :continuous="true"
        :cycle="true"
        :show-arrows="true"
        hide-delimiter-background
        hide-delimiters
        delimiter-icon="mdi-minus"
        height="100%"
      >
        <!-- slider -->
        <v-carousel-item v-for="(heroslide, k) in heroslides" :key="k">
          <v-img
            :src="require(`@/assets/img/${heroslide.img}`)"
            height="100%"
            class="d-flex align-center"
          >
            <v-overlay absolute color="secondary">
              <v-container style="width:100vw">
                <v-row style="">
                  <v-col md="8">
                    <h1 class="text-h2 font-weight-black">
                      {{ heroslide.title }}
                    </h1>
                    <br />
                    <h6 class="text-h6">
                      {{ heroslide.subtitle }}
                    </h6>

                    <br />

                    <p>
                      <v-btn
                        :to="heroslide.btnlink"
                        tile
                        large
                        class="font-weight"
                        color="secondary"
                        >{{ heroslide.btntext }}</v-btn
                      >
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-overlay>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-container>
      <v-card flat tile color="transparent" class="mt-n16 mx-auto ">
        <v-row class="d-flex">
          <v-col cols="12" md="4" class="flex-grow-1 d-flex">
            <hero-card title="Opening Hours">
              <!-- hero content here -->
              <div class="d-flex justify-space-between">
                <p mb-3>
                  We are open 24 Hours a day, 7 days a week.
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="font-weight-bold text-h6">
                  Visiting Hours
                </p>
              </div>
              <div class="d-flex justify-space-between ma-0">
                <p class="ma-0">
                  Morning
                </p>
                <p class="ma-0">
                  6.00AM to 7.30AM
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="ma-0">
                  Afternoon
                </p>
                <p class="ma-0">
                  12.30PM to 02.30PM
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="ma-0">
                  Evening
                </p>
                <p class="ma-0">
                  04.30PM to 7.00PM
                </p>
              </div>
            </hero-card>
          </v-col>
          <v-col cols="12" md="4" class="flex-grow-1 d-flex">
            <hero-card
              title="Specialist Services"
              btntext="Book now!"
              btnlink="/appointment"
            >
              <!-- hero content here -->
              <p text-h4 mb-3>
                Optical and Dental Services.
              </p>
              <p>
                Available only on Appointment on Tuesdays and Fridays.
              </p>
            </hero-card>
          </v-col>
          <v-col cols="12" md="4" class="flex-grow-1 d-flex">
            <hero-card
              title="Emergency Cases"
              btntext="Contacts"
              btnlink="/contacts"
            >
              <p mb-3>
                Call us at 0700 631 291
              </p>
            </hero-card>
            <!-- hero content here -->
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import mHeading from "@/components/mHeading.vue";
import heroCard from "@/components/heroCard.vue";
export default {
  name: "hero",
  components: {
    mHeading,
    heroCard,
  },
  data: () => ({
    heroslides: [
      {
        title: "Passion for Caring",
        subtitle:
          "We aim to make your life better, letting you and your family live the life you want",
        img: "hero/carousel1.jpeg",
        btntext: "book appointment",
        btnlink: "/appointment",
      },
      {
        title: "COVID-19 is real!",
        subtitle:
          "Remember to always wear a mask, sanitize or wash your hands with soap regularly and keep social distance.",
        img: "hero/corona1.jpeg",
        btntext: "about us",
        btnlink: "/about",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
