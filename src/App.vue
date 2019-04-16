<template>
  <div id="app">
     <!-- 搜索 -->
      <Search v-show="searchShowBtn" @search-hide="searchHide"></Search>
      <!-- 管理频道 -->
      <Manage 
      :tabs="tabs" 
      :addTabs="addTabs" 
      v-show="ManageShow" 
      @manage-hide-btn="manageHideBtn" 
      @push-dec-tabs="DecTabs"
      @push-add-tabs="AddTabs">
      </Manage>
    <!-- 头部 -->
    <div class="header">
    <div class="header-top">
       <mu-appbar style="width: 100%;" color="#D43D3D">
         <mu-button icon slot="left" @click="drawerShow">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        今日头条
        <mu-button icon slot="right" @click="seachShow">
          <mu-icon value="search" color="#FFF"></mu-icon>
        </mu-button>
      </mu-appbar>

     
    </div>
  </div>
    <!-- 导航 -->
    <div class="headerBar">
      <div class="addIcon" @click="manageShowBtn">
              <mu-button icon slot="right">
                <mu-icon value="add" color="#D43D3D" size="36"></mu-icon>
              </mu-button>
          </div>
      <div class="headerList" ref="menuWrapper">
        <div class="tabs"> 
          <div class="tab" :class="{tabStyle:active === index}" v-for="(tab,index) in initialTabs" :key="index" @click="clickBar(tab.id,index)">
            {{tab.text}}
          </div>
        </div>
         <!-- <mu-tabs :value.sync="active" color="#fff">
            <mu-tab v-for="(tab,index) in tabs" :key="index" @click="clickBar(tab.id)">
                {{tab.text}}
          </mu-tab>
          </mu-tabs> -->
        </div>
    </div>
    <!-- 抽屉栏 -->
    <drawer @IDid-show="IDidShow = true" @essay-list-show="href = false" @send-i="i = 1"></drawer>
    <!-- 新闻列表 -->
        <Video v-if="videoShow" :videos="video"></Video>
        <EssayList v-else 
        :tabbar='tabbar' 
        :href="href" 
        @browse-arr="browseArr" 
        @href-show="href = true"
        @collect-arrs="collectArrs">
        </EssayList>
        <IDid :IDidShow="IDidShow" :browse="browse" @i-did-show="getBack" :collect="collect"></IDid>
        <!-- <router-view :IDidShow="IDidShow" :browse="browse" @i-did-show="getBack"></router-view> -->
  </div>
</template>

<script>
  import Drawer from './components/Drawer'
  import Drawers from './components/js/Drawers.js'
  import EssayList from './components/EssayList'
  import Video from './components/Video'
  import BScroll from 'better-scroll'
  import IDid from './components/IDid'
  import Search from './components/Search'
  import Manage from './components/Manage'


