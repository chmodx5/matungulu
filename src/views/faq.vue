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
        question: "blah blah blah",
        answer:
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "blah blah ",
        answer:
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "blah",
        answer:
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  }),
  components: { defaultSection },
};
</script>
