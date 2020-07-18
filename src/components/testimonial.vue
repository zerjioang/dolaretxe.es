<template>
  <section class="rating__card">
    <blockquote class="rating__card__quote">"{{review}}"</blockquote>

    <div class="rating__card__stars">
      <span class="icon-star checked"></span>
      <span class="icon-star checked"></span>
      <span class="icon-star checked"></span>
      <span class="icon-star checked"></span>
      <span class="icon-star checked"></span>
      <br />
      <span class="rating__card__stars__name">{{name}}</span>
    </div>
    <p class="rating__card__bottomText">{{$t('reseña')}}</p>
  </section>
</template>

<script>
export default {
  name: "testimonial-component",
  props: {
    name: {
      type: String,
      default: "name"
    },
    review: {
      type: String,
      default: ""
    }
  },
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("testimonial::created");
  },
  mounted() {
    console.log("testimonial::mounted");
  },
  components: {}
};
</script>

<style lang="scss" scoped="true">
$body-color: #333a4d;
$df-dark-blue: #003a79;
$df-sky-blue: #00b3e7;
$df-orange: #f78d28;
$df-bg-gray: #eff0f2;

h1 {
  font-family: sans-serif;
  color: #545454;
}
/*RATING CARD*/
.rating__card {
  box-shadow: 0px 15px 50px -18px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 15px;
  margin: 15px;
  font-family: sans-serif;
  color: #545454;
  font-weight: 100;
  background: url("") no-repeat center center;
  border-radius: 10px;
  /* background: url('') no-repeat center center, linear-gradient($df-dark-blue, $df-sky-blue); */
  background-size: cover;
  background: $df-bg-gray;
  width: 100%;
  max-width: 300px;
}
.rating__card__quote {
  padding: 5px 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.2;
  font-size: 16px;
  line-height: 1.54;
  text-align: justify;
}
.fa-star {
  color: #545454;
}
.checked {
  color: $df-orange;
}
.rating__card__stars {
  margin: auto;
  display: block;
  text-align: center;
}
.rating__card__stars__name {
  font-size: 16px;
  margin: 0 0 0 5px;
}
.rating__card__bottomText {
  text-align: center;
  font-size: 14px;
  padding: 0px;
  margin: 0px;
}
</style>

<i18n>
{
  "es":{
    "reseña": "1 reseña"
  },
  "en":{
    "reseña": ""
  },
  "eus":{
    "reseña": "aipamen bat"
  }
}
</i18n>