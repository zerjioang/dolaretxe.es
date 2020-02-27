<template>
  <!--:style="{'background-image': 'url(' + image  + ')'}" -->
  <section class="hero-wrap hero-wrap-2 js-fullheight hero-bg-color" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div class="col-md-9 ftco-animate pb-5">
          <h1 class="mb-3 bread">Dolaretxe Haur Eskola</h1>
          <p class="breadcrumbs">
            <span class="mr-2">
              <router-link :to="{'name':'home'}">Dolaretxe 
                <i class="ion-ios-arrow-forward"></i>
              </router-link>
            </span>
            <span>{{page}}
              <i class="ion-ios-arrow-forward"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import template from '@/mixins/template'

export default {
  name: 'pagetitle-component',
  props: {
    image: {
      type: String | Object,
      default: () => require('@/assets/images/noheader.png')
    },
    page: {
      type: String,
      default: () => "Error"
    }
  },
  mixins: [
    template
  ],
  methods: {
  },
  data: () => {
    return {
    }
  },
  created(){
    console.log("pagetitle::created")
  },
  mounted(){
    console.log("pagetitle::mounted")
    this.jQueryInit();
  },
  components:{
  }
}
</script>

<style type="text/css" scoped="true">
</style>