/*=========================================================================================
  File Name: store.js
  Description: Vuex store
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleEmail from './email/moduleEmail.js'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      email: moduleEmail
    },
    strict: process.env.NODE_ENV !== 'production'
})
