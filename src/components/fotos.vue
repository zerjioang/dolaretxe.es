<template>
  <div>
    <pagetitle page="Galería"/>
    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 ftco-animate mt-5 mb-5">
            <div class="heading-section ">
              <div>
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

    <!--begin with static photo gallery -->
    <div class="ftco-animate mb-5" v-for="block in galeria" :key="block.id">
      <section class="ftco-section ftco-no-pt ftco-no-pb">
          <div class="container">
              <div class="row no-gutters">
                  <h3>{{block.location}}</h3>
              </div>
          </div>
      </section>
      <div class="col-md-12 wrap-about ftco-animate">
        <div v-masonry="containerId" origin-left="false" transition-duration="1s" fit-width="true" horizontal-order="true" item-selector=".item">
          <div v-masonry-tile class="item" v-for="item in block.images">
            <img class="image-popup img img-resposive
             masonry-img" v-lazy="item" :href="item"/>
          </div>
        </div> 
      </div>
    </div>
    <!--end with static photo gallery -->

  </div>
</template>

<script>

// import ES6 style
import Vue from 'vue';
import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)

const noImage = require('@/assets/images/noimage.png')

// import lazy loader for images
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: noImage,
  loading: noImage,
  attempt: 3  
})

import template from '@/mixins/template';
const protasList = [
  require('@/assets/images/gallery/protagonistas/profile1.jpg'),
  require('@/assets/images/gallery/protagonistas/profile2.jpg'),
  require('@/assets/images/gallery/protagonistas/profile3.jpg'),
  require('@/assets/images/gallery/protagonistas/profile4.jpg'),
  require('@/assets/images/gallery/protagonistas/profile5.jpg'),
  require('@/assets/images/gallery/protagonistas/profile6.jpg'),
  require('@/assets/images/gallery/protagonistas/profile7.jpg'),
  require('@/assets/images/gallery/protagonistas/profile8.jpg'),
  require('@/assets/images/gallery/protagonistas/profile9.jpg'),
  require('@/assets/images/gallery/protagonistas/profile10.jpg'),
  require('@/assets/images/gallery/protagonistas/profile11.jpg'),
  require('@/assets/images/gallery/protagonistas/profile12.jpg'),
  require('@/assets/images/gallery/protagonistas/profile13.jpg'),
  require('@/assets/images/gallery/protagonistas/profile14.jpg'),
  require('@/assets/images/gallery/protagonistas/profile15.jpg'),
  require('@/assets/images/gallery/protagonistas/profile16.jpg'),
  require('@/assets/images/gallery/protagonistas/profile17.jpg'),
  require('@/assets/images/gallery/protagonistas/profile18.jpg'),
  require('@/assets/images/gallery/protagonistas/profile19.jpg'),
  require('@/assets/images/gallery/protagonistas/profile20.jpg'),
  require('@/assets/images/gallery/protagonistas/profile21.jpg'),
  require('@/assets/images/gallery/protagonistas/profile22.jpg'),
  require('@/assets/images/gallery/protagonistas/profile23.jpg'),
  require('@/assets/images/gallery/protagonistas/profile24.jpg'),
  require('@/assets/images/gallery/protagonistas/profile25.jpg'),
  require('@/assets/images/gallery/protagonistas/profile26.jpg'),
  require('@/assets/images/gallery/protagonistas/profile27.jpg'),
  require('@/assets/images/gallery/protagonistas/profile28.jpg'),
  require('@/assets/images/gallery/protagonistas/profile29.jpg'),
  require('@/assets/images/gallery/protagonistas/profile30.jpg'),
  require('@/assets/images/gallery/protagonistas/profile31.jpg'),
  require('@/assets/images/gallery/protagonistas/profile32.jpg'),
  require('@/assets/images/gallery/protagonistas/profile33.jpg'),
  require('@/assets/images/gallery/protagonistas/profile34.jpg'),
]

