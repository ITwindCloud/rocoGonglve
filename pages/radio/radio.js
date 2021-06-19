// pages/radio/radio.js
Page({
  data: {
    favorite: "香蕉",
    liking: null,
    is_submit: false
  },
  handleFavoriteFruit(event){
    console.log(event.detail.value)
    this.setData({
      favorite:event.detail.value
    })
  },
  handleLikedFruit(event){
    console.log(event.detail.value)
    this.setData({
      liking:event.detail.value
    })
  },
  submit(event){
    this.setData({
      is_submit:true
    })
  }
})