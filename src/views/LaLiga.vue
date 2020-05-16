<template>
  <div class="laLiga">
    <cpHeader/>
    <LaLigamenu/>
    La Liga
    <LaLigamatches/>
    <LaLigastandings/>
    <cpFooter/>
  </div>
</template>

<script>
import cpHeader from '@/components/CP_Header.vue'
import LaLigamenu from '@/components/LaLiga/LaLiga_menu.vue'
import LaLigamatches from '@/components/LaLiga/LaLiga_matches.vue'
import LaLigastandings from '@/components/LaLiga/LaLiga_standings.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  name: 'LaLiga',
  components: {
    cpHeader,
    LaLigamenu,
    LaLigamatches,
    LaLigastandings,
    cpFooter
  }
}
</script>