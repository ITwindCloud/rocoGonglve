// component/news/news.js
Component({
  options:{
    styleIsolation:"isolated" // 组件内外的样式互不影响
  },
  externalClasses:["outerclass"], // 引入外部样式类
  properties: {
    content:{
      type:String,
      value:"今天天气有点小糟糕，但是我们的心情不会糟糕，因为我们有洛克王国相伴",
    }
  },
  data: {
    leftPos: 320,
    width: 0 ,
    screenWidth: 500
  },
  ready:function(){
    this.attached_scroll_content()
    setTimeout(()=>{
      this.scroll_content()
    },3000)
  },
  methods: {
    // 让新闻内容滚动起来，最初隐藏在最右边，逐渐往左边移动至全部，然后会又恢复最初的状态，反反复复
    scroll_content(){
      setInterval(()=>{
        if (this.data.leftPos < -1 * this.data.width ){
          this.setData({
            leftPos: this.data.screenWidth
          })
        }
        else{
          this.setData({
            leftPos: this.data.leftPos - 3
          })
        }
      },100)
    },
    attached_scroll_content(){
      // 文字元素的长度、屏幕的长度，单位为px
      let widthElem = 0
      let screenWidth = 0
      const textElem = this.createSelectorQuery()
      textElem.select(".text").boundingClientRect()
      textElem.select(".box").boundingClientRect()
      textElem.selectViewport()
      textElem.exec(res=>{
        widthElem = res[0].width
        screenWidth = res[1].width
        // console.log(`widthElem:${widthElem}`)
        // console.log(`screen_width:${screenWidth}`)
      })
      setTimeout(()=>{
        this.setData({
          width:widthElem ? widthElem:500,
          leftPos:screenWidth,
          screenWidth
        })
      },3000)
    },
  },
  // 组件实例进入页面结点时触发
  
})
