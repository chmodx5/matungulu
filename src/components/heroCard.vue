<template>
  <v-hover v-slot="{ hover }">
    <v-card hover tile color="secondary" class="flex-grow-1 px-6 py-9" dark>
      <h3 class="text-h5 text-capitalize font-weight-bold">
        {{ title }}
      </h3>

      <div class=" mt-3">
        <slot />
      </div>
      <v-btn
        v-if="btntext"
        text
        tile
        :to="btnlink"
        class="px-0 font-weight-bold"
        :class="{ white: hover, 'px-3': hover, 'secondary--text': hover }"
        color="white "
        >{{ btntext }} <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    title: String,
    btnlink: String,
    btntext: String,
  },
};
</script>
