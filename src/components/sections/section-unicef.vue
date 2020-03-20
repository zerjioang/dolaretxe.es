<template>
<section class="ftco-section ftco-no-pt ftco-no-pb mt-5">
 <div class="container">
    <div class="row no-gutters">
       <div class="col-md-12 wrap-about ftco-animate pb-5">
          <div class="heading-section">
             <div>
                <h2>Escuela Amiga de UNICEF</h2>
                <h5>Comprometidos con la Infancia</h5>
             </div>
             <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad">
                <img class="amiga img-responsive" :src="bgUnicefEscuelaAmiga" alt="dolaretxe escuela Infantil, haur eskola y guarderia en bilbao">
             </div>

             <div class="row">
               <div class="col-md-4">
                 <p class="justified">
                    Para la Escuela Infantil · <strong>Dolaretxe</strong> · Haur Eskoa es un orgullo pertenecer a una organización como <strong>UNICEF</strong> por su compromiso con los Derechos de la Infancia.
                 </p>
               </div>

               <div class="col-md-4">
                 <p class="justified">
                    El orgullo es doble al ser la primera Escuela Amiga de <strong>UNICEF</strong> en Euskadi, donde a partir de nuestro trabajo con los más pequeños queremos contribuir a difundir desde lo local, desde el corazón del Casco Viejo bilbaíno, los valores de solidaridad y ciudadanía global acordes con la misión de <strong>UNICEF</strong>.
                 </p>
               </div>

               <div class="col-md-4">
                 <p class="justified">
                    Con un pequeño esfuerzo y el firme <strong>compromiso con los Derechos de la Infancia</strong> de cada uno de nosotros estaremos desarrollando una labor de incalculable valor en favor de nuestros hijos, alumnos y otros niños y niñas del mundo que están en situaciones muy desfavorables.
                 </p>
               </div>
             </div>
             <div class="ftco-animate fadeInUp ftco-animated align-items-center text-center img-pad unicef-bg">
                <a href="http://www.unicef.es/" alt="UNICEF" target="_blank">
                <img class="img-responsive" :src="bgUnicefFooter" alt="dolaretxe escuela Infantil, haur eskola y guarderia en bilbao">
                </a>
             </div>
          </div>
       </div>
    </div>
 </div>
</section>
</template>

<script type="text/javascript">

import template from '@/mixins/template'

const bgUnicefFooter = require('@/assets/images/unicef.png');
const bgUnicefEscuelaAmiga = require('@/assets/images/unicef-amiga.png');

export default {
  name: 'unicef-section',
  extends: template,
  methods: {
  },
  data: () => {
    return {
      bgUnicefFooter,
      bgUnicefEscuelaAmiga,
    }
  },
  created(){
    console.log("unicef-section::created")
  },
  mounted(){
    console.log("unicef-section::mounted")
    this.jQueryInit();
  },
  components:{
    sectionUnicef: () => import('@/components/sections/section-unicef')
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
  .unicef-bg {
    background: #00b0fa;
  }
</style>