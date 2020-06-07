<template>
  <contact/>
</template>

<script>

import contact from '@/components/contact.vue'

export default {
  name: 'view-contact',
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    contact
  }
}
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Contacto"
    }
  },
  "en":{
    "seo": {
      "title": "Contacto"
    }
  },
  "eus":{
    "seo": {
      "title": "Kontaktua"
    }
  }
}
</i18n>