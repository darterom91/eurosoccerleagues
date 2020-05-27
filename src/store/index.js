import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    teamschampions: [],
    matches: [],
    teamsLaLiga: [],
    leagueStandings: [],
    //La Liga
    matchesLaLiga: [],
    teamsLaLiga2: [],
    standingsLaLiga: [],
    //Premier League
    matchesPL: [],
    teamsPL: [],
    standingsPL: [],
    //Bundesliga
    matchesBL: [],
    teamsBL: [],
    standingsBL: [],
    //Ligue 1
    matchesL1: [],
    teamsL1: [],
    standingsL1: [],
    //Serie A
    matchesSA: [],
    teamsSA: [],
    standingsSA: [],
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
    },
    //La Liga
    SET_TEAMS_LALIGA(state, teamsLaLiga2) {
      console.log('SET_TEAMS_LALIGA()');
      console.log(teamsLaLiga2);
      state.teamsLaLiga2 = teamsLaLiga2;
    },
    SET_MATCHES_LALIGA(state, matchesLaLiga) {
      console.log('SET_MATCHES_LALIGA()');
      console.log(matchesLaLiga);
      state.matchesLaLiga = matchesLaLiga;
    },
    SET_STANDINGS_LALIGA(state, standingsLaLiga) {
      console.log('SET_STANDINGS_LALIGA()');
      console.log(standingsLaLiga);
      state.standingsLaLiga = standingsLaLiga;
    },
    //Premier League
    SET_TEAMS_PL(state, teamsPL) {
      console.log('SET_TEAMS_PL()');
      console.log(teamsPL);
      state.teamsPL = teamsPL;
    },
    SET_MATCHES_PL(state, matchesPL) {
      console.log('SET_MATCHES_PL()');
      console.log(matchesPL);
      state.matchesPL = matchesPL;
    },
    SET_STANDINGS_PL(state, standingsPL) {
      console.log('SET_STANDINGS_PL()');
      console.log(standingsPL);
      state.standingsPL = standingsPL;
    },
    //Bundesliga
    SET_TEAMS_BL(state, teamsBL) {
      console.log('SET_TEAMS_BL()');
      console.log(teamsBL);
      state.teamsBL = teamsBL;
    },
    SET_MATCHES_BL(state, matchesBL) {
      console.log('SET_MATCHES_BL()');
      console.log(matchesBL);
      state.matchesBL = matchesBL;
    },
    SET_STANDINGS_BL(state, standingsBL) {
      console.log('SET_STANDINGS_BL()');
      console.log(standingsBL);
      state.standingsBL = standingsBL;
    },
    //Ligue 1
    SET_TEAMS_L1(state, teamsL1) {
      console.log('SET_TEAMS_L1()');
      console.log(teamsL1);
      state.teamsL1 = teamsL1;
    },
    SET_MATCHES_L1(state, matchesL1) {
      console.log('SET_MATCHES_L1()');
      console.log(matchesL1);
      state.matchesL1 = matchesL1;
    },
    SET_STANDINGS_L1(state, standingsL1) {
      console.log('SET_STANDINGS_L1()');
      console.log(standingsL1);
      state.standingsL1 = standingsL1;
    },
    //Serie A
    SET_TEAMS_SA(state, teamsSA) {
      console.log('SET_TEAMS_SA()');
      console.log(teamsSA);
      state.teamsSA = teamsSA;
    },
    SET_MATCHES_SA(state, matchesSA) {
      console.log('SET_MATCHES_SA()');
      console.log(matchesSA);
      state.matchesSA = matchesSA;
    },
    SET_STANDINGS_SA(state, standingsSA) {
      console.log('SET_STANDINGS_L1()');
      console.log(standingsSA);
      state.standingsSA = standingsSA;
    },
  },
  actions: {
    TeamsChampions({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamschampions = data.data;
          console.log('TeamsChampions()');
          console.log(data.data);
          commit('SET_TEAMSCHAMPIONS', teamschampions);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Matches({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matches = data.data;
          console.log('Matches()');
          console.log(data.data);
          commit('SET_MATCHES', matches);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Teams({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsLaLiga = data.data;
          console.log('Teams()');
          console.log(data.data);
          commit('SET_TEAMS', teamsLaLiga);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    LeagueStandings({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let leagueStandings = data.data;
          console.log('LeagueStandings()');
          console.log(data.data);
          commit('SET_LEAGUESTANDINGS', leagueStandings);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //LA LIGA
    MatchesLaLiga({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matchesLaLiga = data.data;
          console.log('MatchesLaLiga()');
          console.log(data.data);
          commit('SET_MATCHES_LALIGA', matchesLaLiga);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    TeamsLaLiga({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsLaLiga2 = data.data;
          console.log('TeamsLaLiga()');
          console.log(data.data);
          commit('SET_TEAMS_LALIGA', teamsLaLiga2);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    StandingsLaLiga({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2014/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let standingsLaLiga = data.data;
          console.log('StandingsLaLiga()');
          console.log(data.data);
          commit('SET_STANDINGS_LALIGA', standingsLaLiga);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //PREMIER LEAGUE
    MatchesPL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2021/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matchesPL = data.data;
          console.log('MatchesPL()');
          console.log(data.data);
          commit('SET_MATCHES_PL', matchesPL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    TeamsPL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2021/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsPL = data.data;
          console.log('TeamsPL()');
          console.log(data.data);
          commit('SET_TEAMS_PL', teamsPL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    StandingsPL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2021/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let standingsPL = data.data;
          console.log('StandingsPL()');
          console.log(data.data);
          commit('SET_STANDINGS_PL', standingsPL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //BUNDESLIGA
    MatchesBL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2002/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matchesBL = data.data;
          console.log('MatchesBL()');
          console.log(data.data);
          commit('SET_MATCHES_BL', matchesBL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    TeamsBL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2002/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsBL = data.data;
          console.log('TeamsBL()');
          console.log(data.data);
          commit('SET_TEAMS_BL', teamsBL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    StandingsBL({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2002/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let standingsBL = data.data;
          console.log('StandingsBL()');
          console.log(data.data);
          commit('SET_STANDINGS_BL', standingsBL);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //LIGUE 1
    MatchesL1({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2015/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matchesL1 = data.data;
          console.log('MatchesL1()');
          console.log(data.data);
          commit('SET_MATCHES_L1', matchesL1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    TeamsL1({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2015/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsL1 = data.data;
          console.log('TeamsL1()');
          console.log(data.data);
          commit('SET_TEAMS_L1', teamsL1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    StandingsL1({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2015/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let standingsL1 = data.data;
          console.log('StandingsL1()');
          console.log(data.data);
          commit('SET_STANDINGS_L1', standingsL1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Serie A
    MatchesSA({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2019/matches', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let matchesSA = data.data;
          console.log('MatchesSA()');
          console.log(data.data);
          commit('SET_MATCHES_SA', matchesSA);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    TeamsSA({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2019/teams', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let teamsSA = data.data;
          console.log('TeamsSA()');
          console.log(data.data);
          commit('SET_TEAMS_SA', teamsSA);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    StandingsSA({ commit }) {
      axios
        .get('http://api.football-data.org/v2/competitions/2019/standings', {
          headers: {
            'X-Auth-Token': 'a82fbc3023a849348a52a3bd07c0f40e',
          },
        })
        .then((data) => {
          let standingsSA = data.data;
          console.log('StandingsSA()');
          console.log(data.data);
          commit('SET_STANDINGS_SA', standingsSA);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});