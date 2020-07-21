<template>
  <form
    action="#"
    class="request-form ftco-animate"
    ref="formElement"
    @submit.prevent="onSubmitContact($event)"
  >
    <img v-if="layout.showImgBaby" class="img-baby" :src="require('@/assets/images/baby.png')" />
    <h2>{{$t('title')}}</h2>
    <p>{{$t('desc1')}}</p>
    <p class="justified">{{$t('desc2')}}</p>
    <p v-if="layout.showFechaFin" class="justified">
      {{$t('fin')}}
      <strong>{{fechaFin}}</strong>
    </p>
    <div class="form-group">
      <input
        type="submit"
        :value="$t('contact')"
        class="btn dolar-gradient-orangred py-3 px-4 btn-matricula"
      />
    </div>
  </form>
</template>
<script>
import template from "@/mixins/template";

export default {
  name: "component-matricula-cta",
  data: () => ({
    layout: {
      showFechaFin: false,
      showImgBaby: false,
      matriculaFin: process.env.VUE_APP_MATRICULA_FIN_FECHA
    }
  }),
  computed: {
    fechaFin: function() {
      if (this.layout.matriculaFin == "") {
        return "contacte para consultar plazo";
      }
      try {
        const d = new Date(this.layout.matriculaFin);
        return d.toDateString();
      } catch (err) {
        return "contacte para consultar plazo";
      }
    }
  },
  methods: {
    onSubmitContact: function(e) {
      if (e) {
        e.preventDefault();
      }
      const sendForm = false;
      if (sendForm) {
        var vm = this;
        var formElement = vm.$refs.formElement;
        var formData = new FormData(formElement);
        var url =
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeihRMLgHFVTFio8P62wQtiCf4TJQT9MgxRgGWABf_19XDG_g/formResponse";
        axios.post(url, formData).then(function(response) {
          console.log(response);
        });
      } else {
        this.$router.push({ name: "contact" });
      }
    }
  },
  mixins: [template],
  created() {
    console.log("matricula-section::created");
  },
  mounted() {
    console.log("matricula-section::mounted");
    this.jQueryInit();
  }
};
</script>

<style scoped>
.img-baby {
  max-width: 100px;
}
.btn-matricula {
  color: white !important;
  font-weight: bold;
  font-size: 17pt;
}

.request-form {
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 31px -21px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 31px -21px rgba(0, 0, 0, 0.33);
  width: 100%;
}
</style>

<i18n>
{
  "es":{
    "title":"Matrícula abierta",
    "desc1":"Estas de enhorabuena!",
    "desc2": "El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza.",
    "fin": "Finalización del plazo:",
    "contact": "Contáctanos"
  },
  "en":{
    "title":"Matrícula abierta",
    "desc1":"Estas de enhorabuena!",
    "desc2": "El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza.",
    "fin": "Finalización del plazo:",
    "contact": "Contact us"
  },
  "eus":{
    "title":"Matrikula irekia",
    "desc1":"Zorionak!",
    "desc2": "Ikastaro honetarako matrikulazio epea oraindik zabalik dago! Azkar ibili eta gurekin harremanetan jar zaitez, zure plaza erreserbatzeko aukeren berri emango dizugu.",
    "fin": "Epea amaitzea:",
    "contact": "Harremanetan jarri"
  }
}
</i18n>
