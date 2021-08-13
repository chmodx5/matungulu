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
          "How good it is to have a clinic where you can walk in during an emergency and be able to access professional medical care on an urgent basis. You don’t have to worry about long waits and you can wizard the clinic into the clinic any time of day and week.",
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
        id: "laboratory",
        img: "hero/lab.jpeg",
        left: false,
        icon: "mdi-microscope",
        title: "laboratory",
        desc:
          "Our laboratory is well equipped and our lab technicians well qualified to perform laboratory procedures and give you reliable results.",
      },
      {
        id: "pharmacy",
        img: "hero/pharmacy.jpg",
        left: true,
        icon: "mdi-pill",
        title: "inhouse pharmacy",
        desc:
          "Our pharmacy is well stocked to provide a wide selection of medications for any ailment you might have.",
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
        id: "physiotherapy",
        img: "hero/physio.jpg",
        left: false,
        icon: "mdi-human-wheelchair",
        title: "physiotherapy",
        desc:
          "In your journeys, you might get many injuries that cannot be avoided. It is best to find a clinic that can service your injuries at the time you need it most. We can even offer a comprehensive treatment that combines exercise and rehabilitation therapy so that your injuries can he properly.",
      },
      {
        id: "dental",
        img: "hero/dental1.jpeg",
        left: true,
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "Our dental team is on site every Tuesday and Friday, and only an appointment away",
      },
      {
        id: "ultrasound",
        img: "hero/ultrasound.jpeg",
        left: false,
        icon: "mdi-face-recognition",
        title: "ultrasound",
        desc:
          "Our ultrasound imaging will enable you see the progress of your unborn child, memories that will forever remain unforgetable.",
      },
    ],
  }),
  components: {
    serviceSection,
    DefaultSection,
  },
};
</script>
