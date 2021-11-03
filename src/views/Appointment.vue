<template>
  <default-section title="book appointment">
    <template>
      <v-form ref="form" v-model="valid" @submit.prevent="sendEmail">
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
                name="firstname"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Middle Name"
                required
                outlined
                style="border-radius: 0;"
                name="lastname"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="surname"
                :rules="nameRules"
                :counter="10"
                label="Surname"
                required
                outlined
                style="border-radius: 0;"
                name="surname"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="idnumber"
                :counter="10"
                label="ID Number"
                required
                outlined
                style="border-radius: 0;"
                name="id_number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phone"
                :counter="10"
                label="Phone Number"
                required
                outlined
                style="border-radius: 0;"
                name="phone_number"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="servicemodel"
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
                name="service"
                :rules="dateRules"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="timemodel"
                hint="select time"
                :items="time"
                item-text="time"
                label="Time"
                persistent-hint
                return-object
                single-line
                outlined
                style="border-radius: 0;"
                name="time"
                :rules="dateRules"
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
                    v-model="datemodel"
                    label="select date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    style="border-radius: 0;"
                    name="date"
                    :rules="dateRules"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1950-01-01"
                  v-model="datemodel"
                  no-title
                  scrollable
                >
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
            <v-col cols="12" md="4">
              <v-text-field
                v-model="messagemodel"
                :rules="messageRules"
                :counter="255"
                label="Message(Optional)"
                required
                outlined
                style="border-radius: 0;"
                name="message"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="d-flex">
              <v-btn
                large
                outlined
                tile
                color="white"
                class="mr-4 secondary"
                type="submit"
                :disabled="!valid"
              >
                submit
              </v-btn>
              <v-alert v-if="form_success_alert" tile type="success"
                >appointment booking request sent successfully we will contact
                you shortly</v-alert
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import emailjs from "emailjs-com";
export default {
  data: () => ({
    form_success_alert: false,
    valid: false,
    firstname: "",
    lastname: "",
    surname: "",
    phone: "",
    idnumber: "",
    timemodel: "",
    datemodel: "",
    servicemodel: "",
    messagemodel: "",
    date: null,
    nameRules: [
      (v) => !!v || "Name is required",
      // (v) => v.length <= 20 || "Name must be less than 10 characters",
    ],
    messageRules: [
      // (v) => v.length <= 300 || "Name must be less than 300 characters",
    ],
    dateRules: [(v) => !!v || "Date is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    services: ["optical", "dental", "ultrasound"],
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

    menu: false,
  }),
  components: {
    defaultSection,
  },
  mounted: function() {
    this.$vuetify.goTo(0);
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_spbem2j",
          "template_0vqnck5",
          e.target,
          "user_pKj9DgOGVwIBSkyrtbwG7"
        )
        .then(
          (result) => {
            this.form_success_alert = true;

            this.$refs.form.reset();

            setTimeout(() => (this.form_success_alert = false), 5000);

            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
