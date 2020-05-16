<template>
  <div>
    dateToday: {{fecha}} | aux: {{fecha2}}
    <div class="contenido border border-warning bg-dark rounded font-weight-bold text-dark my-2">
      <h2 class="titulos text-center text-warning border-bottom border-warning py-3">MATCHES</h2>
      <div class=" m-2" v-for="(match, index3) in matchesBL.matches" :key="index3">
        <div class="textcontent border border-dark text-center" v-if="match.utcDate >= '2019-08-16T19:00:00Z' && match.utcDate <= '2019-08-19T21:00:00Z'">
          <div class="border rounded-top border-warning bg-warning p-2">
            {{match.utcDate}}
          </div>
          <div class="d-flex justify-content-center border-left border-right border-bottom rounded-bottom border-warning">
            <div class="w-100 align-self-center text-warning py-3">
              <router-link class="text-warning" :to="{name: 'TeamBL', params:{id: match.homeTeam.id}}">
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
              <router-link class="text-warning" :to="{name: 'TeamBL', params:{id: match.awayTeam.id}}">
                {{match.awayTeam.name}}
              </router-link>
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
    this.$store.dispatch('MatchesBL');
  },
  computed: {
    ...mapState(['matchesBL'])
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