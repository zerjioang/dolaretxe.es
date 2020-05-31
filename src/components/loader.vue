<template>
  <!-- loader -->
  <div id="app-loader" class="show fullscreen">
    <svg class="circular" width="48px" height="48px">
      <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
      <circle
        class="path"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke="#F96D00"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "loader-component",
  mixins: [],
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("loader::created");
  },
  mounted() {
    console.log("loader::mounted");
  },
  components: {}
};
</script>

<style scoped lang="css">
</style>

<style scoped lang="scss">
</style>
