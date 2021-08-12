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
        <div>
          <v-img
            src="./../../assets/matungulu-logo.jpg"
            height="60"
            width="160"
          >
          </v-img>
        </div>

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
                v-for="(item, index) in 9"
                :key="index"
              >
                <v-list-item-title>something</v-list-item-title>
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
          <v-btn color="secondary" class="ml-3" tile>book appointment</v-btn>
        </div>

        <div class="d-md-none">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="300" app clipped temporary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nostrum
        earum. Provident perspiciatis impedit voluptatum doloremque. Temporibus
        eum cumque perferendis repudiandae, architecto quae assumenda dolores
        laboriosam, error minima expedita hic.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data: () => ({
    drawer: false,
  }),
  props: {
    navLinks: Array,
  },
};
</script>

<style lang="scss"></style>
