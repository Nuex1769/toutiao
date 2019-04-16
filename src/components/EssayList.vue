<template>
	<div class="main">
		<div class="List" v-show="href">
			<ul class="mianList">
				<li v-for="(news,index) in tabbar" :key="index" class="mainList" @click="EssayMain(news)">
					<img :src="news.imgsrc">
					<p>
						<span class="title"><strong>[{{news.tname}}]</strong>{{news.title}}</span>	
						<span class="source">{{news.source}}</span>
						<time>{{news.mtime}}</time>
					</p>
				</li>
			</ul>
		</div>
		<router-view @essaylist-show="mianShow" @collect-arr="collectArr"></router-view>
	</div>
</template>
<script>
	
	export default{
		name:"EssayList",
		props:['tabbar','href'],
		data(){
		 	return{
		 		
		 	}
		},
		methods:{
			EssayMain(item){
				this.$router.push({path:'/essayMain',query:{item:item}})
				this.$emit("browse-arr",item)
			},
			mianShow(){
				this.$emit("href-show")
			},
			collectArr(item){
				let collectItem = item
				console.log(collectItem)
				this.$emit("collect-arrs",collectItem)
			}
		},
	}
</script>
<style lang="scss" scoped>
	.main{
		width:100%;
		background-color:#fff;
		overflow:hidden;
		margin-top:104px;

		.List{
			width:100%;
			height:100%;
			overflow:auto;

			.mainList{
					position:relative;
					width:355px;
					display:inline-block;
					margin:10px;
					padding:10px 0;
					color:#222222;
					border-bottom:1px solid #F4F4F4;

				img{
					width:90px;
					height:60px;
				}				
					
					p{
						position:absolute;
						top:5px;
						right:0;
						width:255px;
						font-size:16px;
						word-break: break-word;

						.title{
							max-width:255px;
							max-height:44px;
							color:#555;
							display:block;
							overflow:hidden;
							font-size:15px;
						}
						.source{
							font-size:14px;
							color:#999;
						}
						time{
							margin-left: 10px;
							font-size:12px;
							color:#999;

						}
				  }
			}
		}

		
	}
</style>