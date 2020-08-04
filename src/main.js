/*！
 *
 *
 *                       /\_/\
 *                      / - - \
 *                     <_  X  _>  /\_/\
 *                     /       \ <_o_o_>
 *                    <_)_U_U_(_> 
 *
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './utils/mock'
import axios from 'axios'
import './assets/less/style.less'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
