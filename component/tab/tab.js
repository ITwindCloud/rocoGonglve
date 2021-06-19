// component/tab/tab.js
Component({
  properties: {
    list: {
      type:Array,
      value:[]
    }
  },
  data: {

  },
  methods: {
    itemChange(event){
      const {index} = event.currentTarget.dataset
      console.log(index)
      this.triggerEvent("handleItemChange",{index})
    }
  }
})
