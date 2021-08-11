<template>
    <colored-section sectionHeading="institutes & departments">
        <v-container class="mt-6">
            <v-row
                justify="center"
            >
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-for="k in 6"
                    :key="k"
                >
                    <v-card
                        flat
                        color="transparent"
                        class="mb-6"
                    >
                        <v-img
                            src="@/assets/mask.jpg"
                            :aspect-ratio="1/1"
                        >
                        </v-img>
                        <m-heading medium class="mt-3 primary--text">
                            Anesthesiology & Pain Management
                        </m-heading>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </colored-section>
</template>

<script>
import mHeading from '@/components/mHeading.vue'
import ColoredSection from '../layouts/coloredSection.vue'

export default {
    name: 'institutes',
    components:{
        mHeading, ColoredSection
    }
}
</script>
        