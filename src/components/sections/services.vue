<template>
  <default-section
    title="what makes us different"
    subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia a, eveniet totam praesentium molestiae rerum?"
  >
    <v-row>
      <v-col cols="6" sm="6" md="3" v-for="(service, i) in services" :key="i">
        <services-card
          :icon="service.icon"
          :title="service.title"
          :btntext="service.btntext"
          :btnlink="service.btnlink"
        ></services-card>
      </v-col>
    </v-row>
  </default-section>
</template>

<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import servicesCard from "@/components/servicesCard.vue";
export default {
  name: "servies",

  props: {
    services: Array,
  },
  components: { defaultSection, servicesCard },
};
</script>
