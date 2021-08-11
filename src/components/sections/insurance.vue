<template>
  <default-section
    title="insurance"
    subtitle="we provide a very wide range of insurance coverage"
    class=""
  >
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
        <div>
          <v-card
            outlined
            color="white"
            tile
            class="ma-4"
            height="auto"
            width="150"
          >
            <v-img :src="require(`@/assets/img/${insurance.img}`)"></v-img>
            <div class="py-1">
              <small class="px-3 text-capitalize font-weight-bold">{{
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
