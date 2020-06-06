<template>
  <visitavirtual />
</template>

<script>
import visitavirtual from "@/components/visitavirtual";

export default {
  name: "view-visitavirtual",
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    visitavirtual
  }
};
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Visita virtual"
    }
  },
  "en":{
    "seo": {
      "title": "Visita virtual"
    }
  },
  "eus":{
    "seo": {
      "title": "Visita virtual"
    }
  }
}
</i18n>