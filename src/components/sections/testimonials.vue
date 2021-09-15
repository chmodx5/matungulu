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
          "The doctors have always been willing to answer any question I had, had time to make suggestions and were very helpful before and after I delieredmy child.Thank you for your kindness and help",
        img: "hero/maternity3.jpeg",
        name: "Margaret",
        title: "patient",
      },
      {
        testimonial:
          "Their pure concern for my health has kept me going back for their treatment and advice each time I have needed it. No time have I walked in to their front door and not met a smile from their staff, that is reassuring even when you are not feeling well.",
        img: "hero/test1.jpeg",
        name: "Linda",
        title: "patient",
      },
      {
        testimonial:
          "My husband and I, and now our newborn daughter, have been going to Matungulu Medical for treatment of all our health issues for almost five years now, we haven't had any isues nor any reasons to change them as our medical practitioners.",
        img: "hero/test3.jpeg",
        name: "Mrs.Musyoka",
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
