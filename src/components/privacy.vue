<!--
NOTA: el contenido legal de la politica de privacidad no se ha traducido
-->
<template>
  <div>
    <pagetitle :page="$t('title')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-2">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('title')}}</h2>
              </div>
              <h6>
                <strong>ESCUELA INFANTIL DOLARETXE</strong> (PRIMERAN, S.L.) CALLE PRIM 11 48006 BILBAO- BIZKAIA – España
              </h6>
              <p class="justified">
                Dolaretxe informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.
                <br />En este sentido, Dolaretxe garantiza el cumplimiento del Reglamento General de Protección de Datos (RGPD) vigente y obligatorio para todas las empresas europeas desde el 25 de mayo de 2018.
              </p>

              <p class="justified">
                En cumplimiento de lo dispuesto en el artículo 5 de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (en adelante, "LOPD"), y Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (en adelante, "LSSI"),
                <strong>ESCUELA INFANTIL DOLARETXE</strong> le informa de que los datos de carácter personal proporcionados mediante la cumplimentación de los formularios de registro electrónico contenidos en este site , así como aquellos datos a los que
                <strong>ESCUELA INFANTIL DOLARETXE</strong> acceda como consecuencia de su navegación; de la consulta, solicitud o contratación de otros servicios o productos, o de cualquier transacción u operación realizada durante la prestación por parte de
                <strong>ESCUELA INFANTIL DOLARETXE</strong> de los servicios ofrecidos en este site, serán recogidos en un fichero cuyo responsable es
                <strong>ESCUELA INFANTIL DOLARETXE</strong> en cuya sede social sita en CALLE PRIM 11 48006 BILBAO- BIZKAIA – España, podrá ejercer su derecho de acceso, rectificación, cancelación y oposición al tratamiento de sus datos personales, en los términos y condiciones previstos en la ley. Para su mayor comodidad, también podrá ejercer los derechos antes mencionados dirigiéndose a la dirección de correo electrónico: info@dolaretxe.es
                <br />Rogamos que comunique de forma inmediata a
                <strong>ESCUELA INFANTIL DOLARETXE</strong> cualquier modificación de sus datos de carácter personal a fin de que la información contenida en los ficheros de
                <strong>ESCUELA INFANTIL DOLARETXE</strong> esté en todo momento actualizada y no contenga errores. Asimismo, con la aceptación de este aviso legal, reconoce que la información y los datos personales recabados son exactos y veraces.
                <br />El hecho de que no introduzca los datos de carácter personal que aparecen en los formularios contenidos en el site podrá tener como consecuencia que no se pueda atender su solicitud.
                <br />La recogida de datos de carácter personal se lleva a cabo con la finalidad de realizar el desarrollo, cumplimiento y control de los servicios ofrecidos por
                <strong>ESCUELA INFANTIL DOLARETXE</strong>; confeccionar estadísticas, y remitir publicidad de otros productos y servicios, avisos, ofertas y, en general, información de carácter comercial de interés, de
                <strong>ESCUELA INFANTIL DOLARETXE</strong>
                <br />De conformidad con lo previsto en los artículos 11 y 34.e) de la LOPD, y atendiendo a la naturaleza de los servicios que
                <strong>ESCUELA INFANTIL DOLARETXE</strong> le ofrece, recabamos igualmente su consentimiento para que sus datos sean comunicados en favor de filiales o entidades colaboradoras.
                <br />
                <strong>ESCUELA INFANTIL DOLARETXE</strong> se compromete a tratar de forma absolutamente confidencial los datos de carácter personal y a hacer uso de los mismos exclusivamente para las finalidades indicadas.
                <strong>ESCUELA INFANTIL DOLARETXE</strong> le informa de que tiene implantadas las medidas de seguridad de índole técnica y organizativas necesarias para garantizar la seguridad de sus datos de carácter personal y evitar su alteración, pérdida y tratamiento y/o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o natural.
                <br />Todo ello, de conformidad con lo previsto en el artículo 9 de la LOPD y en el Real Decreto 1720/2007, por el que se aprueba el Reglamento de desarrollo de la L. O. 15/1999 y la ley 34/2002, de 11 de Julio,
              </p>
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
  name: "privacy-component",
  mixins: [template],
  methods: {},
  data: () => ({}),
  created() {
    console.log("privacy::created");
  },
  mounted() {
    console.log("privacy::mounted");
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
</style>

<i18n>
{
  "es":{
    "title": "Política de privacidad"
  },
  "en":{
    "title": "Privacy policy"
  },
  "eus":{
    "title": "Pribatasun politika"
  }
}
</i18n>