<template>
  <form
    action="#"
    class="request-form ftco-animate"
    ref="formElement"
    @submit.prevent="onSubmitContact($event)"
  >
    <img class="img-baby" :src="require('@/assets/images/baby.png')" />
    <h2>Matrícula abierta</h2>
    <p>Estas de enhorabuena!</p>
    <p
      class="justified"
    >El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza.</p>
    <p class="justified">
      Finalización del plazo:
      <br />
      <strong>1 de abril del 2020</strong>
    </p>
    <div class="form-group">
      <input
        type="submit"
        value="Contactar"
        class="btn dolar-gradient-orangred py-3 px-4 btn-matricula"
      />
    </div>
  </form>
</template>
<script>
import template from "@/mixins/template";

export default {
  name: "component-matricula-cta",
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
</style>