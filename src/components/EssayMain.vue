<template>
	<div class="EssayMain">
		<div class="EssayMainHeader">
			<mu-appbar style="width: 100%;" color="#D43D3D">
	         <mu-button icon slot="left" @click="backGo">
	          <mu-icon value="keyboard_arrow_left"></mu-icon>
	        </mu-button>
	        今日头条
	        <mu-button icon slot="right">
	          <mu-icon value="search" color="#FFF"></mu-icon>
	        </mu-button>
	      </mu-appbar>
		</div>
			<div class="textContent">
				<h3>{{item.title}}</h3><!-- titles -->
				<img :src="item.imgsrc"/>
				<div class="character" v-html="item.body">

			</div>

		</div>
		<div class="comment">
			<div class="comment-input">
				<input type="text" placeholder="   写评论...">
			</div>
			<div class="comment-btn">
					<i @click="btnIconOne"><mu-icon value="chat_bubble_outline" color="#505050"></mu-icon></i>
					<i @click="btnIconTwo"><mu-icon :value="two" :color="twoColor"></mu-icon></i>
					<!-- favorite favorite_border #F01B1B-->
					<i @click="btnIconThree"><mu-icon :value="three" :color="threeColor"></mu-icon></i>
					<!-- #FF7C02 tag_faces-->
					<i @click="btnIconFour"><mu-icon value="device_hub" color="#505050"></mu-icon></i>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		name:"EssayMain",	
		props:['tabbar'],
		data(){
			return{
				oneShow:true,
				twoShow:true,
				two:'favorite_border',
				twoColor:'#505050',
				threeShow:true,
				three:'sentiment_dissatisfied',
				threeColor:'#505050',
				fourShow:true

			}
		},
		computed:{
			item(){
				let items = this.$route.query.item
				return items
			},
		},
		methods:{
			btnIconOne(){
				this.oneShow = !this.oneShow
			},
			btnIconTwo(){                      //收藏
				// let item = this.$route.query.item
				// this.twoShow = !this.twoShow
				// if(this.twoShow === !true){
				// 	this.two = 'favorite'
				// 	this.twoColor = '#F01B1B'
				// 	this.$emit("collect-arr",item)
				// }else{
				// 	this.two = 'favorite_border'
				// 	this.twoColor = '#505050'
				// }
				let items = this.$route.query.item
				if(items.collectShow){
					items.collectShow = true
				}
			},
			backGo(){
			      this.$router.push({path:'/'})
			      this.$emit("essaylist-show")
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
			btnIconFour(){
				this.fourShow = !this.fourShow
			}
		},
		// created(){
		// 	const url = 'https://api.isoyu.com/index.php/api/News/new_detail?postid=CLJN5K2M000181KT'
		//        this.axios.get(url).then(response => {
		//         let res = response.data
		        
		//               this.main = res.data;
		          
		//     });
		// }
		
	}
</script>
<style lang="scss" scoped>
	.EssayMain{
		position:absolute;
		top:0;
		left:0;
		z-index:99;
		.textContent{
			position:relative;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background-color:#fff;
			z-index:99;
			padding:20px 20px;
		
		h3{
			text-align:center;
			font-size:16px;
			font-weight:bold;
			margin:10px 20px;
		}

		img{
			text-align:center;
			max-width:336px;
			max-height:210px;
		}
	  }
	  	.comment{
	  		position:fixed;
	  		bottom:0;
	  		display:flex;
	  		width:100%;
	  		height:38px;
	  		border-top:1px solid #ccc;
	  		z-index:99;
	  		background:#fff;

	  		.comment-input{
	  			flex:1;
	  			input{
	  				margin-top:7px;
	  				margin-left:10px;
	  				border:1px solid #ccc;
	  				height:25px;
	  				border-radius:14px;
	  			}
	  		}

	  		.comment-btn{
	  			flex:1;
	  			i{
	  				width:30px;
	  				height:30px;
	  				margin-top:3px;
	  				margin-right:10px;
	  				display:inline-block;
	  				}
	  			}
	  		}
	}
</style>