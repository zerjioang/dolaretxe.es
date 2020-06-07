<template>
  <escuela/>
</template>

<script>

import escuela from '@/components/escuela.vue'

export default {
  name: 'view-escuela',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    escuela
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Nuestra escuela"
    }
  },
  "en":{
    "seo": {
      "title": "Nuestra escuela"
    }
  },
  "eus":{
    "seo": {
      "title": "Gure Eskola"
    }
  }
}
</i18n>