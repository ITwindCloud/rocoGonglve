// project/index/index.js
import {request} from "../../request/request/index.js";
import {data,data2} from "../../data/series_color.js"
Page({
  data: {
    // 新闻的内容
    newsText: "欢迎大家来到宠物图鉴社！这里有很多的奥秘等你发现！",
    // 四个系列（系列series、系别attribute、组别group和排序order）以及各自具体的选项
    series: null,
    // 被选中的系列的名称（英文名)
    selectedSeriesName: "null",
    // 请求地址（数据和图片资源）
    ip:"192.168.153.1:8088",
    // 每一个系别对应一张矢量图片（颜色可变）以及该图片的颜色
    // 保存在根目录下的data/series_color.js文件中
    seriesColors:data,
    seriesIcons:data2,
    // 宠物卡片信息集合
    pets: null,
    // 系别的中文名称（如组别）
    attrChineseName:null,
    // 选中具体选项（中文名，如奉神）
    makedOption:null
    
  },
  // 选择某个系列，并作出事件响应
  selectSeries(event){
    let name = event.target.dataset.series
    let temp = "series." + name + "[" + 0 + "]"
    
    // 重复点击则取消选择
    if(name == this.data.selectedSeriesName){
      this.setData({
        selectedSeriesName:"null",
        [temp]:this.data.attrChineseName[name],
        makedOption:null
      })
    }
    else{
      this.setData({
        selectedSeriesName:name,
      })
    }// else

    // 选中了一个系列，而该系列名称不是系列名而是其具体选项的名称，则
    // 修改被选中选项（makedOption)的状态，以达到回到已经选中了一个选项的系列时，这个选项是选择状态的效果
    if(this.data.series[name][0] != this.data.attrChineseName[name]){
      this.setData({
        makedOption:this.data.series[name][0]
      })
    }
  },

  // 选择某一个系列下具体的选项，选中一个，背景颜色发生改变并且反馈到系列名称中，重复选中则取消
  makeOption(event){
    let series = event.currentTarget.dataset.series
    let option = event.currentTarget.dataset.option

    console.log(`series:${series}`)
    console.log(`option:${option}`)

    let temp = "series." + series + "[" + 0 + "]"

    
    if(!this.data.makedOption || option != this.data.makedOption){
      this.setData({
        makedOption:option,
        [temp]: option
      })
    }
    else{
      this.setData({
        makedOption:null,
        [temp]: this.data.attrChineseName[series]
      })
    }
  },

  // 加载时获取最新数据
  onLoad: function (options) {
    request({
      url:"http://" + this.data.ip + "/pet/series",
      method:"get"
    }).then(res=>{
      this.setData(
        {
          series:res.data.data,
          pets:res.data.pets
        }
      )
      let names = {}
      let k = null
      for(k of Object.keys(res.data.data)){
        names[k] = res.data.data[k][0]
      }
      console.log(names)
      this.setData({
        attrChineseName:names
      })
      // console.log(this.data.attrChineseName)
    })
  },
})