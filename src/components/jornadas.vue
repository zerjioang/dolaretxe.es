<template>
  <div>
    <pagetitle :page="$t('pagetitle')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb mt-5 mb-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pt-5 pl-md-5">
              <div>
                <h2 class="mb-4">{{$t('pagetitle')}}</h2>
              </div>
              <div>
                <h3 class="mb-4">{{$t('calendario_escolar')}}</h3>
              </div>
              <p
                class="justified"
              >{{$t('jornadas_desc_1')}}</p>
              <p
                class="justified"
              >{{$t('jornadas_desc_2')}}</p>

              <!-- start modalidades de jornadas -->
              <div>
                <h3 class="mb-4">{{$t('jornadas_tipos_title')}}</h3>
              </div>
              <div class="row">
                <div class="col-xs-6 col-md-4 col-lg-4" v-for="item in $t('jornadaList')" :key="item.id">
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end modalidades de jornadas -->

              <!-- start horarios ampliados -->
              <div>
                <h3>{{$t('horarios_title')}}</h3>
                <p>{{$t('horarios_subtitle')}}</p>
              </div>
              <div class="row">
                <div
                  class="col-xs-6 col-md-6 col-lg-6"
                  v-for="item in $t('horariosAmpliadosList')"
                  :key="item.id"
                >
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end horarios ampliados -->
            </div>
          </div>
          <div class="col-md-12 wrap-about ftco-animate">
            <div class="heading-section pl-md-5">
              <div>
                <h3 class="mb-4">{{$t('salidas_title')}}</h3>
              </div>
              <p
                class="justified"
              >{{$t('salidas_subtitle')}}</p>
              <ul>
                <li v-for="item in $t('horariosList')" :key="item">{{item}}</li>
              </ul>
              <p
                class="justified"
              >{{$t('horarios_subtitle_2')}}</p>
              <!-- start modalidades de jornadas -->

              <!-- start: apartado que describe la info sobre comidas -->
              <div>
                <h3 class="mb-4">{{$t('comida_title')}}</h3>
              </div>
              <p class="justified">
                {{$t('comida_subtitle')}}
              </p>
              <div class="row">
                <div class="col-xs-6 col-md-6 col-lg-6" v-for="item in $t('comidaList')" :key="item.id">
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end: apartado que describe la info sobre comidas -->

              <!-- start: apartado que describe la info sobre ludoteca -->
              <div>
                <h3 class="mb-4">{{$t('ludoteca_title')}}</h3>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p class="justified">
                    {{$t('ludoteca_subtitle')}}
                  </p>
                </div>
                <div class="col-xs-6 col-md-4 col-lg-4" v-for="item in $t('ludotecaList')" :key="item.id">
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <p class="justified">
                    {{$t('ludoteca_subtitle_2')}}
                  </p>
                </div>
                <div
                  class="col-xs-12 col-md-4 col-lg-4"
                  v-for="item in $t('ludoteca2List')"
                  :key="item.id"
                >
                  <div class="justify-content-center counter-wrap ftco-animate">
                    <featureBox
                      :text="item.text"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                      :colorClass="item.class"
                    />
                  </div>
                </div>
              </div>
              <!-- end: apartado que describe la info sobre ludoteca -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

