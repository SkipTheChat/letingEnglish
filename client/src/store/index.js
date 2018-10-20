import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
    isAuthenticated:false,
    user:{},  //用来存储用户
    score:""
};
export default new Vuex.Store({
state:state,
getters:getters,
mutations:mutations,
actions:actions
});

 