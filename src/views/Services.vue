<template>
  <div>
    <service-section
      v-for="(service, i) in services"
      :key="i"
      :title="service.title"
      :img="service.img"
      :left="service.left"
      :icon="service.icon"
      :id="service.id"
    >
      <p>
        {{ service.desc }}
      </p>
    </service-section>
  </div>
</template>

<script>
import serviceSection from "@/components/sections/serviceSection.vue";
export default {
  data: () => ({
    services: [
      {
        id: "outpatient",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: false,
        icon: "mdi-hospital-building",
        title: "outpatient ",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "inpatient",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: true,
        icon: "mdi-bed-outline",
        title: "in-patient",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "laboratory",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: false,
        icon: "mdi-microscope",
        title: "laboratory",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "pharmacy",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: true,
        icon: "mdi-pill",
        title: "inhouse pharmacy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "maternity",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: false,
        icon: "mdi-mother-nurse",
        title: "maternity",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "optical",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: true,
        icon: "mdi-glasses",
        title: "optical services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "physiotherapy",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: false,
        icon: "mdi-human-wheelchair",
        title: "physiotherapy",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "dental",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: true,
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
      {
        id: "ultrasound",
        img: "https://source.unsplash.com/j7tWLBlK9mk",
        left: false,
        icon: "mdi-face-recognition",
        title: "ultrasound",
        desc:
          "this is just some random desc purely because i im not creative enough to write something meaningful",
      },
    ],
  }),
  components: {
    serviceSection,
  },
};
</script>
