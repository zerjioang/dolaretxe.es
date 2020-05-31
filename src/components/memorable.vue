<template>
  <section class="ftco-section ftco-gallery ftco-no-pt">
    <div class="container-fluid px-4">
      <div class="row justify-content-center mb-5 mt-5">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <h2 class="mb-3">Algunos momentos memorables</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="img in memorableImageList"
          :key="img"
          class="col-xs-12 col-sm-6 col-md-3 col-md-3 ftco-animate"
        >
          <img
            class="image-popup img img-resposive img-example"
            :src="img"
            :href="img"
            alt="dolaretxe escuela Infantil, Haurreskola y guarderia en bilbao"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "component-memorable-fotos",
  data: () => ({
    memorableImageList: [
      require("@/assets/images/insta/5620724262840602855.jpg"),
      require("@/assets/images/insta/6440705795977102007.jpg"),
      require("@/assets/images/insta/symNivopage14_31.jpg"),
      require("@/assets/images/insta/2785671161688835371.jpg")
    ]
  })
};
</script>

<style scoped>
</style>

<i18n>
{
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>