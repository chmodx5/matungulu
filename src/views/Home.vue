<template>
  <div>
    <hero></hero>
    <services :services="services"></services>
    <about></about>
    <overlay-parallax></overlay-parallax>
    <institutes></institutes>
    <advantages></advantages>

    <news-letter></news-letter>
    <testimonials></testimonials>
  </div>
</template>

<script>
import hero from "@/components/sections/hero.vue";
import services from "@/components/sections/services.vue";

import institutes from "@/components/sections/institutes.vue";
import advantages from "@/components/sections/advantages.vue";

import newsLetter from "@/components/sections/newsLetter.vue";
import testimonials from "@/components/sections/testimonials.vue";
import about from "@/components/sections/about.vue";
import overlayParallax from "@/components/sections/overlayParallax.vue";

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
  }),
  components: {
    hero,
    services,

    institutes,
    advantages,

    newsLetter,
    testimonials,
    about,
    overlayParallax,
  },
};
</script>
