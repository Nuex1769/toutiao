<template>
	<div class="login">
		<mu-appbar color="#D43D3D">
		    <mu-button icon slot="left" @click="backGo">
		      <mu-icon value="keyboard_arrow_left"></mu-icon>
		    </mu-button>
		    会员注册
		    <mu-button icon slot="right">
		    </mu-button>
		</mu-appbar>
		<div class="form">
			<div class="name"><span>用户名:</span><input type="text" name="" /></div>
			<div class="pwd"><span>密　码:</span><input type="text" name="" /></div>
			<mu-button class="demo-color-btn" color="#D43D3D"> 注册 </mu-button>
		</div>
		<div class="way">
			<h5>__其他注册方式__</h5>
			<img src="../components/img/waylogo.jpg">
		</div>
	</div>
</template>
<script>
	export default{
		name:"Register",
		methods:{
			 backGo(){
			      window.history.back(-1); 
			    }
		}
	}
</script>
<style lang="scss" scoped>
	.login{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		background-color:#fff;
		z-index:99;
		text-align:center;

		.form{
			margin:20px 0;
			width:100%;
			text-align:center;

			input{
				height:30px;
				border-radius: 5px;
				padding:0;
				margin:0;
							}
			.name{
				height:50px;
				line-height:50px;
				margin-bottom:10px;

				
			}
			.pwd{
				height:50px;

				.pwda{
					margin-left:130px;
				}
			}
		}
		.way{
			width:100%;
			text-align:center;
		}
	}
</style>