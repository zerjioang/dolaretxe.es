<template>
  <section class="pt-4 pb-4 dolar-gradient-2">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-12 align-self-stretch ftco-animate text-center">
            <h3 class="mb-5" style="color:white;">{{$t('glue_text')}}</h3>
          <div class="container col-md-12 text-center heading-section ftco-animate">
            <img class="img-agenda pb-3" :src="require('@/assets/images/agenda.svg')" />
            <h2 class="mb-3" style="color:white;">{{$t('title')}}</h2>
            <blockquote class="blockquote" style="color:white;">
              <p class="mb-0">{{$t('description')}}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import template from "@/mixins/template";

export default {
  mixins: [template],
  mounted() {
    console.log("agendaDigitala::mounted");
    this.jQueryInit();
  }
};
</script>

<style type="text/css" scoped="true">
.img-agenda {
  max-width: 80px;
}
</style>


<i18n>
{
  "es":{
      "glue_text": "Y además...",
      "title": "Agenda digital infantil",
      "description": "Para tener toda la información detallada del dia dia en la escuela."
  },
  "en":{
      "glue_text": "",
      "title": "",
      "description": ""
  },
  "eus":{
      "glue_text": "Eta gainera...",
      "title": "Haur agenda digitala",
      "description": "Eskolako eguneroko bizitzari buruzko informazio zehatza esku izateko."
  }
}
</i18n>