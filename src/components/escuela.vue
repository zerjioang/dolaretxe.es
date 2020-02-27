<template>
   <div>
      <pagetitle page="Escuela"/>
      <section class="ftco-section ftco-no-pt ftco-no-pb">
         <div class="container">
            <div class="row no-gutters">
               <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" :style="{'background-image': 'url(' + bgAbout  + ')'}">
               </div>
               <div class="col-md-7 wrap-about py-md-5 ftco-animate">
                  <div class="heading-section mb-5 pt-5 pl-md-5">
                     <div class="pr-md-5 mr-md-5">
                        <h2 class="mb-4">Centro de Educación Infantil</h2>
                     </div>
                     <p class="justified">
                        Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años ubicado en la calle Prim, a tan solo dos minutos de la Plaza Unamuno del Casco Viejo de Bilbao.
                     </p>
                     <p class="justified">
                        El proyecto responde a la necesidad actual de facilitar la conciliación de la vida familiar y la vida laboral de los residentes, comerciantes y trabajadores de la zona.
                     </p>
                     <p class="justified">
                        Ofrecemos el modelo lingüístico bilingüe (euskera-castellano) con introducción al inglés.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <br></br>
      <section class="ftco-section ftco-no-pt ftco-no-pb">
         <div class="container">
            <div class="row no-gutters">
               <div class="col-md-7 wrap-about py-md-5 ftco-animate">
                  <div class="heading-section mb-5 pt-5 pl-md-5">
                     <div class="pr-md-5 mr-md-5">
                        <h2 class="mb-4">El equipo</h2>
                     </div>
                     <h5>Aprendizaje y desarrollo</h5>
                     <p class="pr-md-5 mr-md-5 justified">
                        <strong>Dolaretxe</strong> nace con el propósito de que los niños aprendan y se desarrollen de forma integral en un entorno familiar y estimulante.
                        <br></br> Nuestro equipo docente se concentra en la motivación de los pequeños usando el juego como medio para favorecer el aprendizaje, la creatividad y el desarrollo individual de cada uno de los niños a través de sus propios estímulos e intereses.
                     </p>
                     <h5>Niños por aula</h5>
                     <p class="pr-md-5 mr-md-5 justified">
                        El número de niños por aula cumple con los ratios establecidos por el Departamento de Educación del Gobierno Vasco:
                        <br></br>
                     <ul>
                        <li>
                           8 niños en el aula de 0-1 años.
                        </li>
                        <li>
                           13 niños en el aula de 1-2 años.
                        </li>
                        <li>
                           18 niños en el aula de 2 a 3 años.
                        </li>
                     </ul>
                     </p>
                     <h5>El equipo docente</h5>
                     <p class="pr-md-5 mr-md-5 justified">
                        El equipo de Dolaretxe está formado por 8 personas, 2 educadoras por aula. El equipo lleva trabajando de forma conjunta desde la inauguración del centro en el año 2010.
                     </p>
                  </div>
               </div>
               <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/about.jpg') + ')' }">
               </div>
            </div>
         </div>
      </section>
      
      <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad">
        <div class="img-full" v-bind:style="{ backgroundImage: 'url(' + bgStackO2 + ')' }" style="min-height: 500px;">
        </div>
      </div>
      

      <section class="ftco-section ftco-no-pt ftco-no-pb">
         <div class="container">
            <div class="row no-gutters">
               <div class="col-md-12 wrap-about ftco-animate">
                  <div class="heading-section pl-md-5">

                     <div class="pr-md-5 mr-md-5">
                        <h2 class="mb-4">Instalaciones</h2>
                     </div>
                     <h5>Instalaciones de alta calidad</h5>
                     <p class="justified">
                        Hemos diseñado un centro educativo amplio, luminoso y seguro para que los niños crezcan en un entorno de alta calidad. En la Escuela Infantil Dolaretxe contamos con <strong>220m2</strong> de instalaciones y un patio de juegos de <strong>300m2</strong> de uso exclusivo. Disponemos de 4 aulas diferencias por edades. La distribución del espacio es el siguiente:                        
                     </p>
                     <div class="row">
                       <div class="col-xs-6 col-md-4 col-lg-4">
                        <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox text="1 aula de 0-1 años" icon="flaticon-user-2" colorClass="bg-dlrtx-1"/>
                        </div>
                        <p>El aula cuenta con un área específica para el descanso de los menores y otra para la higiene.</p>
                       </div>
                       <div class="col-xs-6 col-md-4 col-lg-4">
                        <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox text="2 aulas de 1-2 años" icon="flaticon-user-4" colorClass="bg-dlrtx-2"/>
                        </div>
                        <p>El aula cuenta con un área específica para el descanso y un baño dentro de la propia clase.</p>
                       </div>
                       <div class="col-xs-6 col-md-4 col-lg-4">
                        <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox text="1 aula de 2-3 años" icon="flaticon-user-6" colorClass="bg-dlrtx-3"/>
                        </div>
                        <p>El aula cuenta con un área específica para el descanso y un baño dentro de la propia clase.</p>
                       </div>
                     </div>
                     <h5>Espacios especiales</h5>
                     <div class="row">
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="una sala de usos múltiples" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="espacio de preparacion alimentos" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="patio exterior privado y vallado" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="300m2 de zona de juego" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="espacio cubierto para carritos" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="diferenciación de espacios" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="entrada y salida sólo peatonal" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="localización lejos de carreteras" icon="flaticon-television" colorClass="bg-dlrtx-3"/>
                         </div>
                       </div>
                     </div>
                     <p class="justified">
                        Ademas, contamos con:
                     <ul>
                        <li>La escuela infantil contamos con un espacio diferenciado para las labores de gestión y administración y de uso para el personal: recepción, despacho, sala de reuniones, vestuario, almacén y cuarto baño.</li>
                        <li>En Dolaretxe disponemos de un acceso independiente desde el exterior que se realiza a través de una plaza pública garantizando la seguridad de los niños en la salida del centro.</li>
                     </ul>
                     </p>
                     <h5>¡Visita Virtual!</h5>
                     <p class="justified">
                        En Dolaretxe ofrecemos unas instalaciones modernas dotadas de un amplio patio exterior donde los niños podrán disfrutar y aprender jugando tutelados por educadores afectuosos y pacientes.
                     </p>
                     <div style="padding: 5px;">
                       <router-link class="btn btn-primary" to="visitavirtual">Empezar visita virtual</router-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div class="img-full" v-bind:style="{ backgroundImage: 'url(' + bgStackO1 + ')' }" style="min-height: 500px;">
      </div>

      <section class="ftco-section ftco-no-pt ftco-no-pb">
         <div class="container">
            <div class="row no-gutters">
               <div class="col-md-12 wrap-about ftco-animate">
                  <div class="heading-section">
                     <div>
                        <h2>Objetivos</h2>
                     </div>
                     <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad">
                        
                     </div>
                     <p class="justified">
                        En <strong>Dolaretxe</strong> contribuimos a generar un entorno familiar y seguro que favorezca la adquisición de las distintas competencias en cada una de las etapas evolutivas del niño.
                     </p>

                     <div class="row">
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="habilidades comunicativas" icon="flaticon-star" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="seguridad emocional" icon="flaticon-sign" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="convivencia y relaciones sociales" icon="flaticon-speaker-4" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="autonomía" icon="flaticon-zoom-in" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="respeto y curiosidad" icon="flaticon-zoom-in" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                       <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                         <div class="justify-content-center counter-wrap ftco-animate">
                          <featureBox class="box-especial" text="diversidad" icon="flaticon-share-2" colorClass="bg-dlrtx-4"/>
                         </div>
                       </div>
                     </div>

                     <div class="row">
                       <div class="col-md-6">
                            <p class="justified">
                               Desarrollar habilidades comunicativas en diferentes lenguajes y formas de expresión para comprender y ser comprendido por los otros, expresar sus ideas, sentimientos, experiencias y deseos.
                            </p>
                            <p class="justified">
                               Adquirir progresivamente una seguridad afectiva y emocional favorecido por este entorno familiar que les permita desarrollar sus capacidades de iniciativa y confianza en sí mismos.
                            </p>
                            <p class="justified">
                               Establecer relaciones sociales en un ámbito cada vez más amplio y adquirir pautas elementales de convivencia y relación social, aprendiendo a articular progresivamente sus intereses y puntos de vista con los demás, respetando la diversidad y desarrollando actitudes de ayuda y cooperación.
                            </p>
                       </div>

                       <div class="col-md-6">
                         <p class="justified">
                             Descubrir, conocer y controlar progresivamente el propio cuerpo para tomar conciencia de sus posibilidades de acción y expresión formándose una imagen positiva de sí mismos. De este modo lograrán cada vez mayor autonomía en sus actividades cotidianas adquiriendo hábitos básicos de salud y bienestar.
                          </p>
                          <p class="justified">
                             Observar y explorar el entorno inmediato (familiar, natural y social) con una actitud de curiosidad, cuidado y respeto.
                          </p>
                          <p class="justified">
                             Representar y recordar aspectos diversos de la realidad, vividos, conocidos o imaginados, y expresarlos mediante las posibilidades simbólicas que ofrecen el juego y otras formas de representación y expresión como el arte para comprender e interpretar el mundo que les rodea.
                          </p>
                       </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>

      <sectionUnicef/>
   </div>
</template>

<script>

import template from '@/mixins/template'

const bgImage = require('@/assets/images/bg_2.jpg');
const bgStackO1 = require('@/assets/images/stack_01.png');
const bgStackO2 = require('@/assets/images/stack_02.png');
const bgAbout = require('@/assets/images/about.jpg');

export default {
  name: 'escuela-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    	bgImage,
    	bgStackO1,
    	bgStackO2,
    	bgAbout
    }
  },
  created(){
    console.log("escuela::created")
  },
  mounted(){
    console.log("escuela::mounted")
    this.jQueryInit();
  },
  components:{
    featureBox: () => import('@/components/featureBox'),
    sectionUnicef: () => import('@/components/sections/section-unicef'),
    pagetitle: ()=> import('@/components/pagetitle'),
  }
}
</script>

<style type="text/css" scoped="true">
	.img-pad {
		padding-top: 10px;
		padding-bottom: 30px;
	}
  .box-especial {
    min-height: 210px;
  }
  .img-full {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>