<template>
  <default-section
    title="testimonials"
    subtitle="Here is what some of our previous clients have to say about our services"
  >
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4" v-for="k in 3" :key="k" class="">
        <v-card outlined class="pa-6 py-9">
          <p style="font-style:italic !important">
            Dr. Douglas was very helpful and willing to answer all the questions
            and take the time to make suggestions. Thank you for your kindness
            and help.
          </p>
          <div class="d-flex ">
            <div>
              <v-img
                height="50"
                width="50"
                :aspect-ratio="1 / 1"
                src="@/assets/mask.jpg"
                style="border-radius: 50%;"
              ></v-img>
            </div>
            <div class="text-capitalize px-6">
              <p class=" font-weight-bold ma-0 secondary--text">
                else someone
              </p>
              <small>
                patient
              </small>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </default-section>
</template>

<script>
import mHeading from "@/components/mHeading.vue";
import defaultSection from "@/components/layouts/defaultSection.vue";

export default {
  name: "testimonials",
  components: {
    mHeading,
    defaultSection,
  },
};
</script>
