<template>
  <div class="home">
    <p>Click on the below button to order a sandwich</p>
    <button v-on:click="orderSandwich">I want to order a sandwich !</button>
  <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventBus from '@/events/EventBus'
import { BusinessEventList } from '@/events/BusinessEventList'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    orderSandwich: function (event) {
      var eventPayLoad = { ingredients: 'bread/avocado/tomato/tuna' }
      console.log('Emitting an event from Home')
      EventBus.$emit(BusinessEventList().userOrderedANewSandwich, eventPayLoad)
    }
  }
}
</script>
