import {
	HEAD_SHOW_SUCCESS,
	HEAD_SHOW_FAIL,
<<<<<<< HEAD
	ALLOW_BACK
=======
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW,
	NETWORK_ERROR
>>>>>>> 3cb6bbd4f952101d4140c4ef50d76435053efe0f
} from './type'

const state={
	headShow:true,
	allowBack:false
};

const mutations={
	/*头部*/
	[HEAD_SHOW_SUCCESS](state){
		state.headShow=true;
	},
	[HEAD_SHOW_FAIL](state){
		state.headShow=false;
		//console.log(state.headShow);
	},
<<<<<<< HEAD
	[ALLOW_BACK](state){
		state.allowBack = false;
=======
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*footer*/
	[FOOTER_HIDE](state){
		state.footerShow=false;
	},
	[FOOTER_SHOW](state){
		state.footerShow=true;
	},
	[NETWORK_ERROR](state){
		state.modalShow=true;
>>>>>>> 3cb6bbd4f952101d4140c4ef50d76435053efe0f
	}
};

const getters={
	headShow(state){
		return state.headShow;
	},
	backing(state){
		return state.allowBack;
	},
};

export default{
	state,
	mutations,
	getters
}