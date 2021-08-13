<template>
  <default-section
    title="testimonials"
    subtitle="Here is what some of our previous clients have to say about our services"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="4"
        v-for="(testimonial, i) in testimonials"
        :key="i"
      >
        <testimonials-card
          :testimonial="testimonial.testimonial"
          :img="testimonial.img"
          :name="testimonial.name"
          :title="testimonial.title"
        ></testimonials-card>
      </v-col>
    </v-row>
  </default-section>
</template>

<script>
import mHeading from "@/components/mHeading.vue";
import defaultSection from "@/components/layouts/defaultSection.vue";
import testimonialsCard from "@/components/testimonialsCard.vue";
export default {
  name: "testimonials",
  data: () => ({
    testimonials: [
      {
        testimonial:
          "The doctors have always been willing to answer any question I had, had time to make suggestions and were very helpful before and after I delieredmy child.Thank you for your kindness and help",
        img: "hero/maternity3.jpeg",
        name: "Margaret",
        title: "patient",
      },
    ],
  }),
  components: {
    mHeading,
    defaultSection,
    testimonialsCard,
  },
};
</script>
