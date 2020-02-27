<template>
  <div>
    <pagetitle page="Trabaja con nosotros" :image="bgImage" />
    <br></br>
    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-12 wrap-about py-md-5 ftco-animate">
                    <div class="heading-section mb-5 pt-5 pl-md-5">
                        <div class="pr-md-5 mr-md-5">
                            <h2 class="mb-4">Trabaja con nosotros</h2>
                        </div>

                        <p class="justified">
                            En Dolaretxe estamos encantados de conocerte y recibir tu CV. Lamentablemente actualmente no disponemos de plazas libres. Por favor, añade esta sección a favoritos en tu navegador y consultala proximamente para conocer las novedades.
                        </p>
                        <p class="justified">
                          Tambien puedes enviarnos un email a <a href="mailto:info@dolaretxe.com">info@dolaretxe.com</a> con tus datos y adjuntando tu CV y lo recibiremos encantados para futuros procesos.
                        </p>
                    </div>
                </div>
            </div>
          </div>
    </section>
  </div>
</template>

<script>

import template from '@/mixins/template'

export default {
  name: 'trabajo-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    	bgImage: require('../assets/images/bg_2.jpg')
    }
  },
  created(){
    console.log("trabajo::created")
  },
  mounted(){
    console.log("trabajo::mounted")
    this.jQueryInit();
  },
  components:{
    pagetitle: ()=> import('@/components/pagetitle')
  }
}
</script>

<style type="text/css" scoped="true">
  .title-bold{
    font-size: 40px !important;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
  }
</style>