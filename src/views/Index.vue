<template>
  <home/>
</template>

<script>

import home from '@/components/Home.vue'

export default {
  name: 'view-home',
  metaInfo: {
    title: 'Bienvenido',
  },
  components: {
    home: home
  }
}
</script>