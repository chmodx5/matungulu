<template>
  <v-card hover outlined class="pa-6 py-9">
    <p style="font-style:italic !important">
      {{ testimonial }}
    </p>
    <div class="d-flex ">
      <div>
        <v-img
          height="50"
          width="50"
          :aspect-ratio="1 / 1"
          :src="require(`@/assets/placeholder.png`)"
          style="border-radius: 50%;"
        ></v-img>
      </div>
      <div class="text-capitalize px-6">
        <p class=" font-weight-bold ma-0 secondary--text">
          {{ name }}
        </p>
        <small>
          {{ title }}
        </small>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    testimonial: String,
    img: String,
    name: String,
    title: String,
  },
};
</script>
