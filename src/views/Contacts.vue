<template>
  <default-section>
    <v-row>
      <v-col md="6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit
          accusantium tempora, non, qui libero veritatis hic asperiores eaque
          quae sunt neque quos quaerat nulla velit dolore officiis enim ad?
        </p>
      </v-col>
      <v-col md="6">
        <v-row>
          <v-col cols="4" v-for="(i, k) in 4" :key="k">
            <v-card class="pa-3 text-center">
              <v-responsive :aspect-ratio="1 / 1" class="">
                <div>
                  <v-icon size="50">
                    mdi-facebook
                  </v-icon>
                </div>
                <div>
                  <p class="font-weight-bold text-uppercase my-0">email</p>
                  <small>someone@gmail.com</small>
                </div>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
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
};
</script>
