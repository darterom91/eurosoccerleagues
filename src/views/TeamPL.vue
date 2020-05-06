<template>
  <div >
    <cpHeader/>
    <div v-for="(tm, Xindex) in teamsLaLiga.teams" :key="Xindex">
      <div class="text-center" v-if="tm.id == id">
        <h3 class="bg-dark border border-warning text-warning p-2">Calendario: {{tm.name}}</h3>
      </div>
    </div>

  <div v-for="(leagueStanding, Jindex) in leagueStandings.standings" :key="Jindex">
    <div v-if="leagueStanding.type == 'TOTAL' ">
      <div v-for="(tableTeam, JYindex) in leagueStanding.table" :key="JYindex">
        <div v-if="tableTeam.team.id == id">
          <div class="d-flex border border-dark bg-warning mx-2 mt-2">
            <div class="text-center border border-dark flex-grow-1 p-2">TEAM: {{tableTeam.team.name}}</div>
            <div class="text-center border border-dark flex-grow-1 p-2">pos: {{tableTeam.position}}</div>
          </div>
          <div class="d-flex border border-dark mx-2 mb-2 p-2 d-flex justify-content-center">
            <div class="border border-dark p-3 ">Played Games: {{tableTeam.playedGames}}</div>
            <div class="border border-dark bg-success p-3  text-light">Won: {{tableTeam.won}}</div>
            <div class="border border-dark p-3  bg-warning text-dark">Draw: {{tableTeam.draw}}</div>
            <div class="border border-dark p-3  bg-danger text-light">Lost: {{tableTeam.lost}}</div>
            <div class="border border-dark p-3  bg-primary text-light">Points: {{tableTeam.points}}</div>
            <div class="border border-dark p-3  bg-success text-light">Goals For: {{tableTeam.goalsFor}}</div>
            <div class="border border-dark p-3  bg-danger text-light">Goals Against: {{tableTeam.goalsAgainst}}</div>
            <div class="border border-dark p-3  bg-primary text-light">Goal Difference: {{tableTeam.goalDifference}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="(TMmatches, Yindex) in matches.matches" :key="Yindex">
    <div class="bg-dark border border-warning text-warning m-2 p-2 text-center" v-if="TMmatches.homeTeam.id == id || TMmatches.awayTeam.id == id">
      {{TMmatches.homeTeam.name}} {{TMmatches.score.fullTime.homeTeam}} vs {{TMmatches.score.fullTime.awayTeam}} {{TMmatches.awayTeam.name}}
    </div>
  </div>
    <cpFooter/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import cpHeader from '@/components/CP_Header.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  props: ["id"],
  components: {
    cpHeader,
    cpFooter
  },
  mounted() {
    this.$store.dispatch('Teams');
    this.$store.dispatch('Matches');
    this.$store.dispatch('LeagueStandings');
  },
  computed: {
    ...mapState([
      'teamsLaLiga'
      ,'matches'
      ,'leagueStandings'])
  },

}
</script>