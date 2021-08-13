<template>
  <v-parallax light height="400" src="https://source.unsplash.com/XZF2VZN98wY">
    <v-overlay
      absolute
      color="secondary"
      class="d-flex justify-center white--text"
    >
      <v-container class=" mx-auto" style="width:100vw">
        <div class=" ">
          <h3 class="text-h3 text-capitalize font-weight-black">
            Do you need Emergency Medical Care?
          </h3>
          <p class="text-h6 font-weight-regular">
            You can call us through the Call Centre on 0719073000 / 0732163000 /
            020 6303000 or Our Accidents and Emergency Department on 0719073051
          </p>
          <p><v-btn tile color="secondary" large>click me</v-btn></p>
        </div>
      </v-container>
    </v-overlay>
  </v-parallax>
</template>
<style lang="scss" scoped>
.v-parallax_content {
  padding: 0 !important;
}
.ova ::before {
  padding: 0 !important;
}
</style>
