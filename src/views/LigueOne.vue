<template>
  <div>
    <cpHeader/>
    <l1Menu/>
    <l1Matches/>
    <l1Standings/>
    <cpFooter/>
  </div>
</template>

<script>
import cpHeader from '@/components/CP_Header.vue'
import l1Menu from '@/components/LigueOne/L1_menu.vue'
import l1Matches from '@/components/LigueOne/L1_matches.vue'
import l1Standings from '@/components/LigueOne/L1_standings.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  components: {
    cpHeader,
    l1Menu,
    l1Matches,
    l1Standings,
    cpFooter
  }
}
</script>