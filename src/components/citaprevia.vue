<template>
  <div>
    <pagetitle page="Cita previa" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate">
            <div class="heading-section">
              <div>
                <h2>Solicitar cita previa</h2>
              </div>

              <p
                class="justified"
              >Bienvenido a Dolaretxe Cita Previa. Por favor, inidiquenos mediante el siguiente formulario cuando desea visitar Dolaretxe. Tambien puede indicarnos el telefono para hablarlo directamente y poder encontrar un hueco de forma mucho más agil!</p>

              <div class="col-lg-6 col-md-6 cita-form mt-0 mt-md-5">
                <form
                  action="#"
                  class="ftco-animate"
                  ref="formElement"
                  @submit.prevent="onSubmitContact($event)"
                >
                  <h3>Pedir cita</h3>
                  <fieldset>
                    <div class="form-group">
                      <label>Nombre</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Ana"
                        name="entry.1095771434"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Tu email"
                        name="entry.1769879797"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Tu telefono"
                        name="entry.1061604649"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Horario en el que podrias venir</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Horario de Mañana"
                        name="entry.1061604649"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Dias que puedes venir entre semana</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Seleccionar"
                        name="entry.1061604649"
                        required
                      />
                    </div>
                  </fieldset>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Solicitar cita"
                      class="btn dolar-gradient-orangred py-3 px-4"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

export default {
  name: "citaprevia-component",
  extends: template,
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("citaprevia::created");
  },
  mounted() {
    console.log("citaprevia::mounted");
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
.cita-form {
  padding: 0px;
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