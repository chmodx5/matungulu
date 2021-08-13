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
          <v-col md="4" class="flex-grow-1 d-flex">
            <hero-card title="Opening Hours">
              <!-- hero content here -->
              <div class="d-flex justify-space-between">
                <p mb-3>
                  Monday - Saturday
                </p>
                <p>
                  Open
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p>
                  Sundays
                </p>
                <p>
                  Open
                </p>
              </div>
              <div class="d-flex justify-space-between">
                <p>
                  Public Holidays
                </p>
                <p>
                  Open
                </p>
              </div>
            </hero-card>
          </v-col>
          <v-col md="4" class="flex-grow-1 d-flex">
            <hero-card
              title="Specialist Services"
              btntext="click me"
              btnlink="/"
            >
              <!-- hero content here -->
              <p text-h4 mb-3>
                Optical, Dental and Physiotherapy Services.
              </p>
              <p>
                Available on Appointment on Tuesdays and Fridays.
              </p>
            </hero-card>
          </v-col>
          <v-col md="4" class="flex-grow-1 d-flex">
            <hero-card
              title="Emergency Cases"
              btntext="click me"
              btnlink="/contacts"
            >
              <p mb-3>
                Call us at 0700 631 291
              </p>
              <p>
                Or our office at 0738 669 259
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
