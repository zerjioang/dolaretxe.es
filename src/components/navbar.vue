<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <router-link class="navbar-brand" :to="{'name':'home'}">
        <img :src="require('@/assets/images/dolaretxe.png')" class="navbar-img">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{'name':'home'}">Inicio</router-link>
          </li>

          <li class="nav-item" v-for="m in menuitems" :key="m.text">
            <router-link :to="{'name': m.to}" class="nav-link">{{m.text}}</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownInfo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Información</a>
            <div class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdownInfo">
              <a v-for="s in serviceItems" :key="s.text" class="dropdown-item" href="#" v-on:click="goto($event, s.to)">{{s.text}}</a>
            </div>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sobre Nosotros
            </a>
            <div class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdownAbout">
              <a class="dropdown-item" href="#" v-on:click="goto($event, 'contact')">Contacto</a>
              <a v-show="false" class="dropdown-item" href="#" v-on:click="goto($event, 'citaprevia')">Cita Previa</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" v-on:click="goto($event, 'trabajo')">Trabaja con nosotros
              </a>
            </div>
          </li>
          <li class="nav-item cta mr-md-2" v-show="false">
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
  name: 'component-navbar',
  data: () => {
  	return {
  		name: "dolaretxe",
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
        }
  		],
      serviceItems: [
        {
          to: "galeria",
          text: "Fotos"
        },
        {
          to: "escuela",
          text: "Escuela"
        },
        {
          to: "jornadas",
          text: "Jornadas"
        },
        {
          to: "actividades",
          text: "Actividades"
        },
        {
          to: "unicef",
          text: "Compromiso UNICEF"
        },
      ]
  	}
  },
  methods:{
    goto: function(e, name){
      e.preventDefault();
      this.$router.push({name: name});
    }
  },
  components: {
  }
}
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
      transform:translateY(0rem);
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
</style>