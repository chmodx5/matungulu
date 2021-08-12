<template>
  <v-card tile hover height="50" outlined class="pa-0 d-flex">
    <v-img height="100%" width="auto" :aspect-ratio="1 / 1" :src="img"> </v-img>
    <div class="px-3 py-3">
      <h4 class="text-body-1 font-weight-bold text-capitalize">
        {{ title }}
      </h4>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    img: String,
    title: String,
  },
};
</script>
