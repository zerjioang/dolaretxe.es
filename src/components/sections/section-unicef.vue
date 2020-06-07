<template>
  <section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-12 wrap-about ftco-animate pb-5">
          <div class="heading-section">
            <div>
              <h2>{{$t('unicef-title')}}</h2>
              <h5>{{$t('unicef-subtitle')}}</h5>
            </div>
            <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad">
              <img
                class="amiga img-responsive"
                :src="bgUnicefEscuelaAmiga"
                alt="dolaretxe escuela Infantil, Haurreskola y guarderia en bilbao"
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <p class="justified">
                  {{$t('desc1')}}
                </p>
              </div>

              <div class="col-md-4">
                <p class="justified">
                  {{$t('desc2')}}
                </p>
              </div>

              <div class="col-md-4">
                <p class="justified">
                  {{$t('desc3')}}
                </p>
              </div>
            </div>
            <div
              class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad unicef-bg"
            >
              <a href="http://www.unicef.es/" alt="UNICEF" target="_blank">
                <img
                  class="img-responsive img-unicef"
                  :src="bgUnicefFooter"
                  alt="dolaretxe escuela Infantil, Haurreskola y guarderia en bilbao"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import template from "@/mixins/template";

const bgUnicefFooter = require("@/assets/images/unicef.png");
const bgUnicefEscuelaAmiga = require("@/assets/images/unicef-amiga.png");

export default {
  name: "unicef-section",
  extends: template,
  methods: {},
  data: () => {
    return {
      bgUnicefFooter,
      bgUnicefEscuelaAmiga
    };
  },
  created() {
    console.log("unicef-section::created");
  },
  mounted() {
    console.log("unicef-section::mounted");
    this.jQueryInit();
  },
  components: {
    sectionUnicef: () => import("@/components/sections/section-unicef")
  }
};
</script>

<style type="text/css" scoped="true">
.amiga {
  width: 100%;
  width: -moz-available;
  width: -webkit-available;
  max-width: 600px;
}
.img-pad {
  padding-top: 10px;
  padding-bottom: 30px;
}
.img-unicef {
  width: 100%;
  width: -moz-available;
  width: -webkit-available;
}
.unicef-bg {
  background: #00b0fa;
}
</style>

<i18n>
{
    "es": {
        "unicef-title": "Escuela Amiga de UNICEF",
        "unicef-subtitle": "Comprometidos con la Infancia",
        "desc1": "Para la Escuela Infantil Dolaretxe Haur Eskola es un orgullo pertenecer a una organización como UNICEF por su compromiso con los Derechos de la Infancia.",
        "desc2": "El orgullo es doble al ser la primera Escuela Amiga de UNICEF en Euskadi, donde a partir de nuestro trabajo con los más pequeños queremos contribuir a difundir desde lo local, desde el corazón del Casco Viejo bilbaíno, los valores de solidaridad y ciudadanía global acordes con la misión de UNICEF.",
        "desc3": "Con un pequeño esfuerzo y el firme compromiso con los Derechos de la Infancia de cada uno de nosotros estaremos desarrollando una labor de incalculable valor en favor de nuestros hijos, alumnos y otros niños y niñas del mundo que están en situaciones muy desfavorables."
    },
    "en": {
        "unicef-title": "Escuela Amiga de UNICEF",
        "unicef-subtitle": "Comprometidos con la Infancia",
        "desc1": "Para la Escuela Infantil Dolaretxe Haur Eskola es un orgullo pertenecer a una organización como UNICEF por su compromiso con los Derechos de la Infancia.",
        "desc2": "El orgullo es doble al ser la primera Escuela Amiga de UNICEF en Euskadi, donde a partir de nuestro trabajo con los más pequeños queremos contribuir a difundir desde lo local, desde el corazón del Casco Viejo bilbaíno, los valores de solidaridad y ciudadanía global acordes con la misión de UNICEF.",
        "desc3": "Con un pequeño esfuerzo y el firme compromiso con los Derechos de la Infancia de cada uno de nosotros estaremos desarrollando una labor de incalculable valor en favor de nuestros hijos, alumnos y otros niños y niñas del mundo que están en situaciones muy desfavorables."
    },
    "eus": {
        "unicef-title": "UNICEF-en Adiskide Eskola",
        "unicef-subtitle": "Haurtzaroaz arduratuak",
        "desc1": "Dolaretxe Haur Hezkuntza Eskolak harro osoz hartzen du UNICEF bezalako antolamenduaren barne egotea, etxe horrek Haurtzaroaren Eskubideekin beti izan duen konpromezuarengatik.",
        "desc2": "Harro sentimena bikoitza dugu Euskadiko lehenengo UNICEF-en Adiskide Eskola garelako, umeekin egiten dugun eginkizuna dela medio elkartasun baloreak eta hirigintza globalak aditzera eman nahi ditugulako Bilboko Alde Zaharreko bihotz-bihotzetik.",
        "desc3": "Ahalegin txiki baina sendo batekin Haurtzaroaren Eskubideak gureak egiten baditugu gai izango gara eginkizun polita eta neurtezina bideratzea gure seme-alaben, ikasleriaren eta munduan zehar egoera larria sufritzen ari diren umeen alde egiteko."
    }
}
</i18n>