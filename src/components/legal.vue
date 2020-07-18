<!--
NOTA:

El contenido del mensaje legal no se ha traducido
--><template>
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
              <p class="justified">
                El presente sitio web es propiedad de ESCUELA INFANTIL DOLARETXE (PRIMERAN, S.L.), tiene por objeto facilitar a nuestros clientes así como a cualquier otro usuario, información relativa a los productos o servicios de ESCUELA INFANTIL DOLARETXE.
                Le rogamos lea atentamente la siguiente información antes de hacer uso de esta página web, ya que la utilización de la misma está sujeta a las siguientes condiciones de uso:
                I. La totalidad del contenido de la página web está protegido por los derechos de propiedad industrial e intelectual titularidad de ESCUELA INFANTIL DOLARETXE o, en su caso, de sus licencias, que el usuario de ésta página web debe respetar.
                II. La reproducción, copia, uso, distribución, comercialización, comunicación pública o cualquier otra actividad que se pueda llevar a cabo con la información contenida en estas páginas web y que se realice sin autorización expresa por parte de ESCUELA INFANTIL DOLARETXE y/o de los propietarios de las marcas, es una infracción que castiga la legislación vigente.
                III. Queda prohibida su reproducción, copia, uso, distribución, comercialización, comunicación pública o cualquier otra actividad que se pueda llevar a cabo con la información contenida en estas páginas web de forma total o parcial sin la autorización expresa de ESCUELA INFANTIL DOLARETXE y de los propietarios de las marcas.
                IV. Los nombres y logotipos expuestos en estas páginas son marcas comerciales registradas, propiedad de ESCUELA INFANTIL DOLARETXE
                V. es un dominio registrado de ESCUELA INFANTIL DOLARETXE, los dominios de ESCUELA INFANTIL DOLARETXE no pueden ser empleados en relación con otros productos o servicios que no sean de ESCUELA INFANTIL DOLARETXE, y que bajo ningún concepto pueda causar confusión entre los usuarios o descrédito de ESCUELA INFANTIL DOLARETXE
                VI. ESCUELA INFANTIL DOLARETXE, rechaza toda responsabilidad que se derive de la mala utilización de los contenidos expuestos en estas páginas y se reserva el derecho a actualizarlos, eliminarlos, establecer limitaciones o restringir su acceso en cualquier momento, de manera temporal o permanente.
                VII. ESCUELA INFANTIL DOLARETXE no se hace responsable de los posibles errores de seguridad que se pudieran producir por el hecho de utilizar ordenadores infectados con Virus informáticos o de las consecuencias que se pudieran derivar del mal funcionamiento del navegador o por el uso de versiones no actualizadas de éste.
                VIII. ESCUELA INFANTIL DOLARETXE se reserva la facultad de en cualquier momento y sin necesidad de previo aviso, realizar modificaciones y actualizaciones sobre la información contenida en su página web o en su configuración o en su presentación.
                IX. Para utilizar algunos de los servicios ofrecidos en ésta página web, los usuarios deben proporcionar a ESCUELA INFANTIL DOLARETXE ciertos datos de carácter personal, por ello ESCUELA INFANTIL DOLARETXE se compromete a respetar la confidencialidad de dichos datos en aplicación a lo dispuesto en la L.O.15/1999 de 13 de diciembre, de Protección de Datos de Carácter Personal y a ajustarse a la Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico en cuanto al envío de comunicaciones comerciales. (“link” a Protección de Datos)
                X. El usuario es consciente y acepta voluntariamente que tanto el acceso a la página web como el uso de cualesquiera de los contenidos en ella contenida tiene lugar, en todo caso, bajo su única y exclusiva responsabilidad, y que se obliga a utilizarla de manera plenamente conforme con las leyes, los usos de tráfico y las presentes condiciones por lo que responderá frente a ESCUELA INFANTIL DOLARETXE o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dichas obligaciones.
              </p>
              <h5>Información de la empresa</h5>
              <h6>Sede social</h6>
              <p class="justified">
                ESCUELA INFANTIL DOLARETXE (PRIMERAN, S.L.)
                <br />CALLE PRIM 11 48006 BILBAO- BIZKAIA – España
                <br />Tel. 946004558 Fax: -- e-mail: info@dolaretxe.es
                <br />CIF: B95593497
                <br />
              </p>
              <h6>Registro mercantil</h6>
              <p class="justified">
                Inscrita en el Registro Mercantil de BIZKAIA, tomo 5094, folio 41, hoja BI55702, inscripción 1ª.
                <br />El logotipo ESCUELA INFANTIL DOLARETXE es una marca registrada.
                <br />Sitio web: www.dolaretxe.es
                <br />Correo electrónico: e-mail: info@dolaretxe.es
                <br />
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
  name: "legal-component",
  mixins: [template],
  methods: {},
  data: () => ({}),
  created() {
    console.log("legal::created");
  },
  mounted() {
    console.log("legal::mounted");
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
    "pagetitle": "Aviso Legal"
  },
  "en":{
    "pagetitle": "Legal Advice"
  },
  "eus":{
    "pagetitle": "Lege Oharra"
  }
}
</i18n>