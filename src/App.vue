<template>
  <div id="app" @contextmenu="handler($event)">
    <loader v-if="$store.getters.loading" />
    <div v-else>
      <stickyPhone />
      <navbarComponent />
      <router-view></router-view>
      <footerComponent />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  metaInfo: {
    title: "Bienvenido",
    titleTemplate:
      "%s | Dolaretxe, Escuela infantil Bilbao. Casco Viejo, Bilbao",
    htmlAttrs: {
      author: "zerjioang",
      lang: "es",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        property: "og:title",
        title: "Dolaretxe",
        // following template options are identical
        // template: '%s - My page',
        template: chunk => `${chunk} - My page`,
        vmid: "og:title"
      }
    ]
  },
  methods: {
    handler: function(e) {
      // disable right button click
      e.preventDefault();
    }
  },
  mounted() {
    console.log("loading user prefered language from app");
    const stored = localStorage.getItem("lang");
    if (stored && stored == "es") {
      console.log("setting language to es");
      this.$i18n.locale = "es";
      this.$root.$i18n.locale = "es";
    } else if (stored && stored == "eus") {
      console.log("setting language to eus");
      this.$i18n.locale = "eus";
      this.$root.$i18n.locale = "eus";
    } else if (stored && stored == "en") {
      console.log("setting language to en");
      this.$i18n.locale = "en";
      this.$root.$i18n.locale = "en";
    }
  },
  components: {
    stickyPhone: () => import("@/components/stickyPhone"),
    navbarComponent: () => import("@/components/navbar"),
    footerComponent: () => import("@/components/footer"),
    loader: () => import("@/components/loader")
  }
};
</script>

<style lang="scss">
</style>

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