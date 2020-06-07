<template>
  <jornadas/>
</template>

<script>

import jornadas from '@/components/jornadas.vue'

export default {
  name: 'view-jornadas',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    jornadas
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Jornadas"
    }
  },
  "en":{
    "seo": {
      "title": "Jornadas"
    }
  },
  "eus":{
    "seo": {
      "title": "Jardunaldiak"
    }
  }
}
</i18n>