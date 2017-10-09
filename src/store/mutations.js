import {
	HEAD_SHOW_SUCCESS,
	HEAD_SHOW_FAIL,
	ALLOW_BACK
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
	[ALLOW_BACK](state){
		state.allowBack = false;
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