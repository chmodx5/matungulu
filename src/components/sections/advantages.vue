<template>
    <div class="py-16">
        <v-container>
            <m-heading large class="text-center mb-16">our advantages</m-heading>
            <v-row justify="center">
                <v-col
                    cols="12"
                    sm="8"
                    md="3"
                    v-for="k in 4"
                    :key="k"
                >
                    <div class="text-center px-9">
                        <div class="d-flex justify-center mb-6">
                            <v-sheet 
                                color="primary"
                                height="70"
                                width="70"
                                shaped
                                class="d-flex align-center justify-center"
                            >
                                <h1>d</h1>
                            </v-sheet>
                        </div>
                        <m-heading medium class="mb-6">modern equipment</m-heading>
                        <p>We employ recognized medical specialists from all over the world</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'advantages',
    components:{
        mHeading
    }
}
</script>