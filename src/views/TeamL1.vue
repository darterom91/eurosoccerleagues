<template>
  <div >
    <cpHeader/>
    <div v-for="(tm, Xindex) in teamsL1.teams" :key="Xindex">
      <div class="text-center" v-if="tm.id == id">
        <h3 class="bg-dark border border-warning text-warning p-2">Calendario: {{tm.name}}</h3>
      </div>
    </div>

  <div v-for="(standingL1, Jindex) in standingsL1.standings" :key="Jindex">
    <div v-if="standingL1.type == 'TOTAL' ">
      <div v-for="(tableTeamPL, JYindex) in standingL1.table" :key="JYindex">
        <div v-if="tableTeamPL.team.id == id">
          <div class="d-flex border border-dark bg-warning mx-2 mt-2">
            <div class="text-center border border-dark flex-grow-1 p-2">TEAM: {{tableTeamPL.team.name}}</div>
            <div class="text-center border border-dark flex-grow-1 p-2">pos: {{tableTeamPL.position}}</div>
          </div>
          <div class="d-flex border border-dark mx-2 mb-2 p-2 d-flex justify-content-center">
            <div class="border border-dark p-3 ">Played Games: {{tableTeamPL.playedGames}}</div>
            <div class="border border-dark bg-success p-3  text-light">Won: {{tableTeamPL.won}}</div>
            <div class="border border-dark p-3  bg-warning text-dark">Draw: {{tableTeamPL.draw}}</div>
            <div class="border border-dark p-3  bg-danger text-light">Lost: {{tableTeamPL.lost}}</div>
            <div class="border border-dark p-3  bg-primary text-light">Points: {{tableTeamPL.points}}</div>
            <div class="border border-dark p-3  bg-success text-light">Goals For: {{tableTeamPL.goalsFor}}</div>
            <div class="border border-dark p-3  bg-danger text-light">Goals Against: {{tableTeamPL.goalsAgainst}}</div>
            <div class="border border-dark p-3  bg-primary text-light">Goal Difference: {{tableTeamPL.goalDifference}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="(TMmatches, Yindex) in matchesL1.matches" :key="Yindex">
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
    this.$store.dispatch('TeamsL1');
    this.$store.dispatch('MatchesL1');
    this.$store.dispatch('StandingsL1');
  },
  computed: {
    ...mapState([
      'teamsL1'
      ,'matchesL1'
      ,'standingsL1'])
  },

}
</script>