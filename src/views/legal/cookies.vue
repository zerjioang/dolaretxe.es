<template>
  <cookies/>
</template>

<script>

export default {
  name: 'view-cookies',
  metaInfo: {
    title: 'Política de cookies',
  },
  components: {
    cookies: () => import('@/components/cookies.vue')
  }
}
</script>

<i18n>
{
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>