const rosaList = [
  require('@/assets/images/gallery/rosa/rosa1.jpg'),
  require('@/assets/images/gallery/rosa/rosa2.jpg'),
  require('@/assets/images/gallery/rosa/rosa3.jpg'),
  require('@/assets/images/gallery/rosa/rosa4.jpg'),
  require('@/assets/images/gallery/rosa/rosa5.jpg'),
  require('@/assets/images/gallery/rosa/rosa6.jpg'),
  require('@/assets/images/gallery/rosa/rosa7.jpg'),
  require('@/assets/images/gallery/rosa/rosa8.jpg'),
  require('@/assets/images/gallery/rosa/rosa9.jpg'),
  require('@/assets/images/gallery/rosa/rosa10.jpg'),
  require('@/assets/images/gallery/rosa/rosa11.jpg'),
  require('@/assets/images/gallery/rosa/rosa12.jpg'),
  require('@/assets/images/gallery/rosa/rosa13.jpg'),
  require('@/assets/images/gallery/rosa/rosa14.jpg'),
  require('@/assets/images/gallery/rosa/rosa15.jpg'),
  require('@/assets/images/gallery/rosa/rosa16.jpg'),
  require('@/assets/images/gallery/rosa/rosa17.jpg'),
  require('@/assets/images/gallery/rosa/rosa18.jpg'),
  require('@/assets/images/gallery/rosa/rosa19.jpg'),
]

const verdeList = [
  require('@/assets/images/gallery/verde/verde1.jpg'),
  require('@/assets/images/gallery/verde/verde2.jpg'),
  require('@/assets/images/gallery/verde/verde3.jpg'),
  require('@/assets/images/gallery/verde/verde4.jpg'),
  require('@/assets/images/gallery/verde/verde5.jpg'),
  require('@/assets/images/gallery/verde/verde6.jpg'),
  require('@/assets/images/gallery/verde/verde7.jpg'),
  require('@/assets/images/gallery/verde/verde8.jpg'),
  require('@/assets/images/gallery/verde/verde9.jpg'),
  require('@/assets/images/gallery/verde/verde10.jpg'),
  require('@/assets/images/gallery/verde/verde11.jpg'),
  require('@/assets/images/gallery/verde/verde12.jpg'),
  require('@/assets/images/gallery/verde/verde13.jpg'),
  require('@/assets/images/gallery/verde/verde14.jpg'),
  require('@/assets/images/gallery/verde/verde15.jpg'),
  require('@/assets/images/gallery/verde/verde16.jpg'),
]

const azulList = [
  require('@/assets/images/gallery/azul/azul1.jpg'),
  require('@/assets/images/gallery/azul/azul2.jpg'),
  require('@/assets/images/gallery/azul/azul3.jpg'),
  require('@/assets/images/gallery/azul/azul4.jpg'),
  require('@/assets/images/gallery/azul/azul5.jpg'),
  require('@/assets/images/gallery/azul/azul6.jpg'),
  require('@/assets/images/gallery/azul/azul7.jpg'),
  require('@/assets/images/gallery/azul/azul8.jpg'),
  require('@/assets/images/gallery/azul/azul9.jpg'),
  require('@/assets/images/gallery/azul/azul10.jpg'),
  require('@/assets/images/gallery/azul/azul11.jpg'),
  require('@/assets/images/gallery/azul/azul12.jpg'),
  require('@/assets/images/gallery/azul/azul13.jpg'),
  require('@/assets/images/gallery/azul/azul14.jpg'),
  require('@/assets/images/gallery/azul/azul15.jpg'),
  require('@/assets/images/gallery/azul/azul16.jpg'),
]

