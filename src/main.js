import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './registerServiceWorker'

Vue.config.productionTip = false

// https://joomla.stackexchange.com/questions/8888/jqmigrate-logging-is-active-how-to-disable
jQuery.migrateMute = true

//import global styles and js
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
import '@/assets/css/clean-scrollbar.css'


// customize cursor selection colors 
import '@/assets/css/selection.css'

import AOS from 'aos'
window.AOS = AOS

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
} else {
	console.log("google analytics is not enabled")
}

// create and mount the instance
const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
// Now the app has started!