<template>
  <div class="container-fluid p-0">
    <h2 class="text-center">clasificacion</h2>
    <div v-for="(standingLaLiga, index) in standingsLaLiga.standings" :key="index">
      <div class="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl" v-if="standingLaLiga.type =='TOTAL'">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
            <th class="table-dark" scope="col">POS</th>
            <th class="table-dark" scope="col">TEAM</th>
            <th class="table-dark" scope="col">PJ</th>
            <th class="table-primary" scope="col">P</th>
            <th class="table-success" scope="col">PG</th>
            <th class="table-warning" scope="col">PE</th>
            <th class="table-danger" scope="col">PP</th>
            <th class="table-success" scope="col">GF</th>
            <th class="table-danger" scope="col">GC</th>
            <th class="table-primary" scope="col">GD</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tables, index2) in standingLaLiga.table" :key="index2">
              <td class="">{{tables.position}}</td>
              <td class="">
                <router-link class="text-dark" :to="{name: 'TeamLaLiga', params:{id: tables.team.id}}">
                  {{tables.team.name}}
                </router-link>
              </td>
              <td class="">{{tables.playedGames}}</td>
              <td class="table-primary">{{tables.points}}</td>
              <td class="table-success">{{tables.won}}</td>
              <td class="table-warning">{{tables.draw}}</td>
              <td class="table-danger">{{tables.lost}}</td>
              <td class="table-success">{{tables.goalsFor}}</td>
              <td class="table-danger">{{tables.goalsAgainst}}</td>
              <td class="table-primary">{{tables.goalDifference}}</td>
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
    this.$store.dispatch('StandingsLaLiga');
  },
  computed: {
    ...mapState([
      'standingsLaLiga'
    ])
  },
}
</script>

<style scoped>

</style>