<template>
  <v-hover v-slot="{ hover }">
    <v-card
      tile
      :class="{ secondary: hover, 'white--text': hover }"
      class="pa-3 text-center"
      width="100%"
    >
      <v-responsive class="">
        <div
          style="height:100%; width:100%"
          class=" d-flex flex-column justify-space-between"
        >
          <div>
            <v-icon size="50" :class="{ 'white--text': hover }">
              {{ icon }}
            </v-icon>
            <p class="font-weight-black text-caption text-uppercase my-0">
              {{ title }}
            </p>
          </div>
          <div class="text-capitalize">
            <slot></slot>
          </div>
        </div>
      </v-responsive>
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
