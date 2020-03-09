<template>
  <div>
    <div class="hero-wrap hero-bg-color" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-lg-6 col-md-6 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Escuela Infantil.<br><span>Haur Eskola</span></h1>
            <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="icon-calendar mr-2"></span>{{location}}</p>
            <p>Centro Autorizado por el Departamento de Educación del Gobierno Vasco</p>
            <badge/>
          </div>
          <div class="col-lg-2 col"></div>
          <div class="col-lg-4 col-md-6 mt-0 mt-md-5">
            <form action="#" class="request-form ftco-animate" ref="formElement" @submit.prevent="onSubmitContact($event)">
              <h2>Matrícula abierta</h2>
              <p>Estas de enhorabuena!</p>
              <p class="justified">El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza</p>
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
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/about.jpg') + ')' }">
          </div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Visita nuestro centro!</h2>
              </div>
              <p class="justified">
                Somos un experimentado centro, con más de 10 años de experiencia en Educación Infantil de 0 a 3 años en la calle Prim, a dos minutos de la Plaza Unamuno del Casco Viejo, Bilbao.
              </p>
              <p>
                <a href="https://www.google.com/maps/place/Escuela+Infantil+%C2%B7+DOLARETXE+%C2%B7+Haur+Eskola/@43.258542,-2.9189082,3a,75y,104h,90t/data=!3m5!1e1!3m3!1sFwrqI5lDKqsAAAQYn8k3bQ!2e0!3e2!4m2!3m1!1s0x0:0xe6e2cf49d4cdbeba!6m1!1e1" target="blank" rel="noopener" class="btn btn-primary">Empezar visita virtual</a>
                <a href="mailto:info@dolaretxe.com?subject=Contacto Haur Eskola Dolaretxe&body=Hola, he visto la información de vuestra web y me gustaria contactar con vosotros para conoceros de primera mano." target="blank" rel="noopener" class="btn btn-primary mx-1">Contacta con nosotros</a>
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
              <p class="pr-md-5 mr-md-5 justified">
                Nuestro horario, de lunes a viernes de <strong>7:30</strong> a <strong>17:00</strong> con posibilidad de ampliaciones en funcion tus necesidades.
              </p>
              <p class="pr-md-5 mr-md-5 justified">
                Disponemos de diferentes jornadas escolares para adaptarse mejor a las necesidades de los padres y los niños. Consulta la disponibilidad de plazas para el curso actual y <strong>¡Echa un vistazo a las jornadas en detalle!</strong>
              </p>
              <p>
                <a href="#" class="btn btn-primary">Ver jornadas</a>
                <a href="#" class="btn btn-primary mx-1">Consultar servicios</a>
              </p>
            </div>
          </div>
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/about.jpg') + ')' }">
          </div>
        </div>
      </div>
    </section>

    <br>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/about.jpg') + ')' }">
          </div>
          <div class="col-md-7 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5">
              <div class="pr-md-5 mr-md-5">
                <h2 class="mb-4">Nuestra metodología</h2>
              </div>
              <p class="justified">
                A través del juego conseguimos un ambiente agradable, divertido e integrador lleno de momentos placenteros que favorecen el aprendizaje, haciendo que el niño o niña eleve su autoestima y se sienta querido y seguro.
              </p>
              <p><a href="#" class="btn btn-primary">Conoce nuestras actividades</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-counter img">
       <div class="container">
          <br></br>
          <div class="heading-section">
            <div class="text-center">
              <h2 class="mb-4">Descubre Dolaretxe Haur Eskola</h2>
              <p class="justified font-20">
                Te ofrecemos un <strong>servicio único</strong> y excepcional para ti y para los niños, gracias al <strong>equipazo de educadoras</strong> y un personal totalmente cualificado, con nuestra experiencia y profesionalidad como principales avales. Sin olvidar nuestras instalaciones, con aulas perfectamente equipadas y destacando como punto fundamental la <strong>perfecta localización</strong> del centro, situado en una <strong>zona abierta, totalmente peatonal y libre de tráfico</strong>.
            </p>
            </div>
          </div>
          <br></br>
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

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Nuestro día a día en Dolaretxe</h2>
          </div>
        </div>
        <div class="ftco-schedule">
          <div class="row">
            <div class="col-md-3 nav-link-wrap text-center text-md-right">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Por la mañana <span>8:00-9:00</span>
                </a>
                <a class="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">A la hora de comer <span>13:00-14:00</span>
                </a>
                <a class="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Despues de comer <span>14:00-17:00</span>
                </a>
              </div>
            </div>

            <div class="col-md-9 tab-wrap">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Acogida</a></h2>
                      <p>Es hora de dejar a tu peque en <strong>Dolaretxe</strong>. Te podrás tomar tu tiempo, aparcar la silla y despedirte tranquilamente antes de irte a trabajar.</p>
                      <span class="time">09:00 am - 9:30 am</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>Hall, Dolaretxe</p>
                    </div>
                  </div>
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-2.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Dinamica 1</a></h2>
                      <p>bla bla bla.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>Sala Rosa, Dolaretxe</p>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-4.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-2.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-3.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-4.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div class="speaker-wrap ftco-animate d-md-flex">
                    <div class="img speaker-img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"></div>
                    <div class="text">
                      <h2><a href="#">Introduction to Business Leaders</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <span class="time">09:00 am - 4:30 pm</span>
                      <p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-gallery ftco-no-pt">
      <div class="container-fluid px-4">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Algunos momentos memorables</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="img in memorableImageList" class="col-xs-12 col-sm-6 col-md-3 col-md-3 ftco-animate">
            <img class="image-popup img img-resposive img-example" :src="img" :href="img"/>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section  pb-5">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-1">Conoce al Equipo</h2>
            <h4 class="mb-1">que hace Dolaretxe posible</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="speaker ftco-animate d-flex align-items-stretch">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-3.jpg') + ')' }">
                <div class="text text-absolute">
                  <h3>Eder</h3>
                  <span class="position">Director</span>
                  <ul class="ftco-social mt-3">
                    <li><a href="#"><span class="icon-twitter"></span></a></li>
                    <li><a href="#"><span class="icon-facebook"></span></a></li>
                    <li><a href="#"><span class="icon-instagram"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"></div>
              <div class="text pl-4">
                <h3>Kyle Bochs</h3>
                <span class="position">Businessman</span>
                <p>A small river named Duden flows by their place and supplies</p>
                <ul class="ftco-social">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-2.jpg') + ')' }"></div>
              <div class="text pl-4">
                <h3>Arnold Thompson</h3>
                <span class="position">Businessman</span>
                <p>A small river named Duden flows by their place and supplies</p>
                <ul class="ftco-social">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-3.jpg') + ')' }"></div>
              <div class="text pl-4">
                <h3>Ryan Sy</h3>
                <span class="position">Businessman</span>
                <p>A small river named Duden flows by their place and supplies</p>
                <ul class="ftco-social">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
              <div class="img" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-4.jpg') + ')' }"></div>
              <div class="text pl-4">
                <h3>Alysa Derick</h3>
                <span class="position">Businesswoman</span>
                <p>A small river named Duden flows by their place and supplies</p>
                <ul class="ftco-social">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
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
      alert("sending form")
      e.preventDefault();
      var vm = this
      var formElement = vm.$refs.formElement
      var formData = new FormData(formElement);
      var url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeihRMLgHFVTFio8P62wQtiCf4TJQT9MgxRgGWABf_19XDG_g/formResponse'
      axios.post(url, formData).then(function(response){
        console.log(response)
      })
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
</style>

<style scoped lang="scss">
</style>