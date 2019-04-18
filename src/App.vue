<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Dashboard</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <data-card v-for="data in dataCollection" :key="data.name" :name="data.name" :value="data.value"/>
      </div>
      <div class="row">
        <control-card v-for="device in deviceCollection"  @isClick="triggerState(device)" :key="device.name" :name="device.name" :isOn="device.isOn" :image="device.image"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { database } from 'firebase'
  import DataCard from '@/components/DataCard'
  import ControlCard from '@/components/ControlCard'
  export default {
    name: 'app',
    components : {
      DataCard,
      ControlCard
    },
    data () {
      return {
        dataCollection: [
          {name: 'Temperature', value: 20},
          {name: 'Time', value: '13:00'},
          {name: 'Status', value: 'Connected'},
        ],
        deviceCollection: [
          {name: 'Fan', isOn: false, image: require('./assets/fan.png')},
          {name: 'Light', isOn: false, image: require('./assets/sun.png')},
        ]
      }
    },
    methods: {
      triggerState (device) {
      device.isOn = !device.isOn
      database().ref(device.name).set(device.isOn)
      }
    }
  }
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  height: 150px;
}
</style>
