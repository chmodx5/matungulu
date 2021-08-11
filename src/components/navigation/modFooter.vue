<template>
    <v-footer
        color="secondary lighten-1"
        padless
        dark
        class="pt-16"
    >
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" sm="6" md="3">
                    <m-heading medium>
                        about us
                    </m-heading>
                    <p>
                        Healthia City Clinic is the leading healthcare provider in the region that also stands committed to providing for the ever-growing and diverse healthcare needs of the individuals in our community.    
                    </p>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <m-heading medium>
                        quick links
                    </m-heading>
                    <div class="d-flex flex-column flex-wrap">
                        <v-btn
                            v-for="link in links"
                            :key="link"
                            color="white"
                            text
                            small
                            class="my-0"
                        >
                        {{ link }}
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <m-heading medium>
                        contact information
                    </m-heading>
                   <p>
                       2130 Fulton Street San Diego, CA 94117-1080 USA
                   </p>
                   <p>
                       1-800-1324-765, 1-800-7653-098
                   </p>
                   <p>
                       info@demolink.org
                   </p>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <m-heading medium>
                        subscribe
                    </m-heading>
                    <p>
                        Sign up to our newsletter and be the first to know about the latest news, special offers, and events.
                    </p>
                    <v-form v-model="valid" >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                        
                        <v-btn
                            class="mr-4"
                            color="primary"
                            type="submit"
                            large
                        >
                            subscribe
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
            <v-row
                justify="center"
                no-gutters
            >
                
                <v-col
                    class=" py-4 text-center white--text"
                    cols="12"
                >
                {{ new Date().getFullYear() }}
                    <div class="d-flex justify-center">
                        <router-link to="/" style="text-decoration: none;">
                            <v-sheet
                                height="50"
                                width="150"
                                class="d-flex align-center justify-center mt-3"
                                shaped
                                color="grey darken-4"
                                elevation="3"
                                outlined
                            >
                                <m-heading large>
                                    <span class="teal--text">Ch</span><span>Mod</span><span class="teal--text">.</span>
                                </m-heading>
                            </v-sheet>
                        </router-link>
                    </div>
                    <span class="teal lighten-3">    
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'modFooter',
    components: {
        mHeading
    },
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
}
</script>