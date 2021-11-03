<template>
  <default-section id="insurance" title="Our Insurance Partners" class="">
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

    <v-row>
      <v-col
        cols="4"
        sm="3"
        md="2"
        xl="2"
        v-for="(insurance, n) in insurances"
        :key="n"
        class="d-flex"
      >
        <v-card
          outlined
          hover
          tile
          color=""
          class="ma-4 d-flex flex-column justify-space-between  flex-grow-1"
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
      </v-col>
    </v-row>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import insuranceCard from "@/components/insuranceCard.vue";
export default {
  data: () => ({
    insurances: [
      {
        img: "insurance/nhif.png",
        title: "NHIF",
      },
      {
        img: "insurance/aar.jpeg",
        title: "AAR insurance",
      },
      {
        img: "insurance/auditor.png",
        title: "Office of the auditor general",
      },
      {
        img: "insurance/britam.png",
        title: "Britam Insurance",
      },
      {
        img: "insurance/cic.png",
        title: "CIC Insurance",
      },
      {
        img: "insurance/coop.png",
        title: "Co-operative Bank",
      },
      {
        img: "insurance/ga.png",
        title: "GA Insurance",
      },
      {
        img: "insurance/_heritage.jpg",
        title: "Heritage Insurance",
      },
      {
        img: "insurance/Jubilee.svg",
        title: "Jubilee Insurance",
      },
      {
        img: "insurance/kenbright.png",
        title: "KenBright",
      },
      {
        img: "insurance/kenyanalliance.jpg",
        title: "kenyan alliance Insurance",
      },
      {
        img: "insurance/laison.png",
        title: "Liaison Insurance",
      },
      {
        img: "insurance/_madison.png",
        title: "Madison Insurance",
      },
      {
        img: "insurance/power.png",
        title: "Kenya Power",
      },
      {
        img: "insurance/Saham.svg",
        title: "saham Insurance",
      },
      {
        img: "insurance/sanlam.png",
        title: "Sanlam Insurance",
      },
    ],
  }),
  components: {
    defaultSection,
    insuranceCard,
  },
  props: {},
};
</script>
