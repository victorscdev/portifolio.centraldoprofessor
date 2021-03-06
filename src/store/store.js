import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const initialState = () => {
    return { user: null, error: null };
};

export default new Vuex.Store({
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
});