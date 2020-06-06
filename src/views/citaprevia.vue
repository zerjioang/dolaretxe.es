<template>
  <citaprevia/>
</template>

<script>

import citaprevia from '@/components/citaprevia.vue'

export default {
  name: 'view-citaprevia',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    citaprevia
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Cita previa"
    }
  },
  "en":{
    "seo": {
      "title": "Cita previa"
    }
  },
  "eus":{
    "seo": {
      "title": "Cita previa"
    }
  }
}
</i18n>