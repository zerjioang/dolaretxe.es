<template>
  <section class="ftco-section mt-3 form-bg">
    <div class="container-fluid px-4">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
          <matriculaCta />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "matricula-section",
  components: {
    matriculaCta: () => import("@/components/matriculaCta")
  }
};
</script>

<style scoped>
.form-bg {
  background: #fb3d11;
}
</style>