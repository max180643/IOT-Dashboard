import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'xxxxxx',
  authDomain: 'xxxxxx',
  databaseURL: 'xxxxxx',
  projectId: 'xxxxxx',
  storageBucket: 'xxxxxx',
  messagingSenderId: 'xxxxxx'
};
firebase.initializeApp(config)

new Vue({
  render: h => h(App),
  Bootstrap
}).$mount('#app')
