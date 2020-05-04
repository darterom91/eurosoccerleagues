<template>
  <div class="home">
    <cpHeader/>
    <cpSection/>
    <cpSection2/>
    <cpFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import cpHeader from '@/components/CP_Header.vue'
import cpSection from '@/components/CP_Section.vue'
import cpSection2 from '@/components/CP_Section2.vue'
import cpFooter from '@/components/CP_Footer.vue'

export default {
  name: 'Home',
  components: {
    cpHeader,
    cpSection,
    cpSection2,
    cpFooter,
  }
}
</script>
