const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id: 111,name: 'jake',age: 20 },
      { id: 112, name: 'jane', age: 31 },
      { id: 113, name: 'jok', age: 24 },
      ],
      counter:0
  },
  handleBtnClick(){
    //1.界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)

    //2.this.setData()
    this.setData({
      counter:this.data.counter +1
    })
  },

  minusBtnClick(){
    this.setData({
      counter:this.data.counter -1
    })
  },
  handleGetUserInfo(event) {
   console.log(event)
  },
})

//编程范式：
//1.命令式编程：原生操作DOM
//2.声明式编程：Vue/React/Angular 