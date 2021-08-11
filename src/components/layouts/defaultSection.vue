<template>
  <div class="py-9 ">
    <v-container>
      <v-row class="mb-3">
        <v-col cols="12" sm="8" md="6">
          <h3 class="text-h3 font-weight-black text-capitalize mb-3">
            {{ title }}
          </h3>

          <p class="text-caption-2 secondary--text">
            {{ subtitle }}
          </p>
        </v-col>
      </v-row>
      <slot />
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
