<template>
  <fotos/>
</template>

<script>

import fotos from '@/components/fotos.vue'

export default {
  name: 'view-fotos',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    fotos
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Fotos"
    }
  },
  "en":{
    "seo": {
      "title": "Fotos"
    }
  },
  "eus":{
    "seo": {
      "title": "Argazkiak"
    }
  }
}
</i18n>