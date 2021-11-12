<template>
  <div>
    <hero>
      <v-parallax
        light
        height="600"
        src="https://source.unsplash.com/XZF2VZN98wY"
      >
        <v-overlay
          absolute
          opacity=".3"
          color="secondary"
          class="d-flex justify-center white--text"
        >
          <v-container class=" mx-auto" style="width:100vw">
            <v-row justify="center" align="center">
              <v-col cols="12" sm="8" md="4">
                <v-card flat class="pa-6" color="transparent">
                  <v-img class="mb-8" src="@/assets/img/insurance/nhif.png">
                  </v-img>
                  <v-btn
                    @click="$vuetify.goTo('#insurance')"
                    tile
                    class="font-weight"
                    color="secondary"
                    >other insurance partners
                  </v-btn>
                </v-card>
              </v-col>
              <v-col cols="12" class="text-center text-md-left text-md" md="8">
                <div>
                  <h3 class="text-h2 text-capitalize font-weight-black">
                    we are an NHIF-accredited medical facility.
                  </h3>
                </div>
              </v-col>
            </v-row>
            <div class="d-flex "></div>
          </v-container>
        </v-overlay>
      </v-parallax>
    </hero>

    <services :services="services"></services>

    <about
      title="Who are we?"
      subtitle="We are an acclaimed level 3 medical facility geared towards providing quality, reliable and affordable healthcare"
      img="insurance/sindano.jpg"
      title2="About us"
      btnlink="/about"
      btntext="Read more"
    >
      <p>
        We offer round-the-clock inpatient, outpatient, laboratory and maternity
        services. We are a recognized and an acclaimed level three medical
        facility in the region serving the community as well as institutional
        clients.
      </p>
    </about>
    <!-- <overlay-parallax></overlay-parallax> -->
    <insurance id="insurance" :insurances="insurances"></insurance>

    <testimonials></testimonials>

    <default-section title="tell us something">
      <template>
        <v-form ref="form" v-model="valid" @submit.prevent="sendEmail">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="name_model"
                  :rules="full_name_rules"
                  :counter="30"
                  label="Full Name"
                  required
                  outlined
                  style="border-radius: 0;"
                  name="from_name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email_model"
                  :rules="email_rules"
                  :counter="30"
                  label="Email"
                  required
                  outlined
                  style="border-radius: 0;"
                  name="from_email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="number_model"
                  :counter="10"
                  label="Phone number (optional)"
                  required
                  outlined
                  type="number"
                  style="border-radius: 0;"
                  name="from_name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea
                  v-model="text_model"
                  :rules="text_rules"
                  outlined
                  :counter="200"
                  label="Your feedback"
                  auto-grow
                  style="border-radius: 0;"
                  name="message"
                ></v-textarea>
              </v-col>

              <v-col cols="12" class="d-flex">
                <v-btn
                  large
                  outlined
                  tile
                  color="secondary"
                  class="mr-4 "
                  type="submit"
                  :disabled="!valid"
                >
                  submit
                </v-btn>
                <v-alert v-if="form_success_alert" tile type="success"
                  >message sent successfully</v-alert
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>
    </default-section>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import hero from "@/components/sections/hero.vue";
import services from "@/components/sections/services.vue";
import testimonials from "@/components/sections/testimonials.vue";
import about from "@/components/sections/about.vue";
import overlayParallax from "@/components/sections/overlayParallax.vue";
import insurance from "@/components/sections/insurance.vue";

import defaultSection from "@/components/layouts/defaultSection.vue";

export default {
  name: "Home",
  data: () => ({
    valid: true,
    form_success_alert: false,
    form_error_alert: false,
    name_model: null,
    email_model: null,
    number_model: null,
    text_model: null,
    full_name_rules: [
      (v) => !!v || "Full name is required",
      (v) =>
        (v && v.length <= 30) ||
        "Name must be more than 5 characters and less than 30",
    ],
    email_rules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    text_rules: [
      (v) => !!v || "text is required",
      (v) =>
        (v && v.length >= 5 && v.length <= 200) ||
        "Name must be less than 200 characters and more than 5",
    ],
    services: [
      {
        id: "outpatient",
        icon: "mdi-hospital-building",
        title: "out-patient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "inpatient",
        icon: "mdi-bed-outline",
        title: "in-patient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "maternity",
        icon: "mdi-mother-nurse",
        title: "maternity",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "optical",
        icon: "mdi-glasses",
        title: "optical services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "dental",
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
      {
        id: "ultrasound",
        icon: "mdi-face-recognition",
        title: "ultrasound",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/services",
      },
    ],
    insurances: [
      {
        img: "insurance/nhif.png",
        title: "NHIF",
      },
      {
        img: "insurance/aar.jpeg",
        title: "AAR insurance",
      },
      {
        img: "insurance/auditor.png",
        title: "Office of the auditor general",
      },
      {
        img: "insurance/britam.png",
        title: "Britam Insurance",
      },
      {
        img: "insurance/cic.png",
        title: "CIC Insurance",
      },
      {
        img: "insurance/coop.png",
        title: "Co-operative Bank",
      },
      {
        img: "insurance/ga.png",
        title: "GA Insurance",
      },
      {
        img: "insurance/_heritage.jpg",
        title: "Heritage Insurance",
      },
      {
        img: "insurance/Jubilee.svg",
        title: "Jubilee Insurance",
      },
      {
        img: "insurance/kenbright.png",
        title: "KenBright",
      },
      {
        img: "insurance/kenyanalliance.jpg",
        title: "kenyan alliance Insurance",
      },
      {
        img: "insurance/laison.png",
        title: "Liaison Insurance",
      },
      {
        img: "insurance/_madison.png",
        title: "Madison Insurance",
      },
      {
        img: "insurance/power.png",
        title: "Kenya Power",
      },
      {
        img: "insurance/Saham.svg",
        title: "saham Insurance",
      },
      {
        img: "insurance/sanlam.png",
        title: "Sanlam Insurance",
      },
    ],
  }),
  components: {
    hero,
    services,

    testimonials,
    about,
    insurance,
    overlayParallax,
    defaultSection,
  },
  methods: {
    go_to_insurance() {
      alert("hello otto");
      this.$vuetify.goTo("insurance");
    },
    // sendEmail(e) {
    //   try {
    //     emailjs.sendForm(
    //       "service_spbem2j",
    //       "template_dk2w896",
    //       e.target,
    //       "user_pKj9DgOGVwIBSkyrtbwG7",
    //     );
    //   } catch (error) {
    //     console.log({ error });
    //   }
    //   // Reset form field
    //   this.name_model = "";
    //   this.email_model = "";
    //   this.text_model = "";
    // },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_spbem2j",
          "template_dk2w896",
          e.target,
          "user_pKj9DgOGVwIBSkyrtbwG7"
        )
        .then(
          (result) => {
            this.form_success_alert = true;
            (this.name_model = ""),
              (this.email_model = ""),
              (this.text_model = ""),
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
  // mounted: function() {
  //   this.$vuetify.goTo(0);
  // },
};
</script>
