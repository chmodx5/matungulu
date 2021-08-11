import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes:{
            light: {
                primary: '#4CA440',
                secondary: '#063C1A'
            }
        }
    }
})

export default new Vuetify({
});