<template>
  <a rel="noopener" target="_blank" :href="link" :title="text" class="btn btn-facebook">
    <i class="fa fa-facebook fa-fw"></i>
    {{text}}
  </a>
</template>

<script>
export default {
  name: "fb-button-component",
  props: {
    text: {
      type: String,
      default: "Facebook"
    },
    link: {
      type: String,
      default: "https://www.facebook.com/dolaretxehaurreskola/"
    }
  },
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("fb-button::created");
  },
  mounted() {
    console.log("fb-button::mounted");
  },
  components: {}
};
</script>

<style type="text/css" scoped="true">
.btn-facebook {
  color: #ffffff !important;
  border-width: 2px !important;
  border-color: #263961;
  padding-left: 2em;
  padding-right: 0.7em;
  background-color: #3b5998;
  margin: 2px;
}
.btn-facebook:link,
.btn-facebook:visited {
  color: #fff;
}
.btn-facebook:active,
.btn-facebook:hover {
  background: #263961;
  color: #fff;
}
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