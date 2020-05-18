<template>
  <div>
    <cpHeader/>
    <saMenu/>
    <saMatches/>
    <saStanding/>
    <cpFooter/>
  </div>
</template>

<script>
import cpHeader from '@/components/CP_Header.vue'
import saMenu from '@/components/SerieA/SA_menu.vue'
import saMatches from '@/components/SerieA/SA_matches.vue'
import saStanding from '@/components/SerieA/SA_standing.vue'
import cpFooter from '@/components/CP_Footer.vue'
export default {
  components: {
    cpHeader,
    saMenu,
    saMatches,
    saStanding,
    cpFooter
  }
}
</script>