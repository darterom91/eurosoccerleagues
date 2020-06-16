<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <!-- <div class="contenido text-center border border-dark bg-warning py-1 mx-1">
      <h2 class="">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matches.matches" :key="index3">
        <div class="text-center border rounded border-dark bg-dark text-light p-2" v-if="match.utcDate >= '2019-08-16T19:00:00Z' && match.utcDate <= '2019-08-19T21:00:00Z'">
        <div class="d-flex flex-row justify-content-center">
            <div class="flex-fill font-weight-bold w-25 border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <router-link class="text-light" :to="{name: 'Team', params:{id: match.homeTeam.id}}">
                    {{match.homeTeam.name}}
                  </router-link>
                  <div class="contentLogo">
                    <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-fill font-weight-bold w-25 border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <router-link class="text-light" :to="{name: 'Team', params:{id: match.awayTeam.id}}">
                    {{match.awayTeam.name}}
                  </router-link>
                  <div class="contentLogo">
                    <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div> -->

<!-- Menu anterior -->
    <!-- dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido border border-warning bg-dark rounded font-weight-bold text-dark my-2">
      <h2 class="titulos text-center text-warning border-bottom border-warning py-3">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matchesLaLiga.matches" :key="index3">
        <div class="textcontent border border-dark text-center" v-if="match.utcDate >= fecha && match.utcDate <= fecha2">
          <div class="border rounded-top border-warning bg-warning p-2">
           Fecha {{match.utcDate}} | Matchday: {{match.matchday}}
          </div>
          <div class="d-flex justify-content-center border-left border-right border-bottom rounded-bottom border-warning">
            <div class="w-100 align-self-center text-warning py-3">
              <router-link class="text-warning" :to="{name: 'TeamLaLiga', params:{id: match.homeTeam.id}}">
                {{match.homeTeam.name}}
              </router-link>
            </div>
            <div class="w-25 border-top border-dark align-self-center bg-light py-3">
              {{match.score.fullTime.homeTeam}}
              <div v-if="match.score.fullTime.homeTeam == null">
                0
              </div>
            </div>
            <div class="w-25 align-self-center bg-warning border-left border-right border-dark py-3">
              <div>vs</div>
              <div class="statusText">{{match.status}}</div>
            </div>
            <div class="w-25 border-top border-dark align-self-center bg-light py-3">
              {{match.score.fullTime.awayTeam}}
              <div v-if="match.score.fullTime.awayTeam == null">
                0
              </div>
            </div>
            <div class="w-100 align-self-center py-3">
              <router-link class="text-warning" :to="{name: 'TeamLaLiga', params:{id: match.awayTeam.id}}">
                {{match.awayTeam.name}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> -->

</template>
