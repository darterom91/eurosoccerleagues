<template>
  <div>
    <div class="contenido d-flex p-2 justify-content-center align-items-center bg-dark">
      <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
          <div class="contentLogo">
            <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
          </div>
      </div>
    </div>

    <div class="contenido text-center border border-dark bg-warning py-1 mx-1">
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
    </div>

    <!-- prueba 1
    dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido text-center border border-dark bg-warning py-1 mx-1">
      <h2 class="">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matches.matches" :key="index3">
        <div class="text-center border rounded border-dark bg-dark text-light p-2" v-if="match.utcDate >= '2019-08-16T19:00:00Z' && match.utcDate <= '2019-08-19T21:00:00Z'">
          <div class="font-weight-bold text-center ">
            {{match.utcDate}}
          </div>
          <div class="font-weight-bold text-center pb-2">
            {{match.status}}
          </div>
          <div class="d-flex flex-row justify-content-center">
            <div class="flex-fill font-weight-bold w-25 border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <div>
                    <router-link class="text-light" :to="{name: 'Team', params:{id: match.homeTeam.id}}">
                      {{match.homeTeam.name}}
                    </router-link>
                  </div>
                  <div class="contentLogo">
                    <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-dark font-weight-bold border border-light bg-light p-4">
              {{match.score.fullTime.homeTeam}}
            </div>
            <div class="py-4 px-2">
              vs
            </div>
            <div class="text-dark border font-weight-bold border-light bg-light p-4">
              {{match.score.fullTime.awayTeam}}
            </div>
            <div class="flex-fill font-weight-bold w-25 border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <div>
                    <router-link class="text-light" :to="{name: 'Team', params:{id: match.awayTeam.id}}">
                      {{match.awayTeam.name}}
                    </router-link>
                  </div>
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

    prueba 2
    dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido text-center border border-dark bg-warning py-1 mx-1">
      <h2 class="">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matches.matches" :key="index3">
        <div class="text-center border rounded border-dark bg-dark text-light p-2" v-if="match.utcDate >= '2019-08-16T19:00:00Z' && match.utcDate <= '2019-08-19T21:00:00Z'">
          <div class="font-weight-bold text-center ">
            {{match.utcDate}}
          </div>
          <div class="font-weight-bold text-center pb-2">
            {{match.status}}
          </div>
          <div class="d-flex align-items-center flex-row justify-content-center border border-light">
            <div class="flex-fill font-weight-bold w-25">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <div>
                    <router-link class="text-light text-wrap" :to="{name: 'Team', params:{id: match.homeTeam.id}}">
                      {{match.homeTeam.name}}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <div class="contentLogo">
                    <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-light font-weight-bold p-2">
              {{match.score.fullTime.homeTeam}}
            </div>
            <div class="p-2">
              vs
            </div>
            <div class="text-light font-weight-bold p-2">
              {{match.score.fullTime.awayTeam}}
            </div>           
            <div class="border border-light p-2">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <div class="contentLogo">
                    <router-link :to="{name: 'Team', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-fill font-weight-bold w-25">
              <div v-for="(team, index2) in teamsLaLiga.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <div>
                    <router-link class="text-light text-wrap" :to="{name: 'Team', params:{id: match.awayTeam.id}}">
                      {{match.awayTeam.name}}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ACTUAL
    dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido border border-warning bg-dark rounded font-weight-bold text-dark my-2">
      <h2 class="titulos text-center text-warning border-bottom border-warning py-3">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matches.matches" :key="index3">
        <div class="textcontent border border-dark text-center" v-if="match.utcDate >= '2019-08-16T19:00:00Z' && match.utcDate <= '2019-08-19T21:00:00Z'">
          <div class="border rounded-top border-warning bg-warning p-2">
            {{match.utcDate}}
          </div>
          <div class="d-flex justify-content-center border-left border-right border-bottom rounded-bottom border-warning">
            <div class="w-100 align-self-center text-warning py-3">
              <router-link class="text-warning" :to="{name: 'Team', params:{id: match.homeTeam.id}}">
                {{match.homeTeam.name}}
              </router-link>
            </div>
            <div class="w-25 align-self-center bg-light py-3">
              {{match.score.fullTime.homeTeam}}
            </div>
            <div class="w-25 align-self-center bg-warning border-left border-right border-dark py-3">
              vs
            </div>
            <div class="w-25 align-self-center bg-light py-3">
              {{match.score.fullTime.awayTeam}}
            </div>
            <div class="w-100 align-self-center py-3">
              <router-link class="text-warning" :to="{name: 'Team', params:{id: match.awayTeam.id}}">
                {{match.awayTeam.name}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

var today = new Date();

var dateToday = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+ ("0" + (today.getDate() + 1)).slice(-2)+'T'+("0" + (today.getHours() + 1)).slice(-2)+':'+("0" + (today.getMinutes() + 1)).slice(-2)+':'+("0" + (today.getSeconds() + 1)).slice(-2)+'Z';

var aux = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+ ("0" + (today.getDate() + 3)).slice(-2)+'T'+"00"+':'+"00"+':'+"00"+'Z';

export default {
  data() {
    return {
      fecha : dateToday,
      fecha2: aux,
    }
  },
   mounted() {
    this.$store.dispatch('TeamsChampions');
    this.$store.dispatch('Teams');
    this.$store.dispatch('Matches');
  },
  computed: {
    ...mapState([
    'teamschampions'
    ,'teamsLaLiga'
    ,'matches']),
  }
}
</script>

<style scoped>
.contenido {
  padding: 0;
  font-size: 50%;
}
.contentLogo{
  margin: 2px;
}
.logos{
  padding: 0px;
  background-color: white;
  border: 2px solid rgb(203, 193, 84);
  border-radius: 100%;
  width: 50px;
  height: 20px;
}

.titulos{
  padding: 0;
}

.textcontent{
  font-size: 100%;
  color: black;
}

@media (min-width: 320px){
  .contenido {
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
  .contenido {
    padding: 0;
    font-size: 50%;
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
  .contenido {
    padding: 0;
    font-size: 50%;
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
  .contenido {
    padding: 0;
    font-size: 50%;
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
  .contenido {
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
  .contenido {
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
  .contenido {
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
  .contenido {
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
  .contenido {
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
  .contenido {
    padding: 0;
    font-size: 70%;
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
  .contenido {
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
  .contenido {
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