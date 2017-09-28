<template>
	<div class="safe">
		<v-head :title="title"></v-head>
		<div class="toolbar">
			<div class="function">
				<router-link to="/phone">
					<div class="toolbar-left">
						手机号
					</div>
					<div class="toolbar-right">
						<span id="phone">135******92</span>
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
				</router-link>
			</div>
			<div class="function border-top">
				<a href="javascript:;"  @click="changePhone">
					<div class="toolbar-left">
						修改密码
					</div>
					<div class="toolbar-right">
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
				</a>
			</div>
			<!--<div class="function margin-top">-->
				<!--<a href="javascript:;">-->
					<!--<div class="toolbar-left">-->
						<!--通过手机号找到我-->
					<!--</div>-->
					<!--<div class="toolbar-right">-->
						<!--<div class="mui-switch mui-switch-mini mui-pull-right" id="wifiSwitch">-->
							<!--<div class="mui-switch-handle"></div>-->
						<!--</div>-->
					<!--</div>-->
				<!--</a>-->
			<!--</div>-->
		</div>
		<v-modal :modal="modal" v-on:ok="yes" v-on:cancel="no">
			<div slot="modal-content" v-html="modal.content"></div>
		</v-modal>
	</div>
</template>
<style lang="scss">
	@import 'static/style/base';

	.safe{
		.toolbar{
			width:100vw;
			height:60px;
			line-height:60px;
			margin-top:.8rem;
			text-align:center;
			.function{
				width:100vw;
				height:100%;
				background-color:nth($baseColor,1);
				&.btn{
					height:50px;
				}
				a{
					font-size:1.5rem;
					color:lighten( nth($baseColor,2),50%);
					.toolbar-left{
						width:40%;
						float: left;
						text-align:left;
						margin-left:1rem;
					}
					.toolbar-right{
						width:50%;
						float: right;
						text-align:right;
						margin-right:1rem;
						.mui-switch{
							margin-top:12px;
							margin-right:10px;
						}
					}
				}
				&.margin-top{
					margin-top:.8rem;
				}
				&.margin-top10{
					margin-top:2rem;
				}
				&.border-top{
					border-top:.1rem solid lighten(nth($baseColor,2),89%);
				}
			}
		}
	}
</style>
<script>
	import vHead from '../common/header.vue'
	import vModal from '../component/dialog.vue'

	export default{
		data(){
			return{
				title:'安全和隐私设置',
                modal:{
                    show:false,
                    isHeader:true,
                    isFooter:true,
                    title:'友情提示',
                    yes:'确定',
                    cancel:'取消',
                    content:''
                }
			}
		},
		components:{
			vHead,
            vModal
		},
		methods:{
            changePhone(){
              this.modal.show=true;
              this.modal.content='您确定要向手机发送验证码吗?'
			},
            yes(e){
				//TODO 发送验证码

				//this.$router.forward('/passwords');
				location.href='#/passwords';
            },
            no(e){}
		},
		mounted(){
			const gallery = document.querySelector('.safe'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + 10 + "px";
            }
		}
	}
</script>