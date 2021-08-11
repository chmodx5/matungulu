<template>
  <v-hover v-slot="{ hover }">
    <v-card hover tile color="secondary" class="flex-grow-1 px-6 py-9" dark>
      <h3 class="text-h5 text-capitalize font-weight-bold">
        opening hours
      </h3>

      <div class=" mt-3 d-flex justify-space-between">
        <p>Monday - friday</p>
        <p>8:00am to 4:00pm</p>
      </div>
      <div class="  d-flex justify-space-between">
        <p>weekends</p>
        <p>8:00am to 4:00pm</p>
      </div>
      <div class="  d-flex justify-space-between">
        <p>public holidays</p>
        <p>8:00am to 4:00pm</p>
      </div>
      <v-btn
        text
        tile
        class="px-0 font-weight-bold"
        :class="{ primary: hover, 'px-3': hover }"
        color="white "
        >learn more <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card>
  </v-hover>
</template>
