<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container nav-container">
      <router-link class="navbar-brand" :to="{'name':'home'}">
        <img
          :src="require('@/assets/images/dolaretxe.png')"
          class="navbar-img"
          alt="dolaretxe escuela Infantil, Haurreskola y guarderia en bilbao"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{'name':'home'}">{{$t('inicio')}}</router-link>
          </li>

          <li class="nav-item" v-for="m in menuitems" :key="m.text">
            <router-link :to="{'name': m.to}" class="nav-link">{{m.text}}</router-link>
          </li>

          <li v-if="serviceItems!=undefined && serviceItems.length > 0" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownInfo"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{$t('informacion')}}</a>
            <div class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdownInfo">
              <a
                v-for="s in serviceItems"
                :key="s.text"
                class="dropdown-item"
                href="#"
                v-on:click="goto($event, s.to)"
              >{{s.text}}</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownAbout"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{$t('sobre_nosotros')}}</a>
            <div class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdownAbout">
              <a class="dropdown-item" href="#" v-on:click="goto($event, 'contact')">Contacto</a>
              <a
                v-show="false"
                class="dropdown-item"
                href="#"
                v-on:click="goto($event, 'citaprevia')"
              >Cita Previa</a>
              <div v-if="layout.showWorkWithUs" class="dropdown-divider"></div>
              <a
                v-if="layout.showWorkWithUs"
                class="dropdown-item"
                href="#"
                v-on:click="goto($event, 'trabajo')"
              >Trabaja con nosotros</a>
            </div>
          </li>

          <!-- start language selector -->
          <li class="nav-item dropdown btn-lang">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownAbout"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{$t('idioma')}}</a>
            <div
              class="dropdown-menu animate slideIn btn-lang"
              aria-labelledby="navbarDropdownLang"
            >
              <a class="dropdown-item" href="#" v-on:click="changeLanguage('es')">Español</a>
              <a class="dropdown-item" href="#" v-on:click="changeLanguage('eus')">Euskera</a>
            </div>
          </li>
          <!-- end language selector -->
          <li class="nav-item cta mr-md-2" v-show="showLogin">
            <router-link :to="{'name': 'login'}" class="nav-link">Acceder</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->
</template>

<script>
export default {
  name: "component-navbar",
  data: () => {
    return {
      name: "dolaretxe",
      layout: {
        showWorkWithUs: process.env.VUE_APP_SHOW_WORK_WITH_US == "true"
      },
      menuitems: [
        {
          to: "escuela",
          text: "Escuela"
        },
        {
          to: "jornadas",
          text: "Jornadas"
        },
        {
          to: "visitavirtual",
          text: "Visita Virtual"
        },
        {
          to: "galeria",
          text: "Fotos"
        }
      ],
      serviceItems: [],
      showLogin: process.env.VUE_APP_SHOW_LOGIN_BUTTON == "true"
    };
  },
  methods: {
    goto: function(e, name) {
      e.preventDefault();
      this.$router.push({ name: name });
    },
    changeLanguage(lang) {
      // change other locale
      if (lang) {
        console.log("changing current locale to", lang);
        this.$i18n.locale = lang;
        localStorage.setItem("lang", lang);
      }
    }
  },
  components: {}
};
</script>

<style type="text/css" scoped="true">
/*make dropdowns appear on hover with following style*/
@media (min-width: 979px) {
  ul.nav li.dropdown:hover > ul.dropdown-menu {
    display: block;
  }
}
/*make dropdown animated*/
@media (min-width: 992px) {
  .animate {
    animation-duration: 0.3s;
    -webkit-animation-duration: 0.3s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }
  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}

.navbar-img {
  max-height: 60px;
}
.btn-lang {
  background: #d2e0e5 !important;
  color: white;
  border: 5px;
  border-radius: 7px;
}
.btn-lang a {
  color: black;
}
.btn-lang a:hover {
  color: #ef5735;
}

@media (min-width: 0px) {
  .nav-container {
    padding: 0px;
    max-width: 1140px;
  }
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
  .nav-container {
    padding: 0px;
  }
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .nav-container {
    padding: 0px;
  }
}

/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  .nav-container {
    padding: 0px;
  }
}

/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
  .nav-container {
    padding: 0px;
    max-width: 1140px;
  }
}
@media (min-width: 1600px) {
  .nav-container {
    padding: 0px;
    max-width: 1140px;
  }
}
</style>

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