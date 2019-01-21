import Vue from 'vue'
import VueMq from 'vue-mq';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueMq, {
    breakpoints: {
        "mobile": 450,
        "tabletsmall": 750,
        "tabletlarge": 1250,
        "desktop": Infinity,
    },
    defaultBreakpoint: 'md'
});

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
