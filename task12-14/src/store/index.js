import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    projects: [],
  },
  getters: {
    ARTICLES: (state) => {
      return state.articles;
    },
    PROJECTS: (state) => {
      return state.projects;
    },
  },
  mutations: {
    SET_ARTICLES: (state, payload) => {
      state.articles = payload;
    },
    SET_PROJECTS: (state, payload) => {
      state.projects = payload;
    },
  },
  actions: {
    GET_ARTICLES: async (context) => {
      let data = [];
      await fetch(
        'https://my-json-server.typicode.com/shipengineer/JSON_server/articles'
      )
        .then((responce) => responce.json())
        .then((transformed) => {
          data.push(transformed);
        });
      context.commit('SET_ARTICLES', data);
    },
    GET_PROJECTS: async (context) => {
      let data = [];
      await fetch(
        'https://my-json-server.typicode.com/shipengineer/JSON_server/projects'
      )
        .then((responce) => responce.json())
        .then((transformed) => {
          data.push(transformed);
        });
      context.commit('SET_PROJECTS', data);
    },
  },
  modules: {},
});
