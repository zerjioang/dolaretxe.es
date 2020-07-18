<template>
  <footer class="ftco-footer ftco-bg-dark ftco-section black-gradient">
    <cookie-law theme="dark-lime" :buttonText="$t('aceptar')">
      <div slot="message">
        <p class="justified cookie white">
          {{$t('cookie_text')}}
          <router-link :to="{ name: 'cookies' }" alt="mas información sobre cookies">
            <span style="color: white;">{{$t('cookie_more_info')}}</span>
          </router-link>.
        </p>
      </div>
    </cookie-law>

    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="mb-4 text-center">
            <img
              :src="require('@/assets/images/dolaretxe.png')"
              class="footer-img"
              alt="dolaretxe escuela Infantil, Haur Eskola y guarderia en bilbao"
            />
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">{{$t('title')}}</h2>
            <p align="justify">{{$t('description')}}</p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li v-show="false" class="ftco-animate">
                <a href="#" rel="noopener" target="_blank">
                  <span class="icon-twitter"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a
                  href="https://www.facebook.com/dolaretxehaurreskola/"
                  rel="noopener"
                  target="_blank"
                >
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.instagram.com/dolaretxe" rel="noopener" target="_blank">
                  <span class="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-5">
            <h2 class="ftco-heading-2">{{$t('info_title')}}</h2>
            <ul class="list-unstyled">
              <li>
                <router-link
                  :to="{name:'jornadas'}"
                  class="py-2 d-block"
                >{{$t('menuitem_jornadas')}}</router-link>
              </li>
              <li>
                <router-link :to="{name:'escuela'}" class="py-2 d-block">{{$t('menuitem_escuela')}}</router-link>
              </li>
              <li>
                <router-link :to="{name:'unicef'}" class="py-2 d-block">{{$t('menuitem_uNICEF')}}</router-link>
              </li>
              <li>
                <router-link :to="{name:'galeria'}" class="py-2 d-block">{{$t('menuitem_fotos')}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">{{$t('legal_title')}}</h2>
            <ul class="list-unstyled">
              <li>
                <router-link :to="{'name':'legal'}" class="py-2 d-block">{{$t('menuitem_aviso')}}</router-link>
              </li>
              <li>
                <router-link
                  :to="{'name':'privacy'}"
                  class="py-2 d-block"
                >{{$t('menuitem_privacidad')}}</router-link>
              </li>
              <li>
                <router-link
                  :to="{'name':'cookies'}"
                  class="py-2 d-block"
                >{{$t('menuitem_cookies')}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">{{$t('contact_title')}}</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <a
                    class="link"
                    href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA"
                    target="_blank"
                    rel="noopener"
                  >
                    <span class="icon icon-map-marker"></span>
                    <span class="text">
                      <a
                        class="link"
                        href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA"
                        target="_blank"
                        rel="noopener"
                      >{{$t('direccion')}}</a>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="link" href="tel:+34946004558" target="_blank" rel="noopener">
                    <span class="icon icon-phone"></span>
                    <span class="text">
                      <a
                        class="link"
                        href="tel:+34946004558"
                        target="_blank"
                        rel="noopener"
                      >94 600 45 58</a>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dolaretxe.es" target="_blank" rel="noopener">
                    <span class="icon icon-envelope"></span>
                    <span class="text">
                      <a
                        class="link"
                        href="mailto:info@dolaretxe.es"
                        target="_blank"
                        rel="noopener"
                      >info@dolaretxe.es</a>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-centered text-center">
        <div class="col-xs-12 col-md-5 text-center">
          <badge />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center copyright">
          <p class="bold">Copyright &copy; {{currentYear}}. {{$t('copyright_text')}}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  props: {},
  mixins: [],
  methods: {},
  data: () => {
    return {
      currentYear: new Date().getFullYear(),
      location: "Bilbao. Casco Viejo, Bizkaia",
      ejgvImage: require("@/assets/images/ejgv.png")
    };
  },
  created() {
    console.log("footer::created");
  },
  mounted() {
    console.log("footer::mounted");
  },
  components: {
    badge: () => import("@/components/badge"),
    CookieLaw: () => import("vue-cookie-law")
  }
};
</script>

<style scoped lang="css">
.bold {
  font-weight: bold;
  color: white;
}
.footer-img {
  max-height: 120px;
  margin: 5px;
}
.link {
  cursor: pointer;
}
/*hover color for all links */
.link:hover,
.link:active,
.link:focus,
a:hover,
a:active {
  color: grey !important;
  cursor: pointer !important;
}
.copyright {
  margin-top: 20px;
}
footer {
  padding-bottom: 20px;
}

/* change footer widget colors */
.ftco-footer .ftco-footer-widget ul li a span {
  color: #7f7e7d;
}

/* change footer text color */
.ftco-footer .ftco-footer-widget h2,
.ftco-footer p,
.ftco-footer .ftco-footer-widget ul li a {
  color: black;
}
.ftco-footer-social li a {
  background: rgba(191, 191, 191, 0.4);
}
.white {
  color: rgb(221, 221, 221) !important;
}
</style>

<style scoped lang="scss">
</style>

<i18n>
{
	"es": {
		"cookie_text": "Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continua navegando, consideramos que acepta su uso. Puede cambiar la configuración mediante los ajustes de su navegador u obtener",
		"cookie_more_info": "más información",
		"aceptar": "Aceptar",
		"title": "Escuela Infantil Dolaretxe",
		"description": "Os invitamos a conocer la Escuela Infantil Dolaretxe, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios.",
		"info_title": "Información",
		"legal_title": "Información Legal",
		"contact_title": "Contáctanos!",
		"menuitem_jornadas": "Jornadas",
		"menuitem_escuela": "Escuela",
		"menuitem_uNICEF": "UNICEF",
		"menuitem_fotos": "Fotos",
		"menuitem_aviso": "Aviso Legal",
		"menuitem_privacidad": "Pólitica de privacidad",
		"menuitem_cookies": "Información sobre Cookies",
		"direccion": "Escuela Infantil. Calle Prim, 11. Bajo. 48006 Bilbao. Bizkaia",
		"copyright_rext": "Todos los derechos reservados."
	},
	"en": {
		"cookie_text": "",
		"cookie_more_info": "",
		"aceptar": "",
		"title": "",
		"description": "",
		"info_title": "",
		"legal_title": "",
		"contact_title": "",
		"menuitem_jornadas": "",
		"menuitem_escuela": "",
		"menuitem_uNICEF": "",
		"menuitem_fotos": "",
		"menuitem_aviso": "",
		"menuitem_privacidad": "",
		"menuitem_cookies": "",
		"direccion": "",
		"copyright_rext": ""
	},
	"eus": {
		"cookie_text": "Norberaren eta hirugarrenen cookie-ak erabiltzen ditugu gure zerbitzuak hobetzeko. Nabigatzen jarraitzen baduzu, zure erabilera onartzen duzula uste dugu. Konfigurazioa alda dezakezu zure nabigatzailearen konfigurazioaren bidez",
		"cookie_more_info": "informazio gehiago",
		"aceptar": "Onartu",
		"title": "Dolaretxe Haur Eskola",
		"description": "Dolaretxe Haur Eskola ezagutzera gonbidatzen zaituztegu. Bertan, laguntza pertsonalizatuagoa emango dizuegu eta zerbitzu guztien berri emango dizuegu.",
		"info_title": "Informazioa",
		"legal_title": "Lehe Oharrak",
		"contact_title": "Kontaktatu gaitzazu!",
		"menuitem_jornadas": "Jardunaldiak",
		"menuitem_escuela": "Eskola",
		"menuitem_uNICEF": "UNICEF",
		"menuitem_fotos": "Argazkiak",
		"menuitem_aviso": "Lege Oharra",
		"menuitem_privacidad": "Pribatutasun Politika",
		"menuitem_cookies": "Cookie-ei buruzko informazioa",
		"direccion": "Escuela Infantil Haur Eskola. Prim Kalea, 11. Bajo. 48006 Bilbao. Bizkaia",
		"copyright_rext": "Eskubide guztiak erreserbatuta."
	}
}
</i18n>