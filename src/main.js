import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', echarts)

Vue.use(iView)
Vue.use(echarts)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
}).$mount('#app')
