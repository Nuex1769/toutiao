<template>
	<div class="myList">
  <mu-drawer :open.sync="openL" :docked="docked">
    <mu-appbar color="#D43D3D">
    <mu-button icon slot="left" @click="openL = false">
      <mu-icon value="keyboard_arrow_left"></mu-icon>
    </mu-button>
    我的
  </mu-appbar>
  <br/>
  <br/>
<div class="myAge" @click="openL = false">
  <router-link to="/login" >
   <mu-chip class="demo-chip" color="red">
    <mu-avatar :size="32">
      <img src="../assets/logo.png">
    </mu-avatar>
    登录
  </mu-chip>
  </router-link>
</div>
   <br/>
    <mu-list>
       <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="person" color="#D43D3D"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>个人中心</mu-list-item-title>
      </mu-list-item>

    <mu-list-item button :ripple="false" @click="btnIDid0">
      <mu-list-item-action>
        <mu-icon value="grade" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的收藏</mu-list-item-title>
    </mu-list-item>


    <mu-list-item button :ripple="false" @click="btnIDid1">
      <mu-list-item-action>
        <mu-icon value="access_time" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>浏览历史</mu-list-item-title>
    </mu-list-item>


     <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="chat" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的评论</mu-list-item-title>
    </mu-list-item>

     <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="thumb_up" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的点赞</mu-list-item-title>
    </mu-list-item>

     <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="account_balance_wallet" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的钱包</mu-list-item-title>
    </mu-list-item>

     <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="reply_all" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的分享</mu-list-item-title>
    </mu-list-item>

    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="drafts" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>消息通知</mu-list-item-title>
    </mu-list-item>

     <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="settings" color="#D43D3D"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>系统设置</mu-list-item-title>
    </mu-list-item>
    
    </mu-list>
  </mu-drawer>
</div>
</template>
<script>
  import Drawers from '../components/js/Drawers.js'

	export default{
		name:"Drawer",
    data(){
      return{
         docked:false,
         openL:false
      }
    },
    created(){
       this.bbtn();
    },
    methods:{
       bbtn(){
            Drawers.$on("opens",(openG)=>{   //这里最好用箭头函数，不然this指向有问题
                 this.openL = openG   
            })
       },
       btnIDid1(){
        // this.$router.push({path:"/idid"})
          this.$emit("IDid-show")
          this.openL = false
          this.$emit("essay-list-show")
          this.$router.push({path:'/browse',query:{ii:1}})
       },
       btnIDid0(){
        // this.$router.push({path:"/idid"})
          this.$emit("IDid-show")
          this.openL = false
          this.$emit("essay-list-show")
          this.$router.push({path:'/mycollect',query:{ii:0}})
       },
    }
	}
</script>
<style lang="scss" scoped>
.myList{
  width:100%;

  .myAge{
    text-align: center;
  }
}
  
</style>
