<template>
  <div>
    <pagetitle :page="$t('title')" />
    <sectionUnicef />
  </div>
</template>

<script>
export default {
  name: "unicef-component",
  methods: {},
  data: () => ({}),
  created() {
    console.log("compromiso-unicef::created");
  },
  mounted() {
    console.log("compromiso-unicef::mounted");
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
    sectionUnicef: () => import("@/components/sections/section-unicef")
  }
};
</script>

<style type="text/css" scoped="true">
</style>

<i18n>
{
  "es":{
    "title": "Compromiso UNICEF"
  },
  "en":{
    "title": "Commitment with UNICEF"
  },
  "eus":{
    "title": "UNICEF-ekiko konpromisoa"
  }
}
</i18n>