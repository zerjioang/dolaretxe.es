<template>
  <div>
    <pagetitle :page="$t('title-visita-virtual')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb pa-5">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="col-xs-12 col-md-6 col-lg-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          >
            <!-- include google maps iframe for free -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.6611082492964!2d-2.920260001981129!3d43.25852385975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6e2cf49d4cdbeba!2sEscuela%20Infantil%20%C2%B7%20DOLARETXE%20%C2%B7%20Haur%20Eskola!5e0!3m2!1ses!2ses!4v1576769681457!5m2!1ses!2ses"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen
            ></iframe>
          </div>

          <div class="col-md-6 wrap-about py-md-5 ftco-animate">
            <div class="heading-section">
              <div>
                <h2 class="mb-4">{{$t('title-visita-virtual')}}</h2>
              </div>
              <p class="justified">{{$t('desc1')}}</p>
              <p class="justified">{{$t('desc2')}}</p>
              <a
                href="https://goo.gl/maps/h1oBtG5b7VeHczkQ8"
                target="blank"
                rel="noopener"
                class="btn btn-primary"
              >{{$t('dolaretxe-360')}}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('por-instalaciones')}}</h2>
              </div>
              <p class="justified">{{$t('por-instalaciones-desc')}}</p>

              <div class="row d-flex">
                <div
                  class="col-xs-12 col-md-6 col-lg-6"
                  v-for="(item,i) in list.vr"
                  :key="item.title"
                >
                  <vrCard :title="$t('vr-salas-names-list')[i]" :vr="item" />
                </div>
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
  name: "visitavirtual-component",
  extends: template,
  methods: {},
  data: () => {
    return {
      image: require("@/assets/images/virtual.jpg"),
      list: {
        vr: [
          "https://www.google.com/maps/embed?pb=!4v1576770032106!6m8!1m7!1sCAoSLEFGMVFpcE1uS0lFR01RNlF0YjFnb2hNOE01eXZkQ2x4TVBneUR3N2JSTHhF!2m2!1d43.25865805259303!2d-2.91844887510274!3f100!4f0!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576770910819!6m8!1m7!1sCAoSLEFGMVFpcFBQWm16WTl2dTV3VDIyTktob0k2RmM4ei1NNXV3QnJONEtldnZl!2m2!1d43.25862096014243!2d-2.918598800912378!3f300!4f0!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576770955105!6m8!1m7!1sCAoSLEFGMVFpcFBYRXF5b2xIU0FJNk90SUpiQl9tOXAtYzR3eV8zdVZ0a2s4N0ZU!2m2!1d43.2584959767037!2d-2.918657983878802!3f320!4f10!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576771010786!6m8!1m7!1sCAoSLEFGMVFpcFB6TWFzM1Y3eUdpOU5qc3NScUk3R2dlUk1ZdVJlcFdEQ0VQeWZk!2m2!1d43.258518481675!2d-2.918764222095547!3f0!4f0!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576771023325!6m8!1m7!1sCAoSLEFGMVFpcFBxRkdWLWw2ZUNRR20zbTlOVUNEUUNhVkMtRWFJckJSdEVoRGxi!2m2!1d43.25856163682872!2d-2.91897644817368!3f20!4f10!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576771050479!6m8!1m7!1sCAoSLEFGMVFpcFA0MWF4TjZzVW1VZEIzQm41bEl1Y3U5R2FuZVlQc1ZmVV95NHB3!2m2!1d43.25863359832675!2d-2.918486078011711!3f120!4f10!5f0.7820865974627469",
          "https://www.google.com/maps/embed?pb=!4v1576771070287!6m8!1m7!1sCAoSLEFGMVFpcE9YY2JGUlEwZWlYRGJRd3UtNEliR3dfcGxqUkpyWWZuN1ZUeW9o!2m2!1d43.25858590398227!2d-2.918497284425712!3f180!4f10!5f0.7820865974627469"
        ]
      }
    };
  },
  created() {
    console.log("visitavirtual::created");
  },
  mounted() {
    console.log("visitavirtual::mounted");
    this.jQueryInit();
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
    vrCard: () => import("@/components/vrCard")
  }
};
</script>

<style type="text/css" scoped="true">
</style>

<i18n>
{
	"es": {
		"title-visita-virtual": "Visita Virtual",
		"desc1": "En Dolaretxe ofrecemos unas instalaciones modernas dotadas de un amplio patio exterior donde los niños podrán disfrutar y aprender jugando tutelados por educadores afectuosos y pacientes.",
		"desc2": "Una imagen vale mas que mil palabras:",
		"dolaretxe-360": "Ver Dolaretxe en 360º",
		"por-instalaciones": "Por instalaciones",
		"por-instalaciones-desc": "Tambien puedes visitar Dolaretxe de manera virtual y acceder a nuestras instalaciones como si estuvieras en persona!",
		"vr-salas-names-list": [
			"Clase Verde",
			"Clase Azul",
			"Entrada principal",
			"Patio",
			"Entrada",
			"Clase Verde",
			"Clase Celeste"
		]
	},
	"en": {
		"title-visita-virtual": "Visita Virtual",
		"desc1": "En Dolaretxe ofrecemos unas instalaciones modernas dotadas de un amplio patio exterior donde los niños podrán disfrutar y aprender jugando tutelados por educadores afectuosos y pacientes.",
		"desc2": "Una imagen vale mas que mil palabras:",
		"dolaretxe-360": "Ver Dolaretxe en 360º",
		"por-instalaciones": "Por instalaciones",
		"por-instalaciones-desc": "Tambien puedes visitar Dolaretxe de manera virtual y acceder a nuestras instalaciones como si estuvieras en persona!",
		"vr-salas-names-list": [
			"Clase 1",
			"Clase 2",
			"Clase 3",
			"Clase 4",
			"Clase 5",
			"Clase 6",
			"Clase 8"
		]
	},
	"eus": {
		"title-visita-virtual": "Bisita Birtuala",
		"desc1": "Dolaretxen instalazio modernoak eskaintzen ditugu, kanpoko jolastoki zabalarekin, hezitzaile amultsuen eta pazienteen tutoretzapean jolastuz gozatu eta ikasi ahal izateko.",
		"desc2": "Irudi batek mila hitzek baino gehiago balio du",
		"dolaretxe-360": "Dolaretxe ikusi 360ºtan",
		"por-instalaciones": "Dolaretxeko instalazioak",
		"por-instalaciones-desc": "Era berean, Dolaretxe bisita dezakezu modu birtualean, eta gure instalazioetara sar zaitezke, zuzenean bazeunde bezala!",
		"vr-salas-names-list": [
			"Gela Berdea",
			"Gela Urdina",
			"Sarrera nagusia",
			"Patioa",
			"Sarrera",
			"Gela Berdea",
			"Gela Urdin Argia"
		]
	}
}
</i18n>