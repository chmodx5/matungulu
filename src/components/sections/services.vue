<template>
  <default-section title="Care you can believe in">
    <v-row class="pb-6">
      <v-col cols="6" sm="6" md="4" v-for="(service, i) in services" :key="i">
        <services-card
          :id="service.id"
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
