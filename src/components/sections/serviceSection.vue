<template>
  <v-container>
    <v-card flat min-height="300" color="" class="">
      <v-row align="center" class="">
        <v-col
          md="6"
          :order="turnLeft"
          class=" d-flex align-center justify-center pa-0"
        >
          <v-img
            height="100%"
            :aspect-ratio="16 / 9"
            :src="require(`@/assets/img/${img}`)"
          ></v-img>
        </v-col>
        <v-col md="6">
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
  </v-container>
</template>

<script>
export default {
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
