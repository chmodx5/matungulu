<template>
  <default-section>
    <v-row>
      <v-col md="6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit
          accusantium tempora, non, qui libero veritatis hic asperiores eaque
          quae sunt neque quos quaerat nulla velit dolore officiis enim ad?
        </p>
      </v-col>
      <v-col md="6">
        <v-row>
          <v-col cols="4" class="d-flex" sm="6">
            <contact-card icon="mdi-map-marker-outline" title="location">
              <p class="text-caption">somthing again</p>
            </contact-card>
          </v-col>
          <v-col cols="4" class="d-flex" sm="6">
            <contact-card icon="mdi-phone-outline" title="phone numbers">
            </contact-card>
          </v-col>
          <v-col cols="4" class="d-flex" sm="6">
            <contact-card icon="mdi-email-outline" title="email">
            </contact-card>
          </v-col>
          <v-col cols="4" class="d-flex" sm="6">
            <v-hover v-slot="{ hover }">
              <contact-card
                icon="mdi-account-group-outline"
                title="social media"
              >
                <div>
                  <v-btn
                    class="mx-1"
                    :class="{ 'secondary--text': hover, white: hover }"
                    icon
                    tile
                    href=""
                    ><v-icon>mdi-facebook</v-icon></v-btn
                  >

                  <v-btn
                    class="mx-1"
                    :class="{ 'secondary--text': hover, white: hover }"
                    icon
                    tile
                    href=""
                    ><v-icon>mdi-instagram</v-icon></v-btn
                  >
                  <v-btn
                    class="mx-1"
                    :class="{ 'secondary--text': hover, white: hover }"
                    icon
                    tile
                    href=""
                    ><v-icon>mdi-twitter</v-icon></v-btn
                  >
                  <v-btn
                    class="mx-1"
                    :class="{ 'secondary--text': hover, white: hover }"
                    icon
                    tile
                    href=""
                    ><v-icon>mdi-linkedin</v-icon></v-btn
                  >
                </div>
              </contact-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="mt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.837181916863!2d37.32074301431525!3d-1.2706768359666607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18258a20bca0eda5%3A0x3a04bc3cdb25c8b4!2sMatungulu%20Medical%20Health%20and%20Wellness%20Centre!5e0!3m2!1sen!2ske!4v1628831032025!5m2!1sen!2ske"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </default-section>
</template>
<script>
import defaultSection from "@/components/layouts/defaultSection.vue";
import contactCard from "@/components/contactCard.vue";
export default {
  data: () => ({}),
  components: {
    defaultSection,
    contactCard,
  },
};
</script>
