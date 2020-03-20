<template>
  <div>
    <div class="hero-wrap hero-bg-color" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-start pt-5" data-scrollax-parent="true">
          <div class="col-lg-6 col-md-6 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Escuela Infantil.<br><span>Haur Eskola</span></h1>
            <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="icon-calendar mr-2"></span>{{location}}</p>
            <p>Centro Autorizado por el Departamento de Educación del Gobierno Vasco</p>
            <badge class="mb-3"/>
          </div>
          <div class="col-lg-2 col"></div>
          <div class="col-lg-4 col-md-6 mt-0 mt-md-5 mb-3">
            <form action="#" class="request-form ftco-animate" ref="formElement" @submit.prevent="onSubmitContact($event)">
              <h2>Matrícula abierta</h2>
              <p>Estas de enhorabuena!</p>
              <p class="justified">El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza.</p>
              <p class="justified">
                Finalización del plazo:
                <br>
                <strong>1 de abril del 2020</strong>
              </p>
              <div class="form-group">
                <input type="submit" value="Contactar" class="btn dolar-gradient-orangred py-3 px-4 btn-matricula">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section services-section dolar-gradient-2">
      <div class="container">
        <div class="row d-flex">

          <!-- start: quote -->
          <div class="col-md-12 align-self-stretch ftco-animate text-center">
            <div class="container col-md-12 text-center heading-section ftco-animate">
              <h2 class="mb-3" style="color:white;">Bienvenido a jugar</h2>

              <blockquote class="blockquote" style="color:white;">
                <p class="mb-0">"No puede existir trabajo eficaz ni satisfactorio sin juego; no puede existir pensamiento sólido ni saludable sin juego."</p>
                <footer class="blockquote-footer quote-author" style="color:white;">Charles Dickens, <cite title="Dolaretxe quote" class="quote-author">1854</cite></footer>
              </blockquote>

              </div>
          </div>
          <!-- end: quote -->

          <!-- start: actividades list -->
          <div v-for="actividad in actividades" :key="actividad.id" class="col-md-3 align-self-stretch ftco-animate text-center">
            <div class="media block-6 services d-block">
              <div class="icon"><span :class="actividad.icon"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">{{actividad.title}}</h3>
                <p>{{actividad.description}}</p>
              </div>
            </div>
          </div>
          <!-- end: actividades list -->

        </div>
      </div>
    </section>

    <section class="ftco-section testimony-section ftco-no-pt">
      <div>
        <div class="row justify-content-center mt-md-5 pt-5 mb-5">
          <div class="col-md-12 ftco-animate text-center justify-content-center align-items-center">
            <stars count="5" class="google-stars"/>
         </div>
          <div class="container col-md-12 text-center heading-section ftco-animate">
            <h2 class="mx-4">4.9/5 estrellas recibidas por nuestros usuarios nos avalan</h2>
            <h5 class="text-center mx-4">Y nos hacen ser mejores cada dia. Puedes ver todos los comentarios en Google pero aqui tienes una pequeña muestra!</h5>
          </div>
        </div>
        <div class="row ftco-animate">
         <!--start: carrousel -->
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <testimonial name="Carva Carvicie" review="Hemos estado encantados con el paso por Dolaretxe de nuestra hija June. Ha sido un año y medio muy bueno, se lo ha pasado genial y ha ido muy contenta, que es lo importante. El equipo de Dolaretxe un encanto y las instalaciones perfectas."/>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <testimonial name="Maria Villaverde Suanzes" review="Nuestro bebe empezó en Dolaretxe con 11 meses, en seguida se adaptó y va feliz. Se nota que les quieren mucho. Olaia y Maria, sus profesoras, son cariñosas y súper profesionales. Todos los días hacen nuevas actividades y no paran de jugar. Se agradece que hagan fácil algo tan dificil como es separarte de tu bebe. 100% recomendable."/>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <testimonial name="Ainhoa Olano Iriarte" review="Hemos estado encantados con Dolaretxe. El personal y las profesoras son unos grandes profesionales, y ello se refleja en lo contento que ha ido nuestro hijo este año."/>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <testimonial name="Celiña Ivañez" review="Hola, mi puntuación para Dolaretxe, son 5 estrellas, El equipo de esta escuela infantil son grandes profesionales, y un encanto como personas, Mi hijo ha estado allí Super feliz y muy bien atendido, eskerrik asko"/>
                </div>
              </div>
            </div>
          </div>
          <!-- end: carrousel -->
         <div class="col-md-12 ftco-animate pb-5">
            <div class="heading-section mt-md-5 text-center">
               <a class="btn btn-primary" href="https://goo.gl/maps/6qhGXF4kZ1yFzGpu5" rel="noopener" target="_blank">Ver todas las reseñas en Google</a>
            </div>
         </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/01.jpg') + ')' }">
          </div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Visita nuestro centro!</h2>
              </div>
              <p class="justified font-20">
                Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años en la calle Prim, a dos minutos de la Plaza Unamuno del Casco Viejo, Bilbao.
              </p>
              <p>
                <router-link :to="{name: 'visitavirtual'}" class="btn btn-primary mt-1 mr-1">Empezar visita virtual</router-link>
                <router-link :to="{name: 'contact'}" class="btn btn-primary mt-1">Contacta con nosotros</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Servicios</h2>
              </div>
              <p class="pr-md-5 mr-md-5 justified font-20">
                Nuestro horario, de lunes a viernes de <strong>7:30</strong> a <strong>17:00</strong> con posibilidad de ampliaciones en funcion tus necesidades.
              </p>
              <p class="pr-md-5 mr-md-5 justified font-20">
                Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. Consulta la disponibilidad de plazas para el curso actual y <strong>¡Echa un vistazo a las jornadas en detalle!</strong>
              </p>
              <p>
                <router-link :to="{name:'jornadas'}" class="btn btn-primary">Ver jornadas</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/02.jpg') + ')' }">
          </div>
        </div>
      </div>
    </section>

    <br>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/landing/03.jpg') + ')' }">
          </div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Nuestra metodología</h2>
              </div>
              <p class="justified font-20">
                A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje, haciendo que el niño o niña eleve su autoestima y se sienta querido y seguro.
              </p>
              <p>
                <router-link :to="{name: 'actividades'}" class="btn btn-primary">Conoce nuestras actividades</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-counter img">
       <div class="container">
          <br>
          <div class="heading-section">
            <div class="text-center">
              <h2 class="mb-4">Descubre Dolaretxe Haur Eskola</h2>
              <p class="justified font-20">
                Te ofrecemos un <strong>servicio único</strong> y excepcional para ti y para los niños, gracias al <strong>equipazo de educadoras</strong> y un personal totalmente cualificado, con nuestra experiencia y profesionalidad como principales avales. Sin olvidar nuestras instalaciones, con aulas perfectamente equipadas y destacando como punto fundamental la <strong>perfecta localización</strong> del centro, situado en una <strong>zona abierta, totalmente peatonal y libre de tráfico</strong>.
            </p>
            </div>
          </div>
          <br>
          <div class="row">
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 1" icon="flaticon-battery" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 2" icon="flaticon-battery" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 3" icon="flaticon-battery" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 4" icon="flaticon-battery" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 5" icon="flaticon-archive-1" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 6" icon="flaticon-archive-1" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 7" icon="flaticon-archive-1" colorClass="bg-primary"/>
             </div>
             <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
                <featureBox text="caracteristica 8" icon="flaticon-archive-1" colorClass="bg-primary"/>
             </div>
          </div>
       </div>
    </section>

    <section class="ftco-section ftco-gallery ftco-no-pt">
      <div class="container-fluid px-4">
        <div class="row justify-content-center mb-5 mt-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Algunos momentos memorables</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="img in memorableImageList" :key="img" class="col-xs-12 col-sm-6 col-md-3 col-md-3 ftco-animate">
            <img class="image-popup img img-resposive img-example" :src="img" :href="img"/>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-gallery ftco-no-pt">
      <div class="container-fluid px-4">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Acercate y conoce Dolaretxe</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <p class="contact-text font-20">Nos encantaría conocerte a ti y a tu/s peque/s. Ponte en contacto con nosotras para comprobar disponibilidad de plazas y concertar una cita para conocer nuestra guarde. Os invitamos a conocer la Escuela Infantil Dolaretxe Haur Eskola, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios y tarifas que mejor se adapten a vuestras necesidades.</p>
              <router-link
              class="btn dolar-gradient-orangred py-3 px-4 btn-matricula"
              :to="{name:'contact'}">Contacta con nosotros</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  </div>
