<template>
  <div>
    <div class="contenido d-flex p-2 justify-content-center align-items-center bg-dark">
      <div v-for="(team, index2) in teamsLaLiga2.teams" :key="index2">
          <div class="contentLogo">
            <router-link :to="{name: 'TeamLaLiga', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
          </div>
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
    this.$store.dispatch('TeamsLaLiga');
  },
  computed: {
    ...mapState(['teamsLaLiga2'])
  },
  
}
</script>

<style scoped>
.contenido {
  padding: 0;
  font-size: 50%;
}
.logos{
  width: 50px;
  height: 20px;
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
    width: 17.5px;
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
    width: 30px;
    height: 34px;
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