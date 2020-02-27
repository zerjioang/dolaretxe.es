<template>
  <legal/>
</template>

<script>

import legal from '@/components/legal.vue'

export default {
  name: 'view-legal',
  mounted(){
  	console.log("mounted::view-legal")
  	this.$store.commit('appLoading', false)
  },
  components: {
    legal: legal
  }
}
</script>