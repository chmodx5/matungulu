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
        icon: "mdi-home",
        title: "some title",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum atque sed expedita eos aut vero deleniti, vel voluptas blanditiis harum aliquid quisquam nemo laudantium aspernatur quo in quidem quia?",
        left: true,
      },
    ],
  }),
  components: {
    serviceSection,
  },
};
</script>
