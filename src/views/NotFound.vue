<template>
  <div>
    <section class="hero-wrap hero-wrap-2 js-fullheight" :style="{'background-image': 'url(' + bgNotfound  + ')'}" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div class="col-md-9 ftco-animate pb-5">
            <h1 class="mb-3 bread">Dolaretxe Haur Eskola</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <router-link :to="{'name':'home'}">Inicio 
                  <i class="ion-ios-arrow-forward"></i>
                </router-link>
              </span>
              <span>Página no encontrada 
                <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 p-md-5 d-flex justify-content-center align-items-center" :style="{'background-image': 'url(' + bgAbout  + ')'}"></div>
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5 text-center">
              <h2 class="mb-4">Página no encontrada</h2>
              <p>Lo sentimos pero la página solicitada no se encuentra disponible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import template from '@/mixins/template'
const bgNotfound = require('@/assets/images/bg_2.jpg');

export default {
  name: 'view-not-found',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    	bgNotfound,
    }
  },
  created(){
    console.log("view-not-found::created")
  },
  mounted(){
    console.log("view-not-found::mounted")
    this.jQueryInit();
  },
  components:{
  }
}
</script>