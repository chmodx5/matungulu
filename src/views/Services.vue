<template>
  <default-section
    subtitle="we provide a wide range of services"
    title="services"
  >
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
  </default-section>
</template>

<script>
import serviceSection from "@/components/sections/serviceSection.vue";
import DefaultSection from "../components/layouts/defaultSection.vue";
export default {
  data: () => ({
    services: [
      {
        id: "outpatient",
        img: "hero/carousel1.jpeg",
        left: false,
        icon: "mdi-hospital-building",
        title: "outpatient",
        desc:
          "Matungulu Medical Health and Wellness Centre is committed to quality healthcare provision ranging from routine health examination to managing chronic conditions. Ourteam of qualified and highly experienced healthcare personnel are committed to promotegood health through health screening, wellness and prevention, diagnosis, treatment and health education.Our outpatient services include:  General Consultation  Laboratory  Pharmacy  Mother and Child Health  Nutritional Counselling",
      },
      {
        id: "inpatient",
        img: "hero/inpatient.jpeg",
        left: true,
        icon: "mdi-bed-outline",
        title: "in-patient",
        desc:
          "It is always best to have a good doctor that will take care of you and your whole family. Our team of qualified doctors can ensure prevention, coordination of care, management of disease, precaution, and solution of your disease.",
      },
      {
        id: "maternity",
        img: "hero/maternity.jpeg",
        left: false,
        icon: "mdi-mother-nurse",
        title: "maternity",
        desc:
          "We provide pre- and post-natal care for you and your baby. Weprovide baby care including immunization and vaccination for you and your whole family.",
      },
      {
        id: "optical",
        img: "hero/vision.jpg",
        left: true,
        icon: "mdi-glasses",
        title: "optical services",
        desc:
          "Our optical team is on site every Tuesday and Friday, and only an appointment away.",
      },
      {
        id: "dental",
        img: "hero/dental1.jpeg",
        left: false,
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "Our dental team is on site every Tuesday and Friday, and only an appointment away",
      },
      {
        id: "ultrasound",
        img: "hero/ultrasound.jpeg",
        left: true,
        icon: "mdi-face-recognition",
        title: "ultrasound",
        desc:
          "Our ultrasound imaging will enable you see the progress of your unborn child, memories that will forever remain unforgettable.",
      },
    ],
  }),
  components: {
    serviceSection,
    DefaultSection,
  },
};
</script>
