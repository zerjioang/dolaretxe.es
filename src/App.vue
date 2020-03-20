<template>
  <div id="app" @contextmenu="handler($event)">
    <loader v-if="$store.getters.loading"/>
    <div v-else>
      <stickyPhone/>
      <navbarComponent/>
      <router-view></router-view>
      <footerComponent/>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'app',
  methods : {
    handler: function(e) {
      // disable right button click
      e.preventDefault();
    }
  },
  mounted() {
    console.log("loading user prefered language");
    const stored = localStorage.getItem("lang");
    if(stored && stored == "es"){
      console.log("setting language to es");
      this.$i18n.locale = 'es'
    } else if(stored && stored == "eus"){
      console.log("setting language to eus");
      this.$i18n.locale = 'eus'
    }
  },
  components: {
    stickyPhone: () => import('@/components/stickyPhone'),
    navbarComponent: () => import('@/components/navbar'),
    footerComponent: () => import('@/components/footer'),
    loader: () => import('@/components/loader'),
  }
}
</script>

<style lang="scss">
</style>
