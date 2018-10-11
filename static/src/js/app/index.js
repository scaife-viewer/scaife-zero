import Vue from 'vue';

Vue.config.productionTip = false;

import store from './store';
import App from './App.vue';

export default () => {
  if (document.getElementById('app')) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      render: h => h(App),
      store
    });
  }
};
