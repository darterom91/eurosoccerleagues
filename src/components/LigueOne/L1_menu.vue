<template>
  <div>
    <div class="contenido d-flex p-2 justify-content-center align-items-center bg-dark">
      <div v-for="(team, index2) in teamsL1.teams" :key="index2">
          <div class="contentLogo">
            <router-link :to="{name: 'TeamL1', params:{id: team.id}}"><b-img v-bind:src="team.crestUrl" alt="" class="logos"></b-img></router-link>
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
    this.$store.dispatch('TeamsL1');
  },
  computed: {
    ...mapState(['teamsL1'])
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