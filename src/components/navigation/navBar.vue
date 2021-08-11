<template>
    <div>
        <v-app-bar
            app
            color="white"
            fixed
            elevate-on-scroll
            height="70"
            clipped-left
        >
            <v-container class="d-flex justify-center align-center">
                <div>
                    <v-img
                        src="./../../assets/matungulu-logo.jpg"
                        height="60"
                        width="160"
                    >
                    </v-img>
                </div>
                
                <v-spacer></v-spacer>

                <div class="d-none d-md-block">
                    <v-btn
                        class="nav-btn ml-9"
                        text
                        color="primary"
                        x-large
                        v-for="link in navLinks"
                        :to="link.link"
                        :key="link.id"
                        :ripple="false"
                        exact-active-class="my-active"
                    >
                        {{ link.name }}
                    </v-btn>
                </div>

                <div class="d-md-none">
                    <v-app-bar-nav-icon
                        @click="drawer = !drawer"
                    />
                </div>
            </v-container>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            width="300"
            app
            clipped
            temporary
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nostrum earum. Provident perspiciatis impedit voluptatum doloremque. Temporibus eum cumque perferendis repudiandae, architecto quae assumenda dolores laboriosam, error minima expedita hic.</p>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name : 'navBar',
    data: () => ({
        drawer: false,
    }),
    props: {
        navLinks: Array
    }
}
</script>

<style lang="scss">

</style>