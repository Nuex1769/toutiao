<template>
	<div class="video">
		<div class="videoList" v-for="(v,index) in videos" :key="index">
			<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="100%" height="100%"  :poster="v.pic">
        		<source :src="v.coverVideo" type="video/mp4">
			</video>
			<div class="videoTitle">
				<p>{{v.name}}</p>
			</div>
			<div class="videoBtn">
				<span class="name">文娱小队长</span>
				<span class="btn">评论<i>...</i></span>
			</div>
        		<!-- http://vjs.zencdn.net/v/oceans.mp4 -->
        		<!-- http://flv3.bn.netease.com//tvmrepo//2018//3//U//T//EDBIC8RUT//SD//EDBIC8RUT-mobile.mp4 -->
		</div>
	</div>
</template>
<script>
	export default{
		name:'Video',
		props:['videos'],
		data(){
			return{
				
			}
		},
		computed:{
			
		},
	}
</script>
<style lang="scss" scoped>
	.video{
		width:100%;
		position:absolute;
		top:110px;
		background:#ccc;
		border-bottom:1px solid #ccc;
		.videoList{
			margin-bottom:5px;
			width: 100%;
			height:100%;
			border-bottom:1px solid #ccc;
			position:relative;
			background:#fff;
			display:block;
			.video-js{
				width:100%;
			}
		}
		.videoTitle{
			position:absolute;
			top:10px;
			color:#fff;
			font-size:18px;
			margin-left:20px;
		}
		.videoBtn{
			margin:5px 10px;
			display:flex;
			.name{
				flex:1;
				display:inline-block;

			}
			.btn{
				flex:1;
				display:inline-block;
				text-align:right;
			}
			i{
				margin-left:10px;
			}
		}
	}

</style>