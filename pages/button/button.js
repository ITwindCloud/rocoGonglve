// pages/button/button.js
Page({
  
  data: {
    user_info:null
  },
  get_user_info(event){
    console.log(event)
    this.setData({
      user_info: JSON.parse(event.detail.rawData)
    })
  }
})