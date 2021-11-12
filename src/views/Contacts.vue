<template>
  <default-section>
    <v-row>
      <v-col md="6">
        <h3 class="text-capitalize font-weight-bold text-h4">opening hours</h3>
        <br />
        <div class="text-capitalize">
          <p>monday - saturday : open</p>
          <p>sunday : open</p>
          <p>public holidays : open</p>
        </div>
        <p class="font-weight-bold">
          We are open 24 hours 7 days a week
        </p>
      </v-col>
      <v-col md="6">
        <v-row>
          <v-col cols="12" sm="6" class="d-flex">
            <contact-card icon="mdi-map-marker-outline" title="location">
              <p class="text-caption">
                Tala Market Street, Matungulu Sub-County, Machakos County
              </p>
            </contact-card>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex">
            <contact-card icon="mdi-phone-outline" title="phone numbers">
              <p class="text-caption mb-0">
                <span class="font-weight-bold">
                  Emergency/Reception:
                </span>
                0700 631 291 / 0738 669 259
              </p>
              <p class="text-caption mb-0">
                <span class="font-weight-bold">Official Enquiries: </span>
                0723715180
              </p>
            </contact-card>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex">
            <contact-card icon="mdi-email-outline" title="email">
              <p class="text-caption mb-0">
                <span class="font-weight-bold">General Enquiries: </span>
                info@matungulumedical.co.ke
              </p>
              <p class="text-caption mb-0">
                <span class="font-weight-bold"
                  >Complaints and Suggestions :
                </span>
                complaints@matungulumedical.co.ke
              </p>
              <p class="text-caption">
                <span class="font-weight-bold">Official Enquiries: </span>
                complaints@matungulumedical.co.ke
              </p>
            </contact-card>
          </v-col>
          <v-col cols="12" sm="6" md="" class="d-flex">
            <v-hover v-slot="{ hover }">
              <contact-card
                icon="mdi-account-group-outline"
                title="social media"
              >
                <div>
                  <v-btn
                    class="mx-1"
                    :class="{ 'secondary--text': hover, white: hover }"
                    icon
                    tile
                    color="secondary"
                    outlined
                    href="https://www.facebook.com/MatunguluMedical"
                    ><v-icon>mdi-facebook</v-icon></v-btn
                  >
                </div>
              </contact-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="mt-3">
      <my-map></my-map>
    </div>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import myMap from "@/components/myMap.vue";
import contactCard from "@/components/contactCard.vue";
export default {
  data: () => ({}),
  components: {
    defaultSection,
    contactCard,
    myMap,
  },
  mounted: function() {
    this.$vuetify.goTo(0);
  },
};
</script>
