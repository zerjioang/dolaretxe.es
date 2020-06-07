<template>
  <cookies/>
</template>

<script>

export default {
  name: 'view-cookies',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    cookies: () => import('@/components/cookies.vue')
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Política de Cookies"
    }
  },
  "en":{
    "seo": {
      "title": "Política de Cookies"
    }
  },
  "eus":{
    "seo": {
      "title": "Cookies-en politika"
    }
  }
}
</i18n>