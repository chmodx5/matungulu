<template>
  <default-section>
    <v-expansion-panels tile hover>
      <v-expansion-panel
        active-class="secondary white--text"
        v-for="(faq, i) in faqs"
        :key="i"
      >
        <v-expansion-panel-header class="font-weight-bold text-h6">
          {{ faq.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ faq.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel active-class="secondary white--text">
        <v-expansion-panel-header class="font-weight-bold text-h6">
          Where is the hospital located at?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Matungulu Medical is located in the heart of Tala Market Street just
          before Katine road turn-off
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text dark v-bind="attrs" v-on="on">
                click here to view the map
              </v-btn>
            </template>
            <v-card style="position:relative;">
              <my-map />
              <div style="position:absolute; top:0; left:0;">
                <div>
                  <v-btn icon color="secondary" @click="dialog = false"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-dialog>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel active-class="secondary white--text">
        <v-expansion-panel-header class="font-weight-bold text-h6">
          Do you accept other medical insurance cards?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Yes we do click

          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text dark v-bind="attrs" v-on="on">
                here
              </v-btn>
            </template>
            <v-card style="position:relative;">
              <insurance />
              <div style="position:absolute; top:0; left:0;">
                <div>
                  <v-btn icon color="secondary" @click="dialog = false"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-dialog>

          to view
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel
        active-class="secondary white--text"
        v-for="(faq, i) in faqs2"
        :key="i"
      >
        <v-expansion-panel-header class="font-weight-bold text-h6">
          {{ faq.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ faq.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </default-section>
</template>

<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import insurance from "@/components/sections/insurance.vue";
import myMap from "@/components/myMap.vue";
export default {
  data: () => ({
    homeID: "insurance",
    dialog: false,
    faqs: [
      {
        question: "How can I reach you in case of an emergency?",
        answer: "You can call us through 0700631291 or 0738669259.",
      },
      {
        question: "Is Matungulu Medical empanelled by NHIF?",
        answer:
          "Yes, MMHWC is accredited by NHIF to provide both outpatient and inpatient services to NHIF beneficiaries",
      },
    ],
    faqs2: [
      {
        question: "What do I need to carry during my doctor's visit?",
        answer:
          "To help us serve you better, please carry the following-: NHIF Card or Insurance Card, ID Card, any previous medical records and any existing medication",
      },

      {
        question:
          "If a client is not satisfied with Matungulu Medical services, what can she/he do?",
        answer:
          "The client should engage the hospital in-charge and register the dissatisfaction. To submit feedback, complain or suggestion, the client can contact customer care at 0738669259 or write to complaints@matungulumedical.co.ke",
      },
      {
        question: "How can I become part of your workforce?",
        answer:
          "We post all our job openings on our website. We advise that you keep checking for any openings You can also send in your application to hr@matungulumedical.co.ke and we will get in-touch with you if an opportunity is available",
      },
    ],
  }),
  components: { defaultSection, insurance, myMap },
  mounted: function() {
    if (this.$route.params.id) {
      this.$vuetify.goTo("#" + this.$route.params.id);
    } else {
      this.$vuetify.goTo(0);
    }
  },
};
</script>