export default {

  name: 'App',
  data () {
        return {
          open: false,
          href:true,
          videoShow:false,
          IDidShow:false,
          searchShowBtn:false,
          ManageShow:false,
          military:{},
          amusement:{},
          headline:{},
          video:{},
          art:{},
          sat:{},
          pe:{},
          video:{},
          tabbar:{},
          active: 0,
          oneheadline:"",
          like:[],
          collect:[],
          comment:[],
          browse:[],
          tabs:[
            {id:1,text:"头条"},
            {id:2,text:"军事"},
            {id:3,text:"娱乐"},
            {id:4,text:"艺术"},
            {id:5,text:"科技"},
            {id:6,text:"体育"},
            {id:7,text:"经济"},
            {id:8,text:"视频"}
        ],
        decTabs:[],
        addTabs:[]
    }
  },
  beforeMount(){
        this.tabbar = this.headline
  },
  components:{
      "drawer":Drawer,
      EssayList,
      Video,
      IDid,
      Search,
      Manage
  },
  computed:{
     initialTabs(){
      this.decTabs = this.tabs
      return this.decTabs
     }
  },
  methods:{
    clickBar(id,index){
      this.active = index
      switch(id)
      {
      case 1:
        this.tabbar = this.headline
        this.videoShow = false

        break;
      case 2:
        this.tabbar = this.military
        this.videoShow = false

        break;
      case 3:
        this.tabbar = this.amusement
        this.videoShow = false

        break;
      case 4:
        this.tabbar = this.art
        this.videoShow = false

        break;
      case 5:
        this.tabbar = this.sat
        this.videoShow = false

        break;
      case 6:
        this.tabbar = this.pe
        this.videoShow = false

        break;
      case 7:
        this.tabbar = this.sat
        this.videoShow = false
        break;
      case 8:
        this.videoShow = true
        break;

      // default:
        }
    },
    AddTabs(index){
      let add = this.addTabs[index]
      this.decTabs.push({
        id:add.id,
        text:add.text
      })
      this.addTabs.splice(index,1) 
    },
    DecTabs(index){
      // let tabT = ""
      // this.tabs.map((t) => {
      //   if(t.id === id){
      //     tabT = t
      //     return tabT
      //   }
      // })
      // console.log(tabT)
      let dec = this.decTabs[index]
      this.decTabs.splice(index,1)
      this.addTabs.push({
          id:dec.id,
          text:dec.text
      })
      console.log(dec,this.addTabs)
    },
    drawerShow(){
      Drawers.$emit("opens", this.open = true)
    },
    sendBrowse(item){
      this.href = false
      this.browse.push({item})
    },
    browseArr(item){
      // console.log(this.browse)
      // for(let i = 0; i<this.browse.length; i++){
         
      //   if( this.browse[i] === item){
      //    console.log(this.browse[i])
      //     return
      //   }else{
      //     this.browse.push({item})
      //   }
      // }
      this.browse.push({item})
      this.href = false
    },
    getBack(){
      this.IDidShow = false
      this.href = true
    },
    collectArrs(item){
      this.collect.push({item})
    },
    seachShow(){
      this.searchShowBtn = true
      this.href = false
    },
    searchHide(){
       this.searchShowBtn = false
        this.href = true
    },
    manageShowBtn(){
      this.ManageShow = true
      this.href = false
    },
    manageHideBtn(){
      this.ManageShow = false
      this.href = true
    }
  },
    created() {
    this.axios.get("/api/military").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.military = res.data;
      }
    });
    this.axios.get("/api/amusement").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.amusement = res.data;
      }
    });
    this.axios.get("/api/headline").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.headline = res.data;
        this.tabbar = res.data;
      }
    });
    this.axios.get("/api/sat").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.sat = res.data;
      }
    });
    this.axios.get("/api/pe").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.pe = res.data;
      }
    });
    this.axios.get("/api/art").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.art = res.data;
      }
    });
     this.axios.get("/api/video").then(res => {
      res = res.data;
      if (res.erron === 0) {
        this.video = res.data;
      }
    });
    // const url = 'https://api.isoyu.com/index.php/api/Video/video_type?type=2&page=10'
    //    this.axios.get(url).then(response => {
    //     let res = response.data
    //     if (res.code === 1) {
    //           this.video = res.data;
    //       }
    // });
     this.$nextTick(() => { // 数据更新完毕后,组件重新渲染完毕
          // 避免内存泄露
      if (!this.menuScroll) {
          // 保证他是个单例
          this.menuScroll = new BScroll(this.$refs.menuWrapper, {
              click: true,scrollX: true// 允许点击
          })
      } else {
          this.menuScroll.refresh() // 重新计算高度
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  #app{
      width:100%;
      height:100%;
      .header{
        position: fixed;
        width: 100%;
        top:0;
        text-align:center;
        z-index:10;
       }
      .headerBar{
        width:100%;
        height:48px;
        position:fixed;
        top:56px;
        left:0px;
        z-index:10; 
        overflow:hidden;
        border-bottom:2px solid #999; 
        box-shadow:1px 1px 1px #999; 

        .headerList{
            width:100%;
            height:48px;
            background:#F4F5F6;
           
            .tabs{
              width:624px;
              display:flex;
              .tab{
                flex:0 0 72px;
                text-align:center;
                box-sizing: border-box;
                width:72px;
                height:48px;
                font-size:18px;
                line-height:48px;
              }
              .tabStyle{
                color:rgb(240,20,20);
                border-bottom:3px solid rgb(240,20,20);
              }
            }
        }
        .addIcon{
                position:fixed;
                top:56px;
                right:0;
                width:48px;
                height:46px;
                background:#F4F5F6;
                z-index:99;
              }
      }

}
</style>
