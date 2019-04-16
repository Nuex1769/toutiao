<template>
	<div class="IDid" v-show="IDidShow">
		<div class="IDidHeader">
			<mu-appbar style="width: 100%;" color="#D43D3D">
	         <mu-button icon slot="left" @click="backGo">
	          <mu-icon value="keyboard_arrow_left"></mu-icon>
	        </mu-button>
	        <mu-button icon slot="right">
	          <mu-icon value="search" color="#FFF"></mu-icon>
	        </mu-button>
	      </mu-appbar>
		</div>
		<div class="ITabbar">
			<ul class="barUl">
				<li :class="[{checked:index === ishow},{ckeck:index === ii}]" v-for="(bar,index) in barLists" @click="playClass(index)">
					<router-link :to="bar.url" exact>{{bar.name}}</router-link>
				</li>
			</ul>
		</div>
		<div class="IMain">
			<router-view :browses="browse" :collect="collect" :i="i"></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'IDid',
		props:['IDidShow','browse','collect'],
		data(){
			return{
				i:"",
				ii:"",
				collectShow:true,
				barLists:[
					{name:"收藏",url:"/mycollect"},
					{name:"历史",url:"/browse"},
					{name:"评论",url:"/mycomment"},
					{name:"点赞",url:"/mylike"},
				]
			}
		},
		computed:{
			ishow(){
				this.i = this.$route.query.ii
				return this.i
			}
		},
		methods:{
			playClass(index){
				this.ii = index
			},
			backGo(){
			     this.$emit("i-did-show")
			     this.$router.push({path:'/'})
			     this.ii = ""
			},
		}
	}
</script>
<style lang="scss" scoped>
	.IDid{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index:88;
		background:#fff;
		.IDidHeader{
			position:fixed;
			top:0;
			width:100%;
			height:56px;
		}
		.ITabbar{
			position:fixed;
			top:56px;
			width:100%;
			height:46px;
		}
		.barUl{
			display:flex;
			width:100%;
			height:100%;
			border-bottom:1px solid rgba(7,17,28,0.3);
			li{
				flex:1;
				font-size:16px;
				line-height:46px;
				text-align:center;
				a{
					color:#505050;
					display:inline-block;
				}
			}
		}
		.IMain{
			margin-top:103px;
		}
		.checked{
			border-bottom:2px solid #D43D3D;
			.router-link-exact-active{
				color:#D43D3D
			}
		}
		.ckeck{
			border-bottom:2px solid #D43D3D;
			.router-link-exact-active{
				color:#D43D3D
			}
		}
	}
</style>