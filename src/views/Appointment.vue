<template>
  <default-section title="book appointment">
    <template>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
                outlined
                style="border-radius: 0;"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
                outlined
                style="border-radius: 0;"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="phone number"
                required
                outlined
                style="border-radius: 0;"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                style="border-radius: 0;"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="select"
                hint="select service"
                :items="services"
                item-text="title"
                item-value="id"
                label="Service"
                persistent-hint
                return-object
                single-line
                outlined
                style="border-radius: 0;"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="select"
                hint="select time"
                :items="time"
                item-text="time"
                label="Time"
                persistent-hint
                return-object
                single-line
                outlined
                style="border-radius: 0;"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="select date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    style="border-radius: 0;"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-btn
                large
                outlined
                tile
                color="white"
                class="mr-4 secondary"
                type="submit"
                :disabled="invalid"
              >
                submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    services: [
      {
        id: "outpatient",
        icon: "mdi-hospital-building",
        title: "Outpatient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "inpatient",
        icon: "mdi-bed-outline",
        title: "In-patient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "laboratory",
        icon: "mdi-microscope",
        title: "Laboratory",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "pharmacy",
        icon: "mdi-pill",
        title: "In-house pharmacy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "maternity",
        icon: "mdi-mother-nurse",
        title: "Maternity",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "optical",
        icon: "mdi-glasses",
        title: "Optical services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "physiotherapy",
        icon: "mdi-human-wheelchair",
        title: "Physiotherapy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "dental",
        icon: "mdi-tooth-outline",
        title: "Dental services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "ultrasound",
        icon: "mdi-face-recognition",
        title: "Ultrasound",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
    ],
    time: [
      "8 - 9am",
      "9 - 10am",
      "10 - 11am",
      "11-12pm",
      "12 - 1pm",
      "1 - 2pm",
      "2 - 3pm",
      "3 - 4pm",
    ],
    items: [
      { service: "Florida" },
      { state: "Georgia", abbr: "GA" },
      { state: "Nebraska", abbr: "NE" },
      { state: "California", abbr: "CA" },
      { state: "New York", abbr: "NY" },
    ],
    radioGroup: 1,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
  }),
  components: {
    defaultSection,
  },
};
</script>
