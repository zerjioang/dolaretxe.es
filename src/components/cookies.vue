<!--

NOTA:
el texto legal de la politica de cookies no se ha traducido

-->
<template>
  <div>
    <pagetitle :page="$t('pagetitle')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-2">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('pagetitle')}}</h2>
              </div>

              <h5>¿Que es una cookie?</h5>
              <p
                class="justified"
              >Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice el equipo, pueden utilizarse para reconocer al usuario. Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos: cookies propias y cookies de terceros. Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de cookies de sesión o cookies persistentes. Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la que se traten los datos obtenidos: cookies técnicas, cookies de personalización, cookies de análisis, cookies publicitarias y cookies de publicidad comportamental. Para más información a este respecto puede consultar la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos.</p>

              <h5>Tipos de cookies</h5>
              <h6>Según la entidad que las gestione</h6>
              <ul>
                <li>Cookies propias: son aquellas que se recaban por el propio editor para prestar el servicio solicitado por el usuario.</li>
                <li>Cookies de tercero: son aquellas que son recabadas y gestionadas por un tercero, estas no se pueden considerar propias.</li>
              </ul>
              <h6>Según el plazo de tiempo que permanezcan activadas</h6>
              <ul>
                <li>Cookies de sesión: recaban datos mientras el usuario navega por la red con la finalidad de prestar el servicio solicitado.</li>
                <li>Cookies persistentes: se almacenan en el terminal y la información obtenida, será utilizada por el responsable de la cookie con la finalidad de prestar el servicio solicitado</li>
              </ul>
              <h6>Según su finalidad</h6>
              <ul>
                Cookies técnicas: son las necesarias para la correcta navegación por la web.
                Cookies de personalización: Permiten al usuario las características(idioma) para la navegación por la website.
                Cookies de análisis: Permiten al prestador el análisis vinculado a la navegación realizada por el usuario, con la finalidad de llevar un seguimiento de uso de la página web así como realizar estadísticas de los contenidos más visitados, número de visitantes, etc.
                Cookies publicitarias: Permiten al editor incluir en la web espacios publicitarios, según el contenido de la propia web.
                Comportamental: Permiten incluir en la web espacios publicitarios según la información obtenida a través de los hábitos de navegación del usuario.
              </ul>

              <h5>
                Cookies usadas en
                <strong>dolaretxe.es</strong>
              </h5>
              <h6>Cookies de Analítica</h6>
              <p class="justified">
                Este sitio Web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043. Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.
                <br />El Usuario acepta expresamente, por la utilización de este Sitio Web, el tratamiento de la información recabada en la forma y con los fines anteriormente mencionados. Y asimismo reconoce conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de Cookies mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo de Cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del Website.
                <br />
                <br />Puede encontrar más información al respecto e inhabilitar el uso de estas cookies en la siguiente dirección:
                <br />
                <a
                  href="https://www.google.com/intl/es_es/policies/technologies/cookies/"
                  target="blank"
                  rel="noopener"
                >https://www.google.com/intl/es_es/policies/technologies/cookies/</a>
              </p>

              <p
                class="justified"
              >El Usuario puede, libremente, decidir acerca de la implantación o no, en su disco duro, de las cookies empleadas. En este sentido, el Usuario puede configurar su navegador para aceptar o rechazar, por defecto, todas las cookies, o para recibir un aviso en pantalla de la recepción de cada cookie y decidir, en ese momento, su implantación o no en su disco duro. Para ello, le proporcionamos la sección de ayuda de los principales navegadores, para saber cómo cambiar la configuración que actualmente emplea:</p>

              <h5>Contenido incrustado de otros sitios web</h5>
              <p class="justified">
                Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.
                Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.
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
  name: "cookies-component",
  mixins: [template],
  methods: {},
  data: () => ({}),
  created() {
    console.log("cookies::created");
  },
  mounted() {
    console.log("cookies::mounted");
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
ul,
li {
  text-align: justify;
}
</style>

<i18n>
{
  "es":{
    "pagetitle": "Política de Cookies"
  },
  "en":{
    "pagetitle": "Cookie Policy"
  },
  "eus":{
    "pagetitle": "Cookien politika"
  }
}
</i18n>