</template>

<script>

import googlemap from '@/mixins/googlemap'
import template from '@/mixins/template'
import axios from 'axios'

export default {
  name: 'home-component',
  props: {
    msg: String
  },
  mixins: [
    //googlemap
    template
  ],
  methods: {
    onSubmitContact: function(e){
      if(e){
        e.preventDefault();
      }
      const sendForm = false;
      if(sendForm){
        var vm = this
      var formElement = vm.$refs.formElement
      var formData = new FormData(formElement);
      var url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeihRMLgHFVTFio8P62wQtiCf4TJQT9MgxRgGWABf_19XDG_g/formResponse'
      axios.post(url, formData).then(function(response){
        console.log(response)
      })
      } else {
        this.$router.push({name:'contact'})
      }
    }
  },
  data: () => {
    return {
      location: "Bilbao. Casco Viejo, Bizkaia",
      actividades: [
      {
        id: 0,
        icon: "flaticon-like",
        title: "Centro autorizado",
        description: "Autorizado por el Departamento de Educación del Gobierno Vasco"
      },
      {
        id: 1,
        icon: "flaticon-home",
        title: "Zona de juegos",
        description: "Con patio exterior vallado para jugar los dias de sol"
      },
      {
        id: 2,
        icon: "flaticon-calendar",
        title: "+10 años",
        description: "10 años de experiencia avalada por nuestros clientes."
      },
      {
        id: 3,
        icon: "flaticon-diploma",
        title: "Calidad",
        description: "Calidad en el servicio y colaboradores oficiales de UNICEF"
      }
      ],
      memorableImageList: [
        require('@/assets/images/insta/5620724262840602855.jpg'),
        require('@/assets/images/insta/6440705795977102007.jpg'),
        require('@/assets/images/insta/symNivopage14_31.jpg'),
        require('@/assets/images/insta/2785671161688835371.jpg'),
      ]
    }
  },
  created(){
    console.log("home::created")
  },
  mounted(){
    console.log("home::mounted")
    this.jQueryInit();
  },
  components:{
    stars: () => import('@/components/stars'),
    testimonial: () => import('@/components/testimonial'),
    featureBox: () => import('@/components/featureBox'),
    badge: ()=> import('@/components/badge'),
  }
}
</script>

<style lang="css" scoped="true">
.google-stars {
  margin-bottom: 60px;
}

.font-20 {
  font-size: 20px;
}
.quote-author {
  font-size: 14pt;
  font-weight: lighter;
}
.btn-matricula {
  color:white;
  font-weight: bold;
  font-size: 17pt;
}
.img-example {
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  outline: none;
}
.contact-text {
  width: 100%;
  max-width: 800px;
  text-align: justify;
}
</style>

<style scoped lang="scss">
</style>