<template>
  <div class="premierLeague">
    <cpHeader/>
    <plMenu/>
    Premier League
    <plMatches/>
    <plStandings/>
    <cpFooter/>
  </div>
</template>

<script>
import cpHeader from '@/components/CP_Header.vue'
import plMatches from '@/components/PremierLeague/PL_matches.vue'
import plMenu from '@/components/PremierLeague/PL_menu.vue'
import plStandings from '@/components/PremierLeague/PL_standings.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  name: 'PremierLeague',
  components: {
    cpHeader,
    plMenu,
    plMatches,
    plStandings,
    cpFooter
  }
}
</script>