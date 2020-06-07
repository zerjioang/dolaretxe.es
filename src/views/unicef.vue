<template>
  <unicef />
</template>

<script>
import unicef from "@/components/unicef.vue";

export default {
  name: "view-unicef",
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    unicef
  }
};
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Colaboradores de UNICEF"
    }
  },
  "en":{
    "seo": {
      "title": "Colaboradores de UNICEF"
    }
  },
  "eus":{
    "seo": {
      "title": "UNICEF-en Adiskide Eskola"
    }
  }
}
</i18n>