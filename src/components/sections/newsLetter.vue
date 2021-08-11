<template>
    <v-parallax 
        src="@/assets/mask.jpg"
        class="news-letter"
    >
        <v-overlay color="grey lighten-5" opacity="0.7" absolute>
            <div class="black--text text-center">
                <v-row justify="center">
                    <v-col cols="8">
                        <m-heading large>
                            Subscribe to Receive News and Updates
                        </m-heading>
                        <p>
                            Sign up for our newsletter and be the first to know about the latest news and updates from Healthia.
                        </p>
                        <template>
                        <v-form v-model="valid" light>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                light
                                color="black"
                            ></v-text-field>
                            
                            <v-btn
                                class="mr-4"
                                color="primary"
                                type="submit"
                                large
                            >
                                submit
                            </v-btn>
                        </v-form>
                        </template>
                    </v-col>
                </v-row>
            </div>
        </v-overlay>
    </v-parallax>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'newsLetter',
    components:{
        mHeading
    }
}
</script>

<style lang="scss">
.news-letter{
    height: 20em !important;
}
</style>