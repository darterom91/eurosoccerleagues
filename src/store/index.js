import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    teamschampions: [],
    matches: [],
    teamsLaLiga: [],
    leagueStandings: []
  },
  mutations: {
    SET_TEAMSCHAMPIONS(state, teamschampions) {
      console.log('SET_TEAMSCHAMPIONS()');
      console.log(teamschampions);
      state.teamschampions = teamschampions;
    },
    SET_TEAMS(state, teamsLaLiga) {
      console.log('SET_TEAMS()');
      console.log(teamsLaLiga);
      state.teamsLaLiga = teamsLaLiga;
    },
    SET_MATCHES(state, matches) {
      console.log('SET_MATCHES()');
      console.log(matches);
      state.matches = matches;
    },
    SET_LEAGUESTANDINGS(state, leagueStandings) {
      console.log('SET_LEAGUESTANDINGS()');
      console.log(leagueStandings);
      state.leagueStandings = leagueStandings;
    }
  },
  actions: {
    TeamsChampions({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/', {
          headers: {
            'X-Auth-Token': "a82fbc3023a849348a52a3bd07c0f40e"
          }
        })
        .then(data => {
          let teamschampions = data.data;
          console.log('TeamsChampions()');
          console.log(data.data);
          commit('SET_TEAMSCHAMPIONS', teamschampions);
        })
        .catch(error => {
          console.log(error)
        })
    },
    Matches({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/matches', {
          headers: {
            'X-Auth-Token': "a82fbc3023a849348a52a3bd07c0f40e"
          }
        })
        .then(data => {
          let matches = data.data;
          console.log('Matches()');
          console.log(data.data);
          commit('SET_MATCHES', matches);
        })
        .catch(error => {
          console.log(error)
        })
    },
    Teams({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/teams', {
          headers: {
            'X-Auth-Token': "a82fbc3023a849348a52a3bd07c0f40e"
          }
        })
        .then(data => {
          let teamsLaLiga = data.data;
          console.log('Teams()');
          console.log(data.data);
          commit('SET_TEAMS', teamsLaLiga);
        })
        .catch(error => {
          console.log(error)
        })
    },
    LeagueStandings({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/standings', {
          headers: {
            'X-Auth-Token': "a82fbc3023a849348a52a3bd07c0f40e"
          }
        })
        .then(data => {
          let leagueStandings = data.data;
          console.log('LeagueStandings()');
          console.log(data.data);
          commit('SET_LEAGUESTANDINGS', leagueStandings);
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
});
