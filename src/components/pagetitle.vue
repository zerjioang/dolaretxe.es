<template>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    v-bind:class="{ 'hero-bg-color': (image == undefined) }"
    :style="{'background-image': 'url(' + image  + ')'}"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div class="col-md-9 ftco-animate pb-5">
          <h1 class="mb-3 bread">{{$t('title')}}</h1>
          <p class="breadcrumbs">
            <span class="mr-2">
              <router-link :to="{'name':'home'}">
                Dolaretxe
                <i class="ion-ios-arrow-forward"></i>
              </router-link>
            </span>
            <span>
              {{page}}
              <i class="ion-ios-arrow-forward"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import template from "@/mixins/template";

export default {
  name: "pagetitle-component",
  props: {
    image: {
      type: String | Object,
      default: () => undefined
    },
    page: {
      type: String,
      default: () => "Error"
    }
  },
  mixins: [template],
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("pagetitle::created");
  },
  mounted() {
    console.log("pagetitle::mounted");
    this.jQueryInit();
  },
  components: {}
};
</script>

<style type="text/css" scoped="true">
.gray {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(5px);
}
</style>

<i18n>
{
  "es":{
    "title": "Dolaretxe Escuela Infantil"
  },
  "en":{
    "title": "Dolaretxe Haur Eskola"
  },
  "eus":{
    "title": "Dolaretxe Haur Eskola"
  }
}
</i18n>