<template>
	<div class="comment">
			<div class="comment-btn">
					<i @click=""><mu-icon value="chat_bubble_outline" color="#505050"></mu-icon></i>
					<i @click="btnIconTwo"><mu-icon :value="two" :color="twoColor"></mu-icon></i>
					<!-- favorite favorite_border #F01B1B-->
					<i @click=""><mu-icon value="sentiment_dissatisfied" color="#505050"></mu-icon></i>
					<!-- #FF7C02 tag_faces-->
					<i @click=""><mu-icon value="device_hub" color="#505050"></mu-icon></i>
			</div>
		</div>
</template>
<script>
	export default{
		name:"CommentBtn",
		props:['i'],
		data(){
			return{
				twoShow:true,
				two:'favorite_border',
				twoColor:'#505050',
				threeShow:true,
				three:'sentiment_dissatisfied',
				threeColor:'#505050',
			}
		},
		methods:{
			btnIconTwo(){                      //收藏
				this.twoShow = !this.twoShow
				if(this.twoShow === !true){
					this.two = 'favorite'
					this.twoColor = '#F01B1B'
				}else{
					this.two = 'favorite_border'
					this.twoColor = '#505050'
				}
			},
			btnIconThree(){						//点赞
				this.threeShow = !this.threeShow
				if(this.threeShow === !true){
					this.three = 'tag_faces'
					this.threeColor = '#FF7C02'
				}else{
					this.three = 'sentiment_dissatisfied'
					this.threeColor = '#505050'
				}
			},
		}
	}
</script>
<style lang="scss" scoped>
		  	.comment{
	  		width:100%;
	  		height:38px;
	  		border-top:1px solid #f4f4f4;
	  		z-index:10;
	  		background:#fff;

	  		.comment-btn{
	  			display:flex;

	  			i{
					flex:1;
					text-align:center;
	  				width:30px;
	  				height:30px;
	  				margin-top:3px;
	  				margin-right:10px;
	  				display:inline-block;
	  				}
	  			}
	  		}
</style>