<template>
  <section class="ftco-section ftco-no-pt">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h2 class="mb-4">Conference Ticket Pricing</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <div class="block-7">
              <div class="text-center">
                <h2 class="heading">Personal</h2>
                <span class="price"><sup>$</sup> <span class="number">85</span></span>
                <span class="excerpt d-block">per month</span>
                <h3 class="heading-2 my-4">Enjoy All The Features</h3>
                <ul class="pricing-text">
                  <li>Conference Seats</li>
                  <li>Free Wifi</li>
                  <li>Coffee Breaks</li>
                  <li>Lunch</li>
                  <li>Workshops</li>
                  <li>One Speakers</li>
                  <li>Papers</li>
                </ul>
                <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="block-7 active">
              <div class="text-center">
                <h2 class="heading">Small Team</h2>
                <span class="price"><sup>$</sup> <span class="number">200</span></span>
                <span class="excerpt d-block">per month</span>
                <h3 class="heading-2 my-4">Enjoy All The Features</h3>
                <ul class="pricing-text">
                  <li>Conference Seats</li>
                  <li>Free Wifi</li>
                  <li>Coffee Breaks</li>
                  <li>Lunch</li>
                  <li>Workshops</li>
                  <li>One Speakers</li>
                  <li>Papers</li>
                </ul>
                <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="block-7">
              <div class="text-center">
                <h2 class="heading">Family Pack</h2>
                <span class="price"><sup>$</sup> <span class="number">499</span></span>
                <span class="excerpt d-block">per month</span>
                <h3 class="heading-2 my-4">Enjoy All The Features</h3>
                <ul class="pricing-text">
                  <li>Conference Seats</li>
                  <li>Free Wifi</li>
                  <li>Coffee Breaks</li>
                  <li>Lunch</li>
                  <li>Workshops</li>
                  <li>One Speakers</li>
                  <li>Papers</li>
                </ul>
                <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

import template from '@/mixins/template'

export default {
  name: 'pricing-component',
  extends: template,
  methods: {
  },
  data: () => {
    return {
    }
  },
  created(){
    console.log("pricing::created")
  },
  mounted(){
    console.log("pricing::mounted")
    this.jQueryInit();
  },
  components:{
  }
}
</script>

<style type="text/css" scoped="true">
</style>