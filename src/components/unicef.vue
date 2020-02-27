<template>
  <div>
    <pagetitle page="Compromiso UNICEF" :image="bgImage" />
    <sectionUnicef/>
  </div>
</template>

<script>

const bgImage = require('@/assets/images/bg_2.jpg');

export default {
  name: 'unicef-component',
  methods: {
  },
  data: () => {
    return {
      bgImage,
    }
  },
  created(){
    console.log("compromiso-unicef::created")
  },
  mounted(){
    console.log("compromiso-unicef::mounted")
    // this.jQueryInit();
  },
  components:{
    pagetitle: ()=> import('@/components/pagetitle'),
    sectionUnicef: () => import('@/components/sections/section-unicef'),
  }
}
</script>

<style type="text/css" scoped="true">
</style>