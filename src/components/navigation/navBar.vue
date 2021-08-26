<template>
  <div>
    <v-app-bar
      app
      color="white"
      fixed
      elevate-on-scroll
      height="70"
      clipped-left
    >
      <v-container class="d-flex justify-center align-center">
        <v-card color="" to="/" class="d-flex pa-0 ma-0" width="200" flat>
          <v-img
            src="./../../assets/matungulu-logo.jpg"
            height="100%"
            width="60"
            :aspect-ratio="1 / 1"
          >
          </v-img>
          <div>
            <p class="text-capitalize text-body-2 font-weight-black ma-0">
              matungulu medical and wellness center
            </p>
            <p class="text-caption ma-0 font-italic text-capitalize">
              we value your health
            </p>
          </div>
        </v-card>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <v-btn
            class="nav-btn mx-3"
            text
            color="secondary"
            x-large
            to="/"
            :ripple="false"
            exact-active-class="my-active"
          >
            home
          </v-btn>
          <v-btn
            class="nav-btn mx-3"
            text
            color="secondary"
            x-large
            to="/about"
            :ripple="false"
            exact-active-class="my-active"
          >
            about
          </v-btn>

          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="nav-btn mx-3"
                text
                color="secondary"
                x-large
                to="/services"
                :ripple="false"
                exact-active-class="my-active"
                v-bind="attrs"
                v-on="on"
              >
                services
                <v-icon>
                  mdi-arrow-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                to="/services"
                v-for="(service, index) in services"
                :key="index"
                @click="$vuetify.goTo(`#${service.id}`)"
              >
                <v-list-item-title class="text-capitalize">{{
                  service.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            class="nav-btn mx-3"
            text
            color="secondary"
            x-large
            to="/contacts"
            :ripple="false"
            exact-active-class="my-active"
          >
            contact
          </v-btn>
          <v-btn
            class="nav-btn mx-3"
            text
            color="secondary"
            x-large
            to="/faq"
            :ripple="false"
            exact-active-class="my-active"
          >
            faq
          </v-btn>
          <v-btn to="/appointment" color="secondary" class="ml-3" tile
            >book appointment</v-btn
          >
        </div>

        <div class="d-md-none">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary width="300" app clipped>
      <div class="pa-3">
        <v-card color="" to="/" class="d-flex" width="200" flat>
          <v-img
            src="./../../assets/matungulu-logo.jpg"
            height="100%"
            width="60"
            :aspect-ratio="1 / 1"
          >
          </v-img>
          <div>
            <p class="text-capitalize text-body-2 font-weight-black ma-0">
              matungulu medical and wellness center
            </p>
            <p class="text-caption ma-0 font-italic text-capitalize">
              we value your health
            </p>
          </div>
        </v-card>
      </div>
      <v-list flat>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="route in $router.options.routes"
            :key="route.path"
            :to="route.path"
          >
            <v-list-item-content>
              <v-list-item-title>{{ route.name }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data: () => ({
    drawer: false,
    services: [
      {
        id: "outpatient",
        title: "outpatient ",
      },
      {
        id: "inpatient",
        title: "in-patient",
      },

      {
        id: "maternity",
        title: "maternity",
      },
      {
        id: "optical",
        title: "optical services",
      },

      {
        id: "dental",
        title: "dental services",
      },
      {
        id: "ultrasound",
        title: "ultrasound",
      },
    ],
  }),
  props: {},
};
</script>

<style lang="scss"></style>
