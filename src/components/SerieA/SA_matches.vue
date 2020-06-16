<template>
  <div>
    dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido text-center border border-dark bg-warning py-1 mx-1">
      <h2 class="">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matchesSA.matches" :key="index3">
        <div class="text-center border rounded border-dark bg-dark text-light p-2" v-if="match.utcDate >= fecha && match.utcDate <= fecha2">
          <div class="font-weight-bold text-center ">
           Data: {{match.utcDate}} | Matchday: {{match.matchday}}
          </div>
          <div class="font-weight-bold text-center pb-2">
            {{match.status}}
          </div>
          <div class="d-flex align-items-center flex-row justify-content-center border border-light">
            <div class="flex-fill font-weight-bold w-25">
              <div v-for="(team, index2) in teamsSA.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <div>
                    <router-link class="text-light text-wrap" :to="{name: 'TeamSA', params:{id: match.homeTeam.id}}">
                      {{match.homeTeam.name}}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-light p-2">
              <div v-for="(team, index2) in teamsSA.teams" :key="index2">
                <div v-if="team.id == match.homeTeam.id">
                  <div class="contentLogo">
                    <router-link :to="{name: 'TeamSA', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-light font-weight-bold p-2">
              {{match.score.fullTime.homeTeam}}
              <div v-if="match.score.fullTime.homeTeam == null">
                0
              </div>
            </div>
            <div class="p-2">
              vs
            </div>
            <div class="text-light font-weight-bold p-2">
              {{match.score.fullTime.awayTeam}}
              <div v-if="match.score.fullTime.awayTeam == null">
                0
              </div>
            </div>
            <div class="border border-light p-2">
              <div v-for="(team, index2) in teamsSA.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <div class="contentLogo">
                    <router-link :to="{name: 'TeamSA', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-fill font-weight-bold w-25">
              <div v-for="(team, index2) in teamsSA.teams" :key="index2">
                <div v-if="team.id == match.awayTeam.id">
                  <div>
                    <router-link class="text-light text-wrap" :to="{name: 'TeamSA', params:{id: match.awayTeam.id}}">
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
  </div>
</template>

<script>
import {mapState} from 'vuex'

var today = new Date();

var dateToday = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+ ("0" + (today.getDate() + -5)).slice(-2)+'T'+("0" + (today.getHours() + 1)).slice(-2)+':'+("0" + (today.getMinutes() + 1)).slice(-2)+':'+("0" + (today.getSeconds() + 1)).slice(-2)+'Z';

var aux = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+ ("0" + (today.getDate() + 5)).slice(-2)+'T'+"00"+':'+"00"+':'+"00"+'Z';

export default {
  data() {
    return {
      fecha : dateToday,
      fecha2: aux,
    }
  },
  mounted() {
    this.$store.dispatch('MatchesSA');
    this.$store.dispatch('TeamsSA');
  },
  computed: {
    ...mapState([
    'matchesSA'
    ,'teamsSA'])
  },
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
.statusText{
  font-size: 50%;
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
    width: 16.5px;
    height: 20px;
  }
}

@media (min-width: 350px){
  .contenido {
    padding: 0;
    font-size: 50%;
  }
  .contentLogo{
    margin: 0.5px;
  }
  .logos{
    width: 15px;
    height: 20px;
  }
}

@media (min-width: 400px){
  .contenido {
    padding: 0;
    font-size: 50%;
  }
  .contentLogo{
    margin: 1px;
  }
  .logos{
    width: 20px;
    height: 25px;
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
    width: 25px;
    height: 25px;
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
    width: 35px;
    height: 35px;
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
    width: 50px;
    height: 40px;
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