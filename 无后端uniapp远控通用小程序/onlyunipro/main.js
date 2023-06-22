import Vue from 'vue'
import App from './App'

import share from 'static/share.js'//我命名为share.js
Vue.mixin(share)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
