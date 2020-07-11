<!--

NOTA:
este componente (fichero) no esta siendo utilizado actualmente en la web

-->
<template>
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
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link ftco-animate active"
                id="v-pills-1-tab"
                data-toggle="pill"
                href="#v-pills-1"
                role="tab"
                aria-controls="v-pills-1"
                aria-selected="true"
              >
                Por la mañana
                <span>8:00-9:00</span>
              </a>
              <a
                class="nav-link ftco-animate"
                id="v-pills-2-tab"
                data-toggle="pill"
                href="#v-pills-2"
                role="tab"
                aria-controls="v-pills-2"
                aria-selected="false"
              >
                A la hora de comer
                <span>13:00-14:00</span>
              </a>
              <a
                class="nav-link ftco-animate"
                id="v-pills-3-tab"
                data-toggle="pill"
                href="#v-pills-3"
                role="tab"
                aria-controls="v-pills-3"
                aria-selected="false"
              >
                Despues de comer
                <span>14:00-17:00</span>
              </a>
            </div>
          </div>

          <div class="col-md-9 tab-wrap">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-1"
                role="tabpanel"
                aria-labelledby="day-1-tab"
              >
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/agenda/01.png') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Acogida</a>
                    </h2>
                    <p>
                      Es hora de dejar a tu peque en
                      <strong>Dolaretxe</strong>. Te podrás tomar tu tiempo, aparcar la silla y despedirte tranquilamente antes de irte a trabajar.
                    </p>
                    <span class="time">09:00 am - 9:30 am</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>Hall, Dolaretxe
                    </p>
                  </div>
                </div>
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/agenda/02.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Dinamica 1</a>
                    </h2>
                    <p>bla bla bla.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>Sala Rosa, Dolaretxe
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-2"
                role="tabpanel"
                aria-labelledby="v-pills-day-2-tab"
              >
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-4.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-2.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-3"
                role="tabpanel"
                aria-labelledby="v-pills-day-3-tab"
              >
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-3.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-4.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
                <div class="speaker-wrap ftco-animate d-md-flex">
                  <div
                    class="img speaker-img"
                    v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/staff-1.jpg') + ')' }"
                  ></div>
                  <div class="text">
                    <h2>
                      <a href="#">Introduction to Business Leaders</a>
                    </h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <span class="time">09:00 am - 4:30 pm</span>
                    <p class="location">
                      <span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA
                    </p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <h3 class="speaker-name">
                      &mdash;
                      <a href="#">Ryan Thompson</a>
                      <span class="position">Founder of Wordpress</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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