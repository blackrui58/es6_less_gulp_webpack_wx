// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  	isBottom:false,
    //默认的老师数据为空,当页面加载的时候,给老师数据赋值
  	teachers:[],
    filter: {
      zhineng: 'active',
      haoping: '',
      xueke: '',
      yanzhi: ''
    },
    datas: [
      {
        id: 1,
        avatar: '../../images/teacher2.jpg',
        name: '李静',
        haoping: 99,
        yanzhi: 92,
        xueke: 1,
        intro: '从事网站设计行业11年,Adobe中国认证设计师,拥有多年Fireworks、Flash、Dreamweaver和Web网站前端授课经验。担任过北京中搜网络技术股份有限公司高级UI设计师职务，负责公司整体网站版面策划、设计与制作。'
      },
      {
        id: 2,
        avatar: '../../images/teacher4.jpg',
        name: '蔡水红',
        haoping: 98,
        yanzhi: 95,
        xueke: 1,
        intro: '7年的web前端开发经验 在公司主要负责网站设计与前端开发 有丰富教学经验；HTML5就业指导专家 '
      },
      {
        id: 3,
        avatar: '../../images/teacher1.jpg',
        name: '江山',
        haoping: 100,
        yanzhi: 100,
        xueke: 3,
        intro: '北京大学 软件工程硕士，8年互联网开发制作经验。上市集团核心移动研发团队成员，有丰富教学经验。IT行业就业指导专家，中科院国家信息安全重点实验室项目组长'
      },
      {
        id: 4,
        avatar: '../../images/teacher3.jpg',
        name: '李方园',
        haoping: 96,
        yanzhi: 90,
        xueke: 3,
        intro: '业内6余年工作经验，资深互联网行业软件技术开发人士；有丰富教学经验  IT行业就业指导专家'
      },
      {
        id: 5,
        avatar: '../../images/20161215110546236.jpg',
        name: '穆梅',
        haoping: 96,
        yanzhi: 92,
        xueke: 2,
        intro: '曾任职中企动力设计服务运营总监，业内10余年工作经验，资深互联网行业产品运营人士。曾举办2届“十佳设计师大赛”活动，提升千余名设计师综合设计能力'
      }
    ]
    // var f = {
    //   zhineng: '',
    //   haoping: '',
    //   xueke: '',
    //   yanzhi: ''
    // };
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //将该数据赋值给变量teacher
    this.setData({
      teachers: this.data.datas
    })
  },
  //点击每个老师之后的运行函数

 
  //点击导航按钮之后运行的函数
  fliterSort:function(evt){
    console.log('点击了')
    //通过在html中添加自定义属性,在这里获取,通过对获取属性值得判断,来获取到具体点击了哪个
    // console.log(evt.currentTarget.dataset.sort)
    //d代表的是选中的元素的自定义属性sort的属性值
    var d = evt.currentTarget.dataset.sort
    //将所有的元素的active样式清空-->然后对选中的元素添加类
    var f = {
      zhineng:'',
      haoping:'',
      xueke:'',
      yanzhi:''
    };
    f[d] = 'active';
    //定义一个名为shuxing的变量
    var shuxing = "";
    //定义一个newarr的数组
    var newarr = [];
    //用switch函数进行相关的匹配
    //当获取的信息点击的是哪个元素时,执行对应的操作,即将数组按什么排序
    switch(d){
      case 'zhineng':
        //当变量d是zhineng的时候,执行下面的操作
        shuxing = 'id';
          //将数组进行排序
          //则newarr就是原数组经过排序之后生成的新数组
          console.log('1')
        newarr = this.data.teachers.sort(function(n,m){
          return n.id - m.id;
        });
        break;
      case 'haoping':
        shuxing = 'haoping';
        console.log('2')
        newarr = this.data.teachers.sort(function(n,m){
          return n.haoping - m.haoping
        });
        break;
      case 'xueke':
        shuxing = 'xueke';
        console.log('3')
        newarr = this.data.teachers.sort(function(n,m){
          return n.xueke - m.xueke
        });
        break;
      case 'yanzhi':
        shuxing = 'yanzhi';
        console.log('4')
        newarr = this.data.teachers.sort(function(n, m){
          return n.yanzhi - m.yanzhi
        });
        break;
      
      
    }
    this.setData({
      filter: f,
     
      teachers: newarr
    })

  },

 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  	console.log('到达底部了')
  	wx.showToast({
  		title:'正在加载数据',
  		icon:'loading'
  	})
    //设置一个定时器,两秒之后往里面添加数据
    setTimeout(() => {
      console.log()
      this.setData({
        teachers: this.data.teachers.concat(this.data.datas)
      })
    },1500)
		this.setData ({
			isBottom : true
		})
  	
  },
  getInfo:function(evt){
    //通过事件函数来获取自定义属性的值//而在自定义属性中,传入的是接收到的id值
    // console.log(evt.currentTarget.dataset.tid)
    var tid = evt.currentTarget.dataset.tid
    //跳转到老师具体页面//通过参数显示不同老师的信息
    wx.navigateTo({
      url: "/pages/eachteacher/eachteacher?tid=" + tid
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})