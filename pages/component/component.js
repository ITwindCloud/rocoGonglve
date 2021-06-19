// pages/component/component.js
Page({
  data: {
    list:[
      {
        id:0,
        name:"首页",
        isSelected:true
      },
      {
        id:1,
        name:"详情",
        isSelected:false
      },
      {
        id:2,
        name:"推荐",
        isSelected:false
      },
      {
        id:3,
        name:"我的",
        isSelected:false
      },
    ]
  },
  handleItemChange(event){
    const {index} = event.detail
    let {list} = this.data
    list.forEach((v,i)=>{
      if(i === index){
        v.isSelected = true
      }
      else{
        v.isSelected = false
      }
    })
    this.setData({
      list
    })
  }
})