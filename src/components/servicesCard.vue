<template>
  <v-hover v-slot="{ hover }">
    <v-card
      tile
      outlined
      class="pa-6 py-9"
      :class="{ secondary: hover, 'white--text': hover }"
      hover
    >
      <div>
        <v-icon
          :class="{ 'white--text': hover, 'secondary--text': !hover }"
          size="60"
        >
          {{ icon }}
        </v-icon>
      </div>
      <h4 class="text-h5 font-weight-bold text-capitalize">{{ title }}</h4>
      <p>
        {{ desc }}
      </p>
      <p>
        <v-btn
          :to="btnlink"
          tile
          :class="{ 'secondary--text': hover, white: hover, secondary: !hover }"
          >{{ btntext }}</v-btn
        >
      </p>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
    desc: String,
    btntext: String,
    btnlink: String,
  },
};
</script>
