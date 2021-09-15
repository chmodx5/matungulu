<template>
  <default-section title="Our Insurance Partners" class="">
    <!-- <v-row>
      <v-col
        class=""
        cols="6"
        sm="3"
        md="3"
        v-for="(insurance, k) in insurances"
        :key="k"
      >
        <insurance-card :img="insurance.img" :title="insurance.title">
        </insurance-card>
      </v-col>
    </v-row> -->

    <v-slide-group class="" :show-arrows="false">
      <v-slide-item v-for="(insurance, n) in insurances" :key="n">
        <div class="d-flex">
          <v-card
            outlined
            hover
            tile
            color=""
            class="ma-4 d-flex flex-column justify-space-between flex-grow-1 "
            height="auto"
            width="150"
          >
            <div class="pt-3 d-flex align-center" style="height:100%">
              <v-img :src="require(`@/assets/img/${insurance.img}`)"></v-img>
            </div>
            <div class="px-3">
              <small class=" text-capitalize font-weight-bold">{{
                insurance.title
              }}</small>
            </div>
          </v-card>
        </div>
      </v-slide-item>
    </v-slide-group>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import insuranceCard from "@/components/insuranceCard.vue";
export default {
  data: () => ({}),
  components: {
    defaultSection,
    insuranceCard,
  },
  props: {
    insurances: Array,
  },
};
</script>
