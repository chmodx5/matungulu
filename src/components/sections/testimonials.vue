<template>
  <default-section title="what our clients say">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="4"
        v-for="(testimonial, i) in testimonials"
        :key="i"
        class="d-flex"
      >
        <testimonials-card
          :testimonial="testimonial.testimonial"
          :img="testimonial.img"
          :name="testimonial.name"
          :title="testimonial.title"
          class="flex-grow-1"
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
          " I have been a client at MATUNGULU MEDICAL HEALTH AND WELLNESS CENTRE for over 5 years today and counting. Matungulu Medical is my health facility of choice for their reliability, affordability and compassion always exhibited by the medical staff and even the general personnel. Their services  are exemplary .",
        img: "hero/maternity3.jpeg",
        name: "Gerald",
        title: "patient",
      },
      {
        testimonial:
          " I have had tonsils trouble for quite a while and since I visited MATUNGULU MEDICAL CENTRE, everything has changed. They have high quality doctors over there not to forget to mention how they run their operations with  professionalism!  I'd advise anyone having any sort of illness to try them out! Their service is just top notch!👌🏾",
        img: "hero/test1.jpeg",
        name: "Susan",
        title: "patient",
      },
      {
        testimonial:
          "My family and I have been using this facility for all our healthcare related issues and they have always served us well. The staff are friendly,the facility is clean and the service delivery is excellent. I would recommend MMHWC to anyone who is looking for premium healthcare.",
        img: "hero/test3.jpeg",
        name: "Cephas",
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
