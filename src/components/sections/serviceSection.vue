<template>
  <v-card
    outlined
    color=""
    class=" px-4 py-5 mt-10 d-flex align-center flex-grow-1 grey lighten-3"
  >
    <v-row align="center" class="px-6 ">
      <v-col
        cols="12"
        md="6"
        :order-md="turnLeft"
        class=" d-flex align-center justify-center pa-0 yellow"
      >
        <v-img
          height="100%"
          :aspect-ratio="16 / 9"
          :src="require(`@/assets/img/${img}`)"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="">
        <v-icon size="50">
          {{ icon }}
        </v-icon>
        <h2 class="text-capitalize  font-weight-black text-h4">
          {{ title }}
        </h2>
        <div>
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import defaultSection from "../layouts/defaultSection.vue";
export default {
  components: { defaultSection },
  data: () => ({}),
  computed: {
    turnLeft: function() {
      if (this.left) {
        return 2;
      }
    },
  },
  props: {
    title: String,
    img: String,
    left: Boolean,
    icon: String,
  },
};
</script>
