<template>
  <trabajo />
</template>

<script>
import trabajo from "@/components/trabajo.vue";

export default {
  name: "view-trabajo",
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    trabajo
  }
};
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Trabaja con nosotros"
    }
  },
  "en":{
    "seo": {
      "title": "Trabaja con nosotros"
    }
  },
  "eus":{
    "seo": {
      "title": "Gurekin lan egin"
    }
  }
}
</i18n>