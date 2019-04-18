<template>
  <div class="col">
    <div @click="handleClick" :class="['box', {'isOff': !isOn}]">
      <img :src="image">
      <p>
        {{ name }} is 
        <b v-if="isOn">On</b>
        <b v-else>Off</b>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'ControlCard',
  props: ['name', 'isOn', 'image'],
  methods: {
      handleClick () {
        this.$emit('isClick')
      }
    }
  }
</script>

<style scoped>
  .box {
    margin: 10px;
    background-color: rgb(138, 138, 138);
    color: white;
  }
  img {
    margin: 10px;
  }
  .isOff {
  background: #777777!important;
}
</style>

