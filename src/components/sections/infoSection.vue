<template>
    <div>
        <v-row 
            class="info-section-row"
            align="center"
        >
            <v-col
                cols="12"
                md="6"
                class="d-none d-md-block"
                style="height:100%"
            >
                <v-img 
                    src="@/assets/mask.jpg"
                    height="100%"
                    width="100%"
                    :aspect-ratio="16/9"
                >

                </v-img>
            </v-col>
            <v-col>
                <v-row
                    justify="center"
                >
                    <v-col 
                        cols="12" 
                        sm="8"
                        md="9"
                        class="text-center"
                    >
                        <div >
                            <m-heading large>
                                a few words about me
                            </m-heading>
                            <p class="text-body-1 mb-6" style="font-family: HP simplified !important">
                                Healthia City Clinic is a Federally Qualified Health Center providing high-quality healthcare services.
                            </p>
                            <p class="mb-9">
                                We take a multifaceted approach to health care that allows us to provide superior care, across multiple disciplines, to treat the whole person. Our services include family medicine, dentistry, behavioral health, and a full-service pharmacy, all under one roof.
                            </p>
                            <p>
                                <v-btn
                                    color="primary"
                                    large
                                >
                                    learn more
                                </v-btn>
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'infoSection',
    components: {
        mHeading
    }
}
</script>

<style lang="scss">
.info-section-row{
    height: 80vh;
}
</style>