<template>
  <privacy/>
</template>

<script>

export default {
  name: 'view-privacy',
  components: {
    privacy: () => import('@/components/privacy.vue')
  }
}
</script>