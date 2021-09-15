<template>
  <v-parallax light height="400" src="https://source.unsplash.com/XZF2VZN98wY">
    <v-overlay
      absolute
      color="secondary"
      class="d-flex justify-center white--text"
    >
      <v-container class=" mx-auto" style="width:100vw">
        <div class=" ">
          <h3 class="text-h3 text-capitalize font-weight-black mb-8">
            Do you need Emergency Medical Care?
          </h3>
          <p>
            <v-btn to="/contacts" tile color="secondary" large
              >contact us</v-btn
            >
          </p>
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
