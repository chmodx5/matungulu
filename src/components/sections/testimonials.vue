<template>
  <default-section
    title="testimonials"
    subtitle="Here is what some of our previous clients have to say about our services"
  >
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4" v-for="k in 3" :key="k" class="">
        <v-card hover outlined class="pa-6 py-9">
          <p style="font-style:italic !important">
            The doctors have always been willing to answer any question I had,
            had time to make suggestions and were very helpful before and after
            I deliered my child.Thank you for your kindness and help.
          </p>
          <div class="d-flex ">
            <div>
              <v-img
                height="50"
                width="50"
                :aspect-ratio="1 / 1"
                src="@/assets/img/hero/maternity3.jpg"
                style="border-radius: 50%;"
              ></v-img>
            </div>
            <div class="text-capitalize px-6">
              <p class=" font-weight-bold ma-0 secondary--text">
                Margaret
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
