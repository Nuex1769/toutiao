<template>
	<div class="manage">
		<div class="manageHeader">
			<mu-appbar style="width: 100%;" color="#D43D3D">
	         <mu-button icon slot="left" @click="managehideBtn">
	          <mu-icon value="keyboard_arrow_left"></mu-icon>
	        </mu-button>
	        频道管理
	        <mu-button icon slot="right">
	        </mu-button>
	      </mu-appbar>
		</div>
		<div class="btnList">
			<span>点击删除以下频道</span>
			<div class="btn" v-for="(tab,index) in tabs" :key="tab.id" @click="pushDecTabs(index)">
				{{tab.text}}
			</div>
			<span>点击添加以下频道</span>
			<div class="btn" v-for="(t,i) in addTabs" :key="t.id" @click="pushAddTabs(i)">
				{{t.text}}
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Manage",
		props:['tabs','addTabs'],
		methods:{
			managehideBtn(){
				this.$emit("manage-hide-btn")
			},
			pushDecTabs(i){
				this.$emit("push-dec-tabs",i)
			},
			pushAddTabs(i){
				this.$emit("push-add-tabs",i)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.manage{
		position:relative;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background:#fff;
		z-index:99;
	
	.btnList{
		display:flex;
		flex-wrap:wrap;
		width:100%;
		span{
			padding-left:10px;
			width:100%;
			height:24px;
			font-size:12px;
			background:#f5f5f5;
		}
		.btn{
			margin:9px;
			text-align:center;
			font-size:16px;
			border:1px solid #ccc;
			width:20%;
			height:34px;
			line-height:34px;
		}
	  }
	}
</style>