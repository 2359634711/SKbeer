Component({
  properties: {
    //props
    selectedIndex: {
      type: Number,
      value: 0
    },
    navBtnList: {
      type: Object,
      value: [
        {
          url: '/pages/home/home',
          img: './res/img/nav-icon-home-pre.png',
          selectedImg: '',
          title: '首页',
          havT: true
        }, 
        {
          url: '/pages/refer/refer',
          img: './res/img/tuijian.png',
          selectedImg: '',
          title: '推荐有奖',
          havT: false
        },{

          url: '/pages/order/order',
          img: './res/img/nav-icon-order.png',
          selectedImg: '',
          title: '订单',
          havT: true
        },{

          url: '/pages/user/user',
          img: './res/img/nav-icon-user.png',
          selectedImg: '',
          title: '我的',
          havT: true
        }
      ],
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    navTo: function(item) {
      let index = item.currentTarget.dataset.index;
      console.log(this.data.navBtnList[index]);
      wx.redirectTo({
        url: this.data.navBtnList[index].url,
      })
    }
  }
})