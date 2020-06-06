<template>
  <legal />
</template>

<script>
import legal from "@/components/legal.vue";

export default {
  name: "view-legal",
  mounted() {
    console.log("mounted::view-legal");
    this.$store.commit("appLoading", false);
  },
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  components: {
    legal: legal
  }
};
</script>

<i18n>
{
  "es":{
    "seo": {
      "title": "Aviso Legal"
    }
  },
  "en":{
    "seo": {
      "title": "Aviso Legal"
    }
  },
  "eus":{
    "seo": {
      "title": "Aviso Legal"
    }
  }
}
</i18n>