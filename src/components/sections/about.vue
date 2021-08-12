<template>
  <default-section
    title="who we are"
    subtitle="something that is about us here and slightly waht we do"
  >
    <v-row>
      <v-col cols="12" sm="6" md="6" class="">
        <v-img
          height="100%"
          :aspect-ratio="16 / 9"
          src="https://source.unsplash.com/SxNgda0cM8E"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="">
        <h4 class="text-h5 font-weight-bold text-capitalize ">
          about us
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
          nemo optio iste eligendi, maiores fugit corrupti ullam laudantium
          obcaecati consequatur, ipsum accusantium id corporis quod! Amet qui
          sunt ipsum optio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed
          exercitationem esse. Repellat ullam soluta deserunt distinctio,
          ducimus nam harum illo a ipsum iusto voluptatum nesciunt cumque
          dolores error vero? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Numquam amet optio laborum natus sint perspiciatis sequi magnam,
          deserunt tempora asperiores sunt quam minus, incidunt quibusdam minima
          id corrupti. Eveniet, nam.
        </p>
        <p>
          <v-btn tile color="secondary" large>more </v-btn>
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
};
</script>
