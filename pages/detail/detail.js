import {request} from "../../request/request/index.js";
Page({
  data: {
    detail: null
  },
  getData2(event){
    let that = this
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(
      res=>{
        console.log("success")
        that.setData({
          detail:res.data.message
        })
      }
    )
    .catch(err=>{
      console.log("failure")
      console.log(err)
    })
  }

})