<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/premierLeague">Premier League</router-link> |
      <router-link to="/LaLiga">La Liga</router-link> |
      <router-link to="/bundesliga">Bundesliga</router-link> |
      <router-link to="/ligueone">Ligue 1</router-link>
      <!-- <router-link to="/serieA">Serie A</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: black;
  text-align: end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
