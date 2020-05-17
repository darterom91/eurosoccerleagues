<template>
  <div class="container-fluid p-0">
    <h2 class="text-center">clasificacion</h2>
    <div v-for="(standingBL, index) in standingsBL.standings" :key="index">
      <div class="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl" v-if="standingBL.type =='TOTAL'">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
            <th class="table-dark" scope="col">POS</th>
            <th class="table-dark" scope="col">TEAM</th>
            <th class="table-dark" scope="col">PJ</th>
            <th class="table-success" scope="col">PG</th>
            <th class="table-warning" scope="col">PE</th>
            <th class="table-danger" scope="col">PP</th>
            <th class="table-success" scope="col">GF</th>
            <th class="table-danger" scope="col">GC</th>
            <th class="table-primary" scope="col">GD</th>
            <th class="table-primary" scope="col">P</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tables, index2) in standingBL.table" :key="index2">
              <td class="">{{tables.position}}</td>
              <td class="">{{tables.team.name}}</td>
              <td class="">{{tables.playedGames}}</td>
              <td class="table-success">{{tables.won}}</td>
              <td class="table-warning">{{tables.draw}}</td>
              <td class="table-danger">{{tables.lost}}</td>
              <td class="table-success">{{tables.goalsFor}}</td>
              <td class="table-danger">{{tables.goalsAgainst}}</td>
              <td class="table-primary">{{tables.goalDifference}}</td>
              <td class="table-primary">{{tables.points}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.$store.dispatch('StandingsBL');
  },
  computed: {
    ...mapState(['standingsBL'])
  },
}
</script>

<style scoped>

</style>