<template>
  <privacy/>
</template>

<script>

export default {
  name: 'view-privacy',
  metaInfo: {
    title: 'Política de Privacidad',
  },
  components: {
    privacy: () => import('@/components/privacy.vue')
  }
}
</script>