const celesteList = [
  require('@/assets/images/gallery/celeste/celeste1.jpg'),
  require('@/assets/images/gallery/celeste/celeste2.jpg'),
  require('@/assets/images/gallery/celeste/celeste3.jpg'),
  require('@/assets/images/gallery/celeste/celeste4.jpg'),
  require('@/assets/images/gallery/celeste/celeste5.jpg'),
  require('@/assets/images/gallery/celeste/celeste6.jpg'),
  require('@/assets/images/gallery/celeste/celeste7.jpg'),
  require('@/assets/images/gallery/celeste/celeste8.jpg'),
  require('@/assets/images/gallery/celeste/celeste9.jpg'),
  require('@/assets/images/gallery/celeste/celeste10.jpg'),
  require('@/assets/images/gallery/celeste/celeste11.jpg'),
  require('@/assets/images/gallery/celeste/celeste12.jpg'),
  require('@/assets/images/gallery/celeste/celeste13.jpg'),
  require('@/assets/images/gallery/celeste/celeste14.jpg'),
  require('@/assets/images/gallery/celeste/celeste15.jpg'),
  require('@/assets/images/gallery/celeste/celeste16.jpg'),
  require('@/assets/images/gallery/celeste/celeste17.jpg'),
  require('@/assets/images/gallery/celeste/celeste18.jpg'),
  require('@/assets/images/gallery/celeste/celeste19.jpg'),
  require('@/assets/images/gallery/celeste/celeste20.jpg'),
  require('@/assets/images/gallery/celeste/celeste21.jpg'),
]

const patioList = [
  require('@/assets/images/gallery/patio/patio1.jpg'),
  require('@/assets/images/gallery/patio/patio2.jpg'),
  require('@/assets/images/gallery/patio/patio3.jpg'),
  require('@/assets/images/gallery/patio/patio4.jpg'),
  require('@/assets/images/gallery/patio/patio5.jpg'),
  require('@/assets/images/gallery/patio/patio6.jpg'),
  require('@/assets/images/gallery/patio/patio7.jpg'),
  require('@/assets/images/gallery/patio/patio8.jpg'),
  require('@/assets/images/gallery/patio/patio9.jpg'),
  require('@/assets/images/gallery/patio/patio10.jpg'),
  require('@/assets/images/gallery/patio/patio11.jpg'),
  require('@/assets/images/gallery/patio/patio12.jpg'),
  require('@/assets/images/gallery/patio/patio13.jpg'),
  require('@/assets/images/gallery/patio/patio14.jpg'),
  require('@/assets/images/gallery/patio/patio15.jpg'),
  require('@/assets/images/gallery/patio/patio16.jpg'),
  require('@/assets/images/gallery/patio/patio17.jpg'),
  require('@/assets/images/gallery/patio/patio18.jpg'),
  require('@/assets/images/gallery/patio/patio19.jpg'),
]

export default {
  name: 'fotos-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
      containerId: 1,
      galeria: [
        {
          id: 0,
          location: "Hora del patio",
          images: patioList
        },
        {
          id: 1,
          location: "Rosa",
          images: rosaList
        },
        {
          id: 2,
          location: "Celeste",
          images: celesteList
        },
        {
          id: 3,
          location: "Verde",
          images: verdeList
        },
        {
          id: 4,
          location: "Azul",
          images: azulList
        },
        {
          id: 5,
          location: "Nuestros protagonistas",
          images: protasList
        }
      ]
    }
  },
  methods: {
    forceUpdate() {
      console.log("forcing update")
      this.$redrawVueMasonry(this.containerId);
      this.$forceUpdate();  // Notice we have to use a $ here
    }
  },
  created(){
    console.log("fotos::created")
  },
  mounted(){
    console.log("fotos::mounted")
    this.jQueryInit();
    this.$Lazyload.$on('loaded', (bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, formCache) => {
      console.log("lazy loaded")
      this.forceUpdate();
    })
  },
  components:{
    pagetitle: ()=> import('@/components/pagetitle'),
  }
}

function generateImageList(path, extension, size) {
  let list = [];
  for (var i = 1; i <= size; i++) {
    list.push(path+i+extension);
  }
  return list;
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
  .masonry-img {
    max-width: 300px;
      
    margin: 5px; 
    cursor: pointer;
  }
</style>