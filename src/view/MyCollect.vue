<template>
	<div class="collect">
		<div class="list">
			<ul class="mianList">
				<li v-for="(c,index) in collect" :key="index" class="mainList" @click="">
					<router-link to="/essaymain">
					<img :src="c.item.imgsrc">
					<p>
						<span class="title"><strong>[{{c.item.tname}}]</strong>{{c.item.title}}</span>	
						<span class="source">{{c.item.source}}</span>
						<time>{{c.item.mtime}}</time>
					</p>
				</router-link>
				<CommentBtn :i="i"></CommentBtn>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import CommentBtn from '../components/CommentBtn'
	export default{
		name:"MyCollect",
		props:['collect','i'],
		components:{
			CommentBtn
		}
	}
</script>
<style lang="scss" scoped>
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
</style>
