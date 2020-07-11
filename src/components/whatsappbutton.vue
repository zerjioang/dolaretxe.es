<!--
NOTA:

este componente (fichero) no está siendo utilizado en la version actual
-->
<template>
  <a rel="noopener" target="_blank" :href="link" :title="text" class="btn btn-whatsapp">
    <i class="fa fa-whatsapp fa-fw"></i>
    <span class="flaticon-mobile-phone"></span>Envíanos un Whatsapp
  </a>
</template>

<script>
export default {
  name: "whatsapp-button-component",
  props: {
    text: {
      type: String,
      default: "whatsapp"
    },
    link: {
      type: String,
      default:
        "https://api.whatsapp.com/send?phone=34946004558&text=Hola%20me%20gustar%C3%ADa%20solicitar%20una%20cita%20para%20conocer%20la%20guarde"
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
.btn-whatsapp {
  color: #ffffff !important;
  border-width: 2px !important;
  border-color: #7cda24;
  padding-left: 2em;
  padding-right: 0.7em;
  background-color: #7cda24;
  margin: 2px;
}
.btn-whatsapp:link,
.btn-whatsapp:visited {
  color: #fff;
}
.btn-whatsapp:active,
.btn-whatsapp:hover {
  background: #0a7d18;
  color: #fff;
}
</style>