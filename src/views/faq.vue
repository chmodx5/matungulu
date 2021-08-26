<template>
  <default-section title="FAQ's">
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
        question: "How can I book an appointment?",
        answer:
          "You can call us at 0700 631 291. Alternatively, you can click the 'Book Appointment' button on the top-right corner of the website and fill in the form that opens.",
      },
      {
        question: "Where is your facility located?",
        answer:
          "We are located at Tala Market street, Matungulu sub-county, Machakos County. You can find our location on the ap in the 'Contacts' Page.",
      },
      {
        question: "Can I get a COVID-19 vaccine in your facility?",
        answer:
          "Currently, you cannot. However we can advise you where to get one.",
      },
    ],
  }),
  components: { defaultSection },
};
</script>
