<template>
  <privacy/>
</template>

<script>

export default {
  name: 'view-privacy',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    privacy: () => import('@/components/privacy.vue')
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Política de Privacidad"
    }
  },
  "en":{
    "seo": {
      "title": "Política de Privacidad"
    }
  },
  "eus":{
    "seo": {
      "title": "Política de Privacidad"
    }
  }
}
</i18n>