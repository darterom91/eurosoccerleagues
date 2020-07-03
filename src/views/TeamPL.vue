<template>
  <div class="contenido">
    <cpHeader/>
    <div v-for="(standingPL, Jindex) in standingsPL.standings" :key="Jindex">
      <div v-if="standingPL.type == 'TOTAL' ">
        <div v-for="(tableTeamPL, JYindex) in standingPL.table" :key="JYindex">
          <div v-if="tableTeamPL.team.id == id">
            <div class="text1 d-flex border border-dark bg-warning ">
              <div class="text-center border border-dark w-75 p-2">TEAM: {{tableTeamPL.team.name}}</div>
              <div class="text-center border border-dark w-25 p-2">pos: {{tableTeamPL.position}}</div>
            </div>
            <div class="text2 d-flex flex-column flex-md-row text-center text-justify justify-content-center bg-dark p-2">
              <div class="d-flex flex-column flex-md-row">
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Played Games</div>
                  <div class="w-100">{{tableTeamPL.playedGames}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Won</div>
                  <div class="w-100">{{tableTeamPL.won}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Draw</div>
                  <div class="w-100">{{tableTeamPL.draw}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Lost</div>
                  <div class="w-100">{{tableTeamPL.lost}}</div>
                </div>
              </div>
              <div class="d-flex flex-column flex-md-row ">
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Points</div>
                  <div class="w-100">{{tableTeamPL.points}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Goals For</div>
                  <div class="w-100">{{tableTeamPL.goalsFor}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Goals Against</div>
                  <div class="w-100">{{tableTeamPL.goalsAgainst}}</div>
                </div>
                <div class="d-flex flex-md-column border border-dark text-light p-2">
                  <div class="w-100">Goal Difference</div>
                  <div class="w-100">{{tableTeamPL.goalDifference}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div v-for="(tm, Xindex) in teamsPL.teams" :key="Xindex">
          <div class="bg-warning text-dark font-weight-bold text-center p-3" v-if="tm.id == id">
            <h3 class="text1 m-auto">Calendario: {{tm.name}}</h3>
          </div>
        </div>
      </div>
      <div class="bg-dark">
        <div v-for="(TMmatches, Yindex) in matchesPL.matches" :key="Yindex">
          <div class="text2 d-flex justify-content-center bg-dark border border-warning text-warning" v-if="TMmatches.homeTeam.id == id || TMmatches.awayTeam.id == id">
            <div class="w-25 align-items-center bg-primary text-dark font-weight-bold text-center p-2">J{{TMmatches.matchday}}</div>
            <div class="w-100 align-items-center font-weight-bold text-right p-2">{{TMmatches.homeTeam.name}}</div>
            <div class="w-50 align-items-center bg-light text-dark font-weight-bold text-center p-2">{{TMmatches.score.fullTime.homeTeam}} vs {{TMmatches.score.fullTime.awayTeam}} </div>
            <div class="w-100 align-items-center font-weight-bold text-left p-2">{{TMmatches.awayTeam.name}}</div>
          </div>
        </div>
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
    this.$store.dispatch('TeamsPL');
    this.$store.dispatch('MatchesPL');
    this.$store.dispatch('StandingsPL');
  },
  computed: {
    ...mapState([
      'teamsPL'
      ,'matchesPL'
      ,'standingsPL'])
  },

}
</script>

<style scoped>
  .text1 {
    padding: 0;
    font-size: 80%;
  }
  .text2 {
    font-size: 80%;
  }

  @media (min-width: 320px){
  .text1 {
    padding: 0;
    font-size: 60%;
  }
  .text2 {
    padding: 0;
    font-size: 50%;
  }
  .contentLogo{
    margin: 0px;
  }
  .logos{
    width: 16px;
    height: 20px;
  }
}

@media (min-width: 350px){
  .text1 {
    padding: 0;
    font-size: 60%;
  }
  .text2 {
    padding: 0;
    font-size: 55%;
  }
  .contentLogo{
    margin: 0.1px;
  }
  .logos{
    width: 17px;
    height: 20px;
  }
}

@media (min-width: 400px){
  .text1 {
    padding: 0;
    font-size: 60%;
  }
  .text2 {
    padding: 0;
    font-size: 60%;
  }
  .contentLogo{
    margin: 0px;
  }
  .logos{
    width: 19px;
    height: 21px;
  }
}

@media (min-width: 410px){
  .text1 {
    padding: 0;
    font-size: 60%;
  }
  .text2 {
    padding: 0;
    font-size: 60%;
  }
  .contentLogo{
    margin: 0.5px;
  }
  .logos{
    width: 19px;
    height: 20px;
  }
}

@media (min-width: 540px){
  .text1 {
    padding: 0;
    font-size: 70%;
  }
  .text2 {
    padding: 0;
    font-size: 60%;
  }
  .contentLogo{
    margin: 0.5px;
  }
  .logos{
    width: 26px;
    height: 28px;
  }
}

@media (min-width: 600px){
  .text1 {
    padding: 0;
    font-size: 70%;
  }
  .text2 {
    padding: 0;
    font-size: 60%;
  }
  .contentLogo{
    margin: 0.5px;
  }
  .logos{
    width: 28px;
    height: 32px;
  }
}

@media (min-width: 650px){
  .text1 {
    padding: 0;
    font-size: 70%;
  }
  .text2 {
    padding: 0;
    font-size: 60%;
  }
  .contentLogo{
    margin: 0.5px;
  }
  .logos{
    width: 32px;
    height: 34px;
  }
}

@media (min-width: 720px){
  .text1 {
    padding: 0;
    font-size: 80%;
  }
  .text2 {
    padding: 0;
    font-size: 70%;
  }
  .contentLogo{
    margin: 0px;
  }
  .logos{
    width: 36px;
    height: 38px;
  }
}

@media (min-width: 730px){
  .text1 {
    padding: 0;
    font-size: 80%;
  }
  .text2 {
    padding: 0;
    font-size: 70%;
  }
  .contentLogo{
    margin: 0px;
  }
  .logos{
    width: 36px;
    height: 38px;
  }
}

@media (min-width: 800px){
  .text1 {
    padding: 0;
    font-size: 90%;
  }
  .text2 {
    padding: 0;
    font-size: 80%;
  }
  .contentLogo{
    margin: 0px;
  }
  .logos{
    width: 40px;
    height: 42px;
  }
}

@media (min-width: 960px){
  .text1 {
    padding: 0;
    font-size: 90%;
  }
  .text2 {
    padding: 0;
    font-size: 80%;
  }
  .contentLogo{
    margin: 2px;
  }
  .logos{
    width: 46px;
    height: 50px;
  }
}

@media (min-width: 1200px){
  .text1 {
    padding: 0;
    font-size: 90%;
  }
  .text2 {
    padding: 0;
    font-size: 80%;
  }
  .contentLogo{
    margin: 2px;
  }
  .logos{
    width: 60px;
    height: 60px;
  }
}
</style>