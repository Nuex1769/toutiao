<template>
	<div class="login">
		<div class="login-top">
			<mu-appbar color="#D43D3D">
			    <mu-button icon slot="left" @click="backGo">
			      <mu-icon value="keyboard_arrow_left"></mu-icon>
			    </mu-button>
			    <span class="top-left">登录</span>
			  
				    <mu-button icon slot="right" href="#/Login/Register">
				      <mu-icon value="keyboard_arrow_right"></mu-icon>
				    </mu-button>
				<router-link to="/Login/Register">
				    <span class="top-right">注册</span>
				</router-link>
			</mu-appbar>
			<router-view/>
		</div>
		<div class="form">
			<div class="name"><span>用户名:</span><input type="text" name="" /></div>
			<div class="pwd"><span>密　码:</span><input type="password" name="" /><br/>
				<a class="pwda" href="javascript:;">忘记密码?</a>
			</div>
			<mu-button class="demo-color-btn" color="#D43D3D"> 登录 </mu-button>
		</div>
		<div class="way">
			<h5>__其他登录方式__</h5>
			<img src="../components/img/waylogo.jpg">
		</div>
		
	</div>
</template>
<script>
	export default{
		name:"Login",
		methods:{
			 backGo(){
			      window.history.back(-1); 
			    }
		}
	}
</script>
<style lang="scss" scoped>
	.login{
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		width:100%;
		background-color:#fff;
		z-index:66;
		overflow:hidden;

		a{
			color:#fff;
		}
		.login-top{
			position:relative;

			.top-left{
				position:absolute;
				top:0px;
				left:50px;
			}
			.top-right{
				position:absolute;
				top:0px;
				right:50px;
			}
		}

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
				margin-bottom:10px;

				.pwda{
					display:inline-block;
					margin-left:130px;
					color:blue;
				}
			}
		}
		.way{
			width:100%;
			text-align:center;
		}
	}
</style>