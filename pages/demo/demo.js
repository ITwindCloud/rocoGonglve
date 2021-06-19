// pages/demo/demo.js
Page({
  data: {
    inputNum: 0
  },
  handleInput: function(e){
    console.log(e);
    console.log(this.data.inputNum);
    this.setData({
      inputNum: this.data.inputNum + 1
    });
  }
})