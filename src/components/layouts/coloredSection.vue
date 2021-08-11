<template>
    <div class="py-16 grey lighten-3">
        <m-heading large class="text-center">
            {{ sectionHeading }}
        </m-heading>
        <slot></slot>
    </div>
</template>

<script>
import mHeading from '@/components/mHeading.vue'

export default {
    name: 'coloredSection',
    components: {
        mHeading
    },
    props: {
        sectionHeading: String
    }
}
</script>