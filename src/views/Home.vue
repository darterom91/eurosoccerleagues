<template>
  <div class="home">
    <PLmatches/>
    <LaLigamatches/>
    <BLmatches/>
    <L1matches/>
    <SAmatches/>
    <cpFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import cpHeader from '@/components/CP_Header.vue'
import PLmatches from '@/components/PremierLeague/PL_matches.vue'
import LaLigamatches from '@/components/LaLiga/LaLiga_matches.vue'
import BLmatches from '@/components/Bundesliga/BL_matches.vue'
import L1matches from '@/components/LigueOne/L1_matches.vue'
import SAmatches from '@/components/SerieA/SA_matches.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  name: 'Home',
  components: {
    cpHeader,
    PLmatches,
    LaLigamatches,
    BLmatches,
    L1matches,
    SAmatches,
    cpFooter,
  }
}
</script>
