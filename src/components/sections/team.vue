<template>
  <colored-section section-heading="our team">
    <v-container>
      <v-row class="my-6">
        <v-col md="3" sm="6" cols="12" v-for="k in 4" :key="k">
          <v-card class="text-center">
            <v-img src="@/assets/mask.jpg" :aspect-ratio="1 / 1"> </v-img>
            <m-heading medium>
              dr. someon e. else
            </m-heading>
            <p class="my-2">general surgeon</p>
            <p class="my-2">
              <v-icon>mdi-home</v-icon>
              +254712345678
            </p>
            <p class="mt-2">
              somone.e.else@gmail.com
            </p>
            <p>
              <v-btn color="primary" text x-large>
                get in touch
              </v-btn>
            </p>
          </v-card>
        </v-col>
      </v-row>
      <p class="text-center">
        <v-btn x-large color="primary">
          view all team
        </v-btn>
      </p>
    </v-container>
  </colored-section>
</template>

<script>
import coloredSection from "@/components/layouts/coloredSection.vue";
import mHeading from "@/components/mHeading.vue";

export default {
  name: "team",
  components: {
    coloredSection,
    mHeading,
  },
};
</script>
