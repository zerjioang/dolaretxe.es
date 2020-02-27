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
      // e.preventDefault();
      // alert("usage of right click is not allowed")
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
