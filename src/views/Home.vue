<template>
  <div>
    <hero></hero>
    <services :services="services"></services>
    <about></about>
    <overlay-parallax></overlay-parallax>
    <insurance :insurances="insurances"></insurance>

    <testimonials></testimonials>
  </div>
</template>

<script>
import hero from "@/components/sections/hero.vue";
import services from "@/components/sections/services.vue";

import testimonials from "@/components/sections/testimonials.vue";
import about from "@/components/sections/about.vue";
import overlayParallax from "@/components/sections/overlayParallax.vue";
import insurance from "@/components/sections/insurance.vue";

export default {
  name: "Home",
  data: () => ({
    services: [
      {
        icon: "mdi-hospital-building",
        title: "outpatient ",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-bed-outline",
        title: "in-patient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-microscope",
        title: "laboratory",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-pill",
        title: "inhouse pharmacy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-mother-nurse",
        title: "meternaty",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-glasses",
        title: "optical services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-human-wheelchair",
        title: "physiotherapy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
      {
        icon: "mdi-face-recognition",
        title: "ultrasound",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
        btntext: "more",
        btnlink: "/",
      },
    ],
    insurances: [
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
        img: "insurance/heritage.jpg",
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
        img: "insurance/madison.png",
        title: "Madison Insurance",
      },
      {
        img: "insurance/nhif.png",
        title: "NHIF",
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
  },
};
</script>
