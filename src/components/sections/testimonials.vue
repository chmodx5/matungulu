<template>
    <div class="py-16">
        <v-container>
            <m-heading large class="text-center mb-6">
                testimonials
            </m-heading>
            <v-row
                justify="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                    v-for="k in 3"
                    :key="k"
                    class="px-9"
                >
                    <v-icon
                        color="primary"
                        x-large
                    >
                        mdi-home
                    </v-icon>
                    <p style="font-style:italic !important">
                        Dr. Douglas was very helpful and willing to answer all the questions and take the time to make suggestions. Thank you for your kindness and help.
                    </p>
                    <div class="d-flex ">
                        <div>
                            <v-img
                                height="50"
                                width="50"
                                :aspect-ratio="1/1"
                                src="@/assets/mask.jpg"
                                style="border-radius: 50%;"
                            ></v-img>
                        </div>
                        <div class="text-capitalize px-6">
                            <p class="ma-0 secondary--text">
                                else someone
                            </p>
                            <small>
                                patient
                            </small>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'testimonials',
    components: {
        mHeading
    }
}
</script>