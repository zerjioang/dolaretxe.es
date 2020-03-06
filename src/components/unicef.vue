<template>
  <div>
    <pagetitle page="Compromiso UNICEF"/>
    <sectionUnicef/>
  </div>
</template>

<script>

export default {
  name: 'unicef-component',
  methods: {
  },
  data: () => ({
  }),
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