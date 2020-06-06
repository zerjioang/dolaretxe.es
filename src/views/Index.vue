<template>
  <home/>
</template>

<script>

import home from '@/components/Home.vue'

export default {
  name: 'view-home',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    home: home
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Bienvenido"
    }
  },
  "en":{
    "seo": {
      "title": "Bienvenido"
    }
  },
  "eus":{
    "seo": {
      "title": "Bienvenido"
    }
  }
}
</i18n>