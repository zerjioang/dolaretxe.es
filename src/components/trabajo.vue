<!--
NOTA:

este componente (fichero) no está siendo utilizado en la version actual
-->
<template>
  <div>
    <pagetitle page="Trabaja con nosotros" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5 pb-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate">
            <div class="heading-section">
              <div>
                <h2 class="mb-4">Trabaja con nosotros</h2>
              </div>
              <p class="text-center">
                <img
                  class="icon"
                  :src="require('@/assets/images/cv.svg')"
                  alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
                />
              </p>
            </div>
          </div>
          <div class="col-md-6 ftco-animate">
            <p
              class="justified spaced"
            >En Dolaretxe estamos encantados de conocerte y recibir tu CV. Lamentablemente actualmente no disponemos de plazas libres. Por favor, añade esta sección a favoritos en tu navegador y consultala proximamente para conocer las novedades.</p>
          </div>
          <div class="col-md-6 ftco-animate">
            <p class="justified spaced">
              Tambien puedes enviarnos un email a
              <a href="mailto:info@dolaretxe.es">info@dolaretxe.es</a> con tus datos y adjuntando tu CV y lo recibiremos encantados para futuros procesos.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

export default {
  name: "trabajo-component",
  extends: template,
  methods: {},
  data: () => ({}),
  created() {
    console.log("trabajo::created");
  },
  mounted() {
    console.log("trabajo::mounted");
    this.jQueryInit();
  },
  components: {
    pagetitle: () => import("@/components/pagetitle")
  }
};
</script>

<style type="text/css" scoped="true">
.title-bold {
  font-size: 40px !important;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
}
.icon {
  max-width: 200px;
  padding: 20px;
}
.spaced {
  padding: 15px;
}
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