import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// import jquery used by template theme
// import jQuery from "jquery";
// window.jQuery = window.$ = jQuery

// import global styles and js
//import bootstrap jquery and popper
import 'bootstrap' // add js functionality
import 'bootstrap/dist/css/bootstrap.min.css' // add css styles

// import template styles as component styles
import '@/assets/css/open-iconic-bootstrap.min.css'
import '@/assets/css/animate.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/owl.theme.default.min.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/aos.css'
import '@/assets/css/ionicons.min.css'
import '@/assets/css/bootstrap-datepicker.css'
import '@/assets/css/jquery.timepicker.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/icomoon.css'
import '@/assets/css/style.css'
import '@/assets/css/shared.css'
// customize cursor selection colors 
import '@/assets/css/selection.css'

require('@/assets/js/jquery-migrate-3.0.1.min.js');
// require('@/assets/js/jquery.easing.1.3.js');
// require('jquery.easing')(jQuery)
import 'jquery.easing'

import '@/assets/js/jquery.waypoints.min.js';
// import 'jquery-waypoints'

// todo solve
// generates a runtime error: Reason: TypeError: b is undefined
// import '@/assets/js/jquery.stellar.min.js';
// import 'jquery.stellar'

// owl carousel plugin
import '@/assets/js/owl.carousel.min.js';

require('@/assets/js/jquery.magnific-popup.min.js');
//import magnificPopup from 'magnific-popup'

// require('@/assets/js/aos.js');
import AOS from 'aos'
window.AOS = AOS

require('@/assets/js/jquery.animateNumber.min.js');

import scrollax from 'scrollax'
window.scrollax = scrollax
// require('@/assets/js/scrollax.min.js');

// configure google analytics if valid
// docs: https://developers.google.com/analytics/devguides/collection/gtagjs
// docs: https://matteo-gabriele.gitbook.io/vue-gtag/
const gaid = process.env.VUE_APP_GOOGLE_ANALYTICS;
if (gaid!=='') {
	console.log('enabling Google Analytics with provided GA-ID')
	const VueGtag = require('vue-gtag');
	Vue.use(VueGtag, {
		config: {
			id: gaid,
			params: {
				send_page_view: true
			}
		}
	});
}

// create and mount the instance
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// Now the app has started!