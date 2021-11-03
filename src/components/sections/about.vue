<template>
  <default-section :title="title" :subtitle="subtitle">
    <v-row>
      <v-col cols="12" sm="6" md="6" class="">
        <v-img
          height="100%"
          :aspect-ratio="16 / 9"
          :src="require(`@/assets/img/${img}`)"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="">
        <h4 class="text-h5 font-weight-bold text-capitalize ">
          {{ title2 }}
        </h4>
        <slot />
        <p>
          <v-btn v-if="btntext" :to="btnlink" tile color="secondary" large
            >{{ btntext }}
          </v-btn>
        </p>
      </v-col>
    </v-row>

    <!-- section containing the mission statements -->
    <v-row v-if="$route.path != '/'">
      <v-col cols="12" sm="6" md="4" class="d-flex">
        <mission-card icon="mdi-table-eye" title="our vision">
          <p>
            Matungulu Medical Health and Wellness Centre is committed to
            excellence through service. We exist to promote, preserve and
            restore the health of our community.
          </p>
        </mission-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="d-flex">
        <mission-card icon="mdi-walk" title="our mission">
          <p>
            Our Mission is to passionately pursue the health and well-being of
            our patients, employees and the community through our culture of
            exceptional service and commitment to quality health care provision.
          </p>
        </mission-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="d-flex">
        <mission-card
          icon="mdi-target"
          title="core value"
          class="text-capitalize"
        >
          <p>
            - service excellence
          </p>
          <p>- compassion</p>
          <p>- teamwork</p>
        </mission-card>
      </v-col>
    </v-row>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import missionCard from "@/components/missionCard.vue";
export default {
  components: {
    defaultSection,
    missionCard,
  },
  props: {
    title: String,
    subtitle: String,
    img: String,
    btnlink: String,
    btntext: String,
    title2: String,
  },
};
</script>
