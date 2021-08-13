<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :class="{ secondary: hover, 'white--text': hover }"
      class="pa-6 py-9 flex-grow-1"
      tile
      outlined
    >
      <v-icon size="60" :class="{ 'white--text': hover }">{{ icon }}</v-icon>
      <h3 class=" text-capitalize text-h4 font-weight-black mb-3">
        {{ title }}
      </h3>

      <slot />
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
  },
};
</script>
