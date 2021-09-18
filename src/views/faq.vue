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
    </v-expansion-panels>
  </default-section>
</template>

<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
export default {
  data: () => ({
    faqs: [
      {
        question: "Is Matungulu Medical empanelled by NHIF?",
        answer:
          "Yes, MMHWC is accredited by NHIF to provide both outpatient and inpatient services to NHIF beneficiaries",
      },
      {
        question: "Do you accept other medical insurance cards?",
        answer: "Yes we do. Click here to view.",
      },
      {
        question: "Where is the hospital located at?",
        answer:
          "Matungulu Medical is located in the heart of Tala Market just before the Katine Road turn-off. Click here to view map.",
      },
      {
        question: "What do I need to carry during my doctor's visit?",
        answer:
          "To help us serve you better, please carry the following-: NHIF Card or Insurance Card, ID Card, any previous medical records and any existing medication",
      },
      {
        question: "How can I reach you in case of an emergency?",
        answer: "You can call us through 0700631291 or 0738669259.",
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
  components: { defaultSection },
};
</script>
