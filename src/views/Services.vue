<template>
  <default-section title="the services we provide">
    <service-section
      v-for="(service, i) in services"
      :key="i"
      :title="service.title"
      :img="service.img"
      :left="service.left"
      :icon="service.icon"
      :id="service.id"
      :list="service.list"
      class="d-flex text-justify"
    >
      <p>
        {{ service.desc }}
      </p>
      <div v-if="service.list">
        <p class=" my-0" v-for="(list_item, i) in service.list" :key="i">
          - {{ list_item }}
        </p>
      </div>
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
        title: "out-patient",
        desc:
          "Matungulu Medical Health and Wellness Centre is committed to quality healthcare provision ranging from routine health examination to managing chronic conditions. Our team of qualified and highly experienced healthcare personnel are committed to promote good health through health screening, wellness and prevention, diagnosis, treatment and health education.Our outpatient services include: ",
        list: [
          "General Consultation",
          " Laboratory",
          "Pharmacy",
          "Mother and Child Health",
          "Nutritional Counselling",
        ],
      },
      {
        id: "inpatient",
        img: "services/inpatient.jpg",
        left: true,
        icon: "mdi-bed-outline",
        title: "in-patient",
        desc:
          "MMHWC is a 17 bed facility operating 24 hours. We have clean and hygienic wards designed to meet all patient’s needs. We are committed to providing the best care during hospital stay through excellent services from a qualified team of healthcare personnel. We admit clients with various medical cover plans including NHIF as well as cash paying clients.",
      },
      {
        id: "maternity",
        img: "services/delivery-bed.jpg",
        left: false,
        icon: "mdi-mother-nurse",
        title: "maternity",
        desc:
          "We place emphasis on safety and quality care during and after the delivery process. We have a team of experienced medical professionals geared towards providing exceptional, customized and compassionate maternal services.",
      },
      {
        id: "optical",
        img: "hero/vision.jpg",
        left: true,
        icon: "mdi-glasses",
        title: "optical services",
        desc:
          "We provide the best eye care services for the entire family. Our primary service include comprehensive eye examination that analyzes the health as well as the visual function. These services are provided by experienced professionally trained medical staff.",
      },
      {
        id: "dental",
        img: "services/dental.jpg",
        left: false,
        icon: "mdi-tooth-outline",
        title: "dental services",
        desc:
          "Matungulu Medical runs a fully equipped and modern dental clinic offering a wide range of dental services. We offer the best, affordable and professional dental care to children and adults. Come get that healthy white smile here.",
      },
      {
        id: "ultrasound",
        img: "services/ultrasound.jpg",
        left: true,
        icon: "mdi-face-recognition",
        title: "Imaging Services",
        desc:
          "Matungulu medical offers a wide range of ultrasound tests to aid in the best clinical management and recommended best course of treatment",
      },
    ],
  }),
  components: {
    serviceSection,
    DefaultSection,
  },
  mounted: function() {
    if (this.$route.params.id) {
      this.$vuetify.goTo("#" + this.$route.params.id);
    } else {
      this.$vuetify.goTo(0);
    }
  },
};
</script>
