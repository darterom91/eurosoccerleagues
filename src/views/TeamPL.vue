<template>
  <div >
    <cpHeader/>
    <cpFooter/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import cpHeader from '@/components/CP_Header.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  props: [id],
  components: {
    cpHeader,
    cpFooter
  },
  mounted() {
    this.$store.dispatch('Teams');
    this.$store.dispatch('Matches');
    this.$store.dispatch('LeagueStandings');
  },

}
</script>