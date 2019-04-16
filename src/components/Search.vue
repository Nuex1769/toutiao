<template>
	<div class="search">
		<div class="search-top">
			<mu-appbar style="width: 100%;height: 100%" color="#D43D3D">
	         <mu-button icon slot="left" @click="backGo">
	          <mu-icon value="keyboard_arrow_left"></mu-icon>
	        </mu-button>
	        <input class="search" type="text" placeholder="搜索最新资讯..">
	        <mu-button icon slot="right">
	          <mu-icon value="search" color="#FFF"></mu-icon>
	        </mu-button>
	      </mu-appbar>
		</div>
		<div class="search-bottom">
			<div class="browse">
				<span>历史记录:</span>
				<ul>
					<li>社保缴费多少年</li>
					<li>"六亲"是哪六亲</li>
					<li>故宫建于那个朝代</li>
					<li>过年红包地域差</li>
				</ul>
			</div>
			<div class="recommend">
				<span>推荐热点:</span>
				<ul>
					<li>社保缴费多少年</li>
					<li>"六亲"是哪六亲</li>
					<li>故宫建于那个朝代</li>
					<li>过年红包地域差</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Search',
		methods:{
			backGo(){
			     this.$emit("search-hide")
			},
		}
	}
</script>
<style lang="scss" scoped>
	.search{
		position:relative;
		top:0;
		left:0;
		width:100%;
		z-index:99;
		background:#fff;
		.search{
			height:36px;
			color:#999;
			border-radius:2px;
		}
		::-webkit-input-placeholder{
				color:#ccc;
				font-size:18px;
			}    
		.search-top{
			position:fixed;
			top:0;
			width: 100%;
			height: 56px;
		}
		.search-bottom{
			margin-top:56px;
			width:100%;
			padding:20px;
			box-sizing: border-box;
		}
		.browse{
			margin-bottom:20px;
			span{
				color:#ccc;
				font-size:12px;
			}
			ul{
				display:flex;
				flex-wrap:wrap;
				width:100%;
			}
			li{
				margin:5px 0;
				width:50%;
				font-size:14px;
			}
		}
		.recommend{
			border-top:1px solid rgba(7,17,27,0.1);
			span{
				color:#ccc;
				font-size:12px;
			}
			ul{
				display:flex;
				flex-wrap:wrap;
				width:100%;
			}
			li{
				margin:5px 0;
				font-size:14px;
				width:50%;
			}
		}
	}
	
</style>