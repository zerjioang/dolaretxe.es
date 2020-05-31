<template>
  <legal />
</template>

<script>
import legal from "@/components/legal.vue";

export default {
  name: "view-legal",
  metaInfo: {
    title: "Aviso Legal"
  },
  mounted() {
    console.log("mounted::view-legal");
    this.$store.commit("appLoading", false);
  },
  components: {
    legal: legal
  }
};
</script>

<i18n>
{
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>