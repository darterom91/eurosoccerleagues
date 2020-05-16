<template>
  <div>
    <cpHeader/>
    <blMenu/>
    <blMatches/>
    <blStandings/>
    <cpFooter/>
  </div>
</template>

<script>
import cpHeader from '@/components/CP_Header.vue'
import blMenu from '@/components/Bundesliga/BL_menu.vue'
import blMatches from '@/components/Bundesliga/BL_matches.vue'
import blStandings from '@/components/Bundesliga/BL_standings.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  components:{
    cpHeader,
    blMenu,
    blMatches,
    blStandings,
    cpFooter
  }
}
</script>