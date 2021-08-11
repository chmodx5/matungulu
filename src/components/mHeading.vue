<template>
    <h5
    :class="{'text-h3': xLarge, 'text-h4': large, 'text-h5': medium, 'text-h6': small}"
    class="text-capitalize font-weight-bold m-heading"
    style="font-family: HP simplified !important"
    >
        <slot>
        </slot>
    </h5>
</template>

<script>
export default {
    name: 'heading',
    props:{
        xLarge: Boolean,
        large: Boolean,
        medium: Boolean,
        small: Boolean
    }
}
</script>

<style lang="scss">
.m-heading{
    font-family: HP simplified !important;
}
</style>