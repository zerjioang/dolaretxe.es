<template>
  <div>
    <pagetitle page="Jornadas" :image="bgImage" />
    <br></br>
    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-12 py-md-5 ftco-animate">
                </div>
            </div>
          </div>
    </section>
  </div>
</template>

<script>

import template from '@/mixins/template'

export default {
  name: 'jornadas-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    	bgImage: require('../assets/images/bg_2.jpg')
    }
  },
  created(){
    console.log("jornadas::created")
  },
  mounted(){
    console.log("jornadas::mounted")
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
  .cita-form {
    padding: 0px;
  }
</style>