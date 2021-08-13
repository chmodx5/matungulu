<template>
  <default-section :title="title" :subtitle="subtitle">
    <v-row>
      <v-col cols="12" sm="6" md="6" class="">
        <v-img
          height="100%"
          :aspect-ratio="16 / 16"
          :src="require(`@/assets/img/${img}`)"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="">
        <h4 class="text-h5 font-weight-bold text-capitalize ">
          {{ title2 }}
        </h4>
        <slot />
        <p>
          <v-btn :to="btnlink" tile color="secondary" large
            >{{ btntext }}
          </v-btn>
        </p>
        <!-- <div class="d-flex justify-space-between">
          <div>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in 3" :key="i">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>some desc</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div>
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in 3" :key="i">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>some desc</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </div> -->
      </v-col>
    </v-row>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
export default {
  components: {
    defaultSection,
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
