<template>
	<div class="vr-card">
		<h5>{{title}}</h5>
		<iframe class="img-responsive vr-iframe" :src="vr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
	</div>
</template>

<script>

import template from '@/mixins/template'

export default {
  name: 'vrcard-component',
  methods: {
  },
  props: {
  	title: {
  		type: String,
  		default: "",
  	},
  	vr: {
  		type: String,
  		default: "",
  	}
  },
  data: () => {
    return {
    }
  },
  created(){
    console.log("visitavirtual::created")
  },
  mounted(){
    console.log("visitavirtual::mounted")
  },
  components:{
    pagetitle: ()=> import('@/components/pagetitle'),
    vrCard: ()=> import('@/components/vrCard')
  }
}
</script>

<style type="text/css" scoped="true">
  .vr-iframe {
    min-height: 400px;
    min-width: 100%;
  }
  .vr-card {
    transition: box-shadow .25s, -webkit-box-shadow .25s;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
    background-color: #e8e8e8;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    min-width: 100%;
  }
</style>