const imagelist = [
  require("@/assets/images/carrousel/jornadas/symNivopage14_0.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_1.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_2.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_3.jpg"),
  require("@/assets/images/carrousel/jornadas/symNivopage14_4.jpg")
];
export default {
  name: "jornadas-component",
  extends: template,
  methods: {},
  data: () => {
    return {
      imagelist,
      imageIdx: 0,
      current: imagelist[0],
    };
  },
  methods: {
    randomIntFromInterval: function(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  created() {
    console.log("jornadas::created");
  },
  mounted() {
    console.log("jornadas::mounted");
    this.jQueryInit();
    this.imageIdx = this.randomIntFromInterval(0, imagelist.length - 1);
    this.current = this.imagelist[this.imageIdx];
  },
  components: {
    pagetitle: () => import("@/components/pagetitle"),
    featureBox: () => import("@/components/featureBox")
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
    "es": {
        "pagetitle": "Jornadas",
        "calendario_escolar": "Calendario Escolar",
        "jornadas_desc_1": "El curso escolar se extiende desde septiembre hasta julio inclusive, 11 meses de curso. Abrimos los días hábiles de Navidad y Semana Santa y si hubiera un grupo mínimo de alumnos también la primera quincena de agosto. Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. En ningún caso es aconsejable que los niños permanezcan en el centro más de 8 horas diarias.",
        "jornadas_desc_2": "Ofrecemos el modelo lingüístico bilingüe (euskera-castellano) con introducción al inglés.",
        "jornadas_tipos_title": "Tres jornadas diferentes",
        "jornadaList": [
            {
                "id": 0,
                "icon": "ion-md-briefcase",
                "class": "bg-dlrtx-1",
                "text": "Jornada de mañana",
                "subtitle": "(9:00h a 13:30h)"
            },
            {
                "id": 1,
                "icon": "ion-md-partly-sunny",
                "class": "bg-dlrtx-2",
                "text": "Media jornada",
                "subtitle": "(9:00h a 15:30h)"
            },
            {
                "id": 2,
                "icon": "ion-md-cloudy-night",
                "class": "bg-dlrtx-3",
                "text": "Jornada Completa",
                "subtitle": "(9:00h a 17:00h)"
            }
        ],
        "horarios_title": "Además disponemos de los siguientes horarios ampliados",
        "horarios_subtitle": "De los que podrás beneficiarte en caso de necesidad para acudir a Dolaretxe",
        "horariosAmpliadosList": [
            {
                "id": 0,
                "icon": "ion-md-briefcase",
                "class": "bg-dlrtx-4",
                "text": "Ampliado de mañana",
                "subtitle": "(7:30h a 9:00h)"
            },
            {
                "id": 1,
                "icon": "ion-md-partly-sunny",
                "class": "bg-dlrtx-5",
                "text": "Ampliado de tarde",
                "subtitle": "(17:00h a 19:00h)"
            }
        ],
        "salidas_title": "Entrada y salida",
        "salidas_subtitle": "Hay diferentes momentos de entrada y salida que ofrecen una mayor flexibilidad horaria.",
        "horariosList": [
            "Entrada: De 7:30h a 9:45h",
            "Salidas: De 13:15h a 13:30h",
            "Salidas: 15:15h a 15:30h",
            "Salidas: 16:30h a 17:00h"
        ],
        "horarios_subtitle_2": "Además, disponemos de un lugar cubierto para dejar los carros en la escuela.",
        "comida_title": "Comida",
        "comida_subtitle": "Distintas opciones de comedor: Comida casera traída por los padres o servicio de catering.",
        "comidaList": [
            {
                "id": 3,
                "icon": "ion-md-cart",
                "class": "bg-dlrtx-1",
                "text": "Túper casero",
                "subtitle": "traido por los padres"
            },
            {
                "id": 4,
                "icon": "ion-md-restaurant",
                "class": "bg-dlrtx-1",
                "text": "Servicio de comida",
                "subtitle": "catering profesional"
            }
        ],
        "ludoteca_title": "Ludoteca",
        "ludoteca_subtitle": "Abrimos la escuela todas las tardes, Navidades y Semana Santa.",
        "ludoteca_subtitle_2": "Y los meses de junio, julio y agosto para niños con edades comprendidas entre los 0 a 6 años",
        "ludotecaList": [
            {
                "id": 5,
                "icon": "ion-md-sunny",
                "class": "bg-dlrtx-4",
                "text": "Todas las tardes "
            },
            {
                "id": 6,
                "icon": "ion-md-jet",
                "class": "bg-dlrtx-4",
                "text": "Navidades"
            },
            {
                "id": 7,
                "icon": "ion-md-subway",
                "class": "bg-dlrtx-4",
                "text": "Semana Santa"
            }
        ],
        "ludoteca2List": [
            {
                "id": 8,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Junio"
            },
            {
                "id": 9,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Julio"
            },
            {
                "id": 10,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Agosto"
            }
        ]
    },
    "en": {},
    "eus": {
        "pagetitle": "Jardunaldiak",
        "calendario_escolar": "Ikastaroaren egutegia",
        "jornadas_desc_1": "Ikasturtea irailetik uztailera doa, 11 hilabete izanik. Gabon eta Aste Santuaren lanegunetan irekita egongo gara eta gutxieneko ikasle talde bat badago baitaere abuztuaren lehen hamabostaldian irekita egongo gara.",
        "jornadas_desc_2": "Ordutegi ezberdinak ditugu ume eta gurasoen beharrizanei ahalik eta hoberen moldatzeko. Ez da inoiz ez gomendagarria izaten umeek eskolan barne zortzi ordu baino gehiago egotea egun bakoitzeko.",
        "jornadas_tipos_title": "Hiru jardunaldi mota",
        "jornadaList": [
            {
                "id": 0,
                "icon": "ion-md-briefcase",
                "class": "bg-dlrtx-1",
                "text": "Goizeko jardunaldia",
                "subtitle": "(9:00tik 13:30ak arte)"
            },
            {
                "id": 1,
                "icon": "ion-md-partly-sunny",
                "class": "bg-dlrtx-2",
                "text": "Lanaldi erdia",
                "subtitle": "(9:00tik 15:30ak arte)"
            },
            {
                "id": 2,
                "icon": "ion-md-cloudy-night",
                "class": "bg-dlrtx-3",
                "text": "Jardunaldi osoa",
                "subtitle": "(9:00tik 17:00ak arte)"
            }
        ],
        "horarios_title": "Gainera, ordutegi luzatu hauek ditugu:",
        "horarios_subtitle": "Dolaretxera etorri behar izanez gero, aukera izango duzu.",
        "horariosAmpliadosList": [
            {
                "id": 0,
                "icon": "ion-md-briefcase",
                "class": "bg-dlrtx-4",
                "text": "Goizekoa luzatua",
                "subtitle": "(7:30tik 9:00ak arte)"
            },
            {
                "id": 1,
                "icon": "ion-md-partly-sunny",
                "class": "bg-dlrtx-5",
                "text": "Arratsaldekoa luzatua",
                "subtitle": "(17:00tik 19:00ak arte)"
            }
        ],
        "salidas_title": "Sarrera eta irteera",
        "salidas_subtitle": "Egunean zehar badaude une ezberdinak eskolatik sartzeko eta irtetzeko malgutasun gehiago eskeintzen dituztenak.",
        "horariosList": [
            "Sarrera: De 7:30tik 9:45era",
            "Irteera: De 13:15etatik 13:30era",
            "Irteera: 15:15etatik 15:30era",
            "Irteera: 16:30etatik 17:00etara"
        ],
        "horarios_subtitle_2": "Umeen gurdiak egunean zehar gordetzeko aterpea badago.",
        "comida_title": "Janaria",
        "comida_subtitle": "Jantoki aukera ezberdinak: Gurasoek etxetik ekarritako janaria edota caterin jantoki zerbitzua.",
        "comidaList": [
            {
                "id": 3,
                "icon": "ion-md-cart",
                "class": "bg-dlrtx-1",
                "text": "Tuper/Termoa",
                "subtitle": "Gurasoek etxetik ekarritako"
            },
            {
                "id": 4,
                "icon": "ion-md-restaurant",
                "class": "bg-dlrtx-1",
                "text": "Jantoki zerbitzua",
                "subtitle": "Profesionala"
            }
        ],
        "ludoteca_title": "Ludoteka",
        "ludoteca_subtitle": "Eskola arratsaldero irekitzen dugu, baita aste santuan eta eguberrian ere.",
        "ludoteca_subtitle_2": "Gainera ekaina, uztaila eta abuztuaren artean, 0-6 urteko umeentzako irekia dago.",
        "ludotecaList": [
            {
                "id": 5,
                "icon": "ion-md-sunny",
                "class": "bg-dlrtx-4",
                "text": "Arratsalde guztiak"
            },
            {
                "id": 6,
                "icon": "ion-md-jet",
                "class": "bg-dlrtx-4",
                "text": "Gabonetan"
            },
            {
                "id": 7,
                "icon": "ion-md-subway",
                "class": "bg-dlrtx-4",
                "text": "Aste Santuan"
            }
        ],
        "ludoteca2List": [
            {
                "id": 8,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Ekaina"
            },
            {
                "id": 9,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Uztaila"
            },
            {
                "id": 10,
                "icon": "ion-md-calendar",
                "class": "bg-dlrtx-5",
                "text": "Abuztua"
            }
        ]
    }
}
</i18n>