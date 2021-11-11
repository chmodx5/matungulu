<template>
  <v-parallax light height="600" src="https://source.unsplash.com/XZF2VZN98wY">
    <v-overlay
      absolute
      opacity=".3"
      color="secondary"
      class="d-flex justify-center white--text"
    >
      <v-container class=" mx-auto" style="width:100vw">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="4">
            <v-card flat class="pa-6" color="transparent">
              <v-img class="mb-8" src="@/assets/img/insurance/nhif.png">
              </v-img>
              <v-btn
                @click="go_to_insurance"
                tile
                class="font-weight"
                color="secondary"
                >other insurance partners
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" class="text-center text-md-left text-md" md="8">
            <div>
              <h3 class="text-h2 text-capitalize font-weight-black">
                we are an NHIF-accredited medical facility.
              </h3>
            </div>
          </v-col>
        </v-row>
        <div class="d-flex "></div>
      </v-container>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  computed: {
    get_insurance() {
      return this.$store.state.insurance;
    },
  },
  methods: {
    go_to_insurance() {
      this.$router.push({ path: "#insurance" });
    },
  },
  props: {
    go_to_insurance: Function,
  },
};
</script>
