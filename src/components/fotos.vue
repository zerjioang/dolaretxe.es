<template>
  <div>
    <section class="hero-wrap hero-wrap-2 js-fullheight" :style="{'background-image': 'url(' + bgImage  + ')'}" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div class="col-md-9 ftco-animate pb-5">
            <h1 class="mb-3 bread">Dolaretxe Haur Eskola · Galería</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <router-link :to="{'name':'home'}">Inicio 
                  <i class="ion-ios-arrow-forward"></i>
                </router-link>
              </span>
              <span>Fotos
                <i class="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <br>
    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section ">
              <div class="pr-md-5 mr-md-5">
                <h2>Instalaciones y actividades</h2>
              </div>
              <p class="justified">
                  A continuación mostramos las imagenes del día a día en Dolaretxe donde se pueden contemplar las instalaciones y las distintas actividades y emociones vividas por los más pequeños en la escuela
              </p>
            </div>
            <!-- end: heading section -->
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-12 wrap-about py-md-5 ftco-animate text-center">
                    <div class="heading-section mb-5 pt-5 pl-md-5">
                        <div class="pr-md-5 mr-md-5">
                            <h2 class="mb-4">Nuestros heroes</h2>
                        </div>
                    </div>
                </div>
                <!--begin with static photo gallery -->
                <div class="col-md-12 wrap-about py-md-5 ftco-animate">
                  <h5>Hora del patio</h5>
                  <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
                      <div v-masonry-tile class="item" v-for="(item, index) in images">
                         <!-- block item markup -->
                         <img :src="item">
                      </div>
                  </div>
                </div>
                <!--end with static photo gallery -->
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import template from '@/mixins/template'

const bgImage = require('@/assets/images/bg_2.jpg');
const bgUnicefFooter = require('@/assets/images/unicef.png');
const bgStackO1 = require('@/assets/images/stack_01.png');
const bgStackO2 = require('@/assets/images/stack_02.png');
const bgUnicefEscuelaAmiga = require('@/assets/images/unicef-amiga.png');
const bgAbout = require('@/assets/images/about.jpg');

export default {
  name: 'fotos-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    	bgImage,
    	bgStackO1,
    	bgStackO2,
    	bgUnicefEscuelaAmiga,
    	bgUnicefFooter,
    	bgAbout,
      images: [
        'https://dummyimage.com/800/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff',
      ],
      index: null
    }
  },
  created(){
    console.log("fotos::created")
  },
  mounted(){
    console.log("fotos::mounted")
    this.jQueryInit();
  },
  components:{
  }
}
</script>

<style type="text/css" scoped="true">
	.amiga {
		width: -moz-available;
		width: -webkit-available;
		max-width: 600px;
	}
	.img-pad {
		padding-top: 10px;
		padding-bottom: 30px;
	}
</style>