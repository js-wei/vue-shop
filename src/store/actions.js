//import 数据 from ''	这里面可以获取数据
import * as types from './type'

export default{
<<<<<<< HEAD
    updateAppSetting:({commit})=>{
		commit(types.ALLOW_BACK);
=======

	/*头部信息*/
	SHOW_HEAD_SUCC:({commit})=>{
		commit(types.HEAD_SHOW_SUCCESS);
	},
	SHOW_HEAD_FAIL:({commit})=>{
		commit(types.HEAD_SHOW_FAIL);
	},
	/*loading*/
	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING)
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING)
	},
	/*底部条*/
	hideFooter:({commit})=>{
		commit(types.FOOTER_HIDE);
	},
	showFooter:({commit})=>{
		commit(types.FOOTER_SHOW)
	},
    NETWORK_ERROR:(commit)=>{
        commit(types.NETWORK_ERROR);
>>>>>>> 3cb6bbd4f952101d4140c4ef50d76435053efe0f
	}
}