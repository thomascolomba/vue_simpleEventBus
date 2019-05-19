import EventBus from '@/events/EventBus'
import { BusinessEventList } from '@/events/BusinessEventList'

export default {
  name: 'HelloWorld',
  mounted: function () {
    EventBus.$on(BusinessEventList().userOrderedANewSandwich, this.sandwichOrderedHandler)
  },
  beforeDestroy: function () {
    EventBus.$off(BusinessEventList().userOrderedANewSandwich, this.sandwichOrderedHandler)
  },
  methods: {
    sandwichOrderedHandler: function (payLoad) {
      console.log('event received in HelloWorld : A sandwich was ordered')
      var li = document.createElement('LI')
      var textLi = document.createTextNode('event received in HelloWorld : A sandwich was ordered, ingredients : ' + payLoad.ingredients)
      li.appendChild(textLi)
      var ul = document.getElementById('listEventsReceived')
      ul.appendChild(li)
    }
  }
}
