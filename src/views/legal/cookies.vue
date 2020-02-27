<template>
  <cookies/>
</template>

<script>

export default {
  name: 'view-cookies',
  components: {
    cookies: () => import('@/components/cookies.vue')
  }
}
</script>