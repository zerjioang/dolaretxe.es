<template>
  <actividades/>
</template>

<script>

import actividades from '@/components/actividades.vue'

export default {
  name: 'view-actividades',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    actividades
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Actividades"
    }
  },
  "en":{
    "seo": {
      "title": "Activities"
    }
  },
  "eus":{
    "seo": {
      "title": "Ekitaldiak"
    }
  }
}
</i18n>