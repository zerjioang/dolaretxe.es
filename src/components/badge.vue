<template>
<div class="whiteCard text-center">
	<img class="image" :src="ejgvImage" alt="dolaretxe escuela Infantil, haur eskola y guarderia en bilbao con numero de licencia del gobierno vasco"/>
	<p class="label">
		Escuela Infantil DOLARETXE Haur Eskola
		
		<br></br>
		<p class="licenseNumber">Nº 015713</p>
	</p>
</div>
</template>

<script>

export default {
  name: 'badge-component',
  props: {
  },
  mixins: [
  ],
  methods: {
  },
  data: () => {
    return {
      ejgvImage: require('@/assets/images/ejgv.png')
    }
  },
  created(){
    console.log("badge::created")
  },
  mounted(){
    console.log("badge::mounted")
  },
  components:{
  }
}
</script>

<style scoped lang="css">
.whiteCard {
  background: rgb(255, 255, 255) no-repeat scroll center center;
  background-size: auto;
  border-radius: 8px;
  padding: 10px;
  max-width: 400px;
}

.whiteCard > p {
  color: black;
  margin-bottom: 0px;
  font-weight: bold;
}
.whiteCard > .licenseNumber {
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: normal;
}
.whiteCard > .image {
  max-width: -moz-available;
  max-width: -webkit-available;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.bold {
	font-weight: bold;
	color: white;
}
.footer-img {
	max-height: 100px;
	margin: 5px;
}
.label {
  font-size: 16px;
}
</style>

<style scoped lang="scss">
</style>