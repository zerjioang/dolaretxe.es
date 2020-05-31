<template>
  <div class="request-form">
    <h2>Dolaretxe</h2>
    <p>Prim Kalea, 11, bajo, 48006 Bilbo, BI</p>
    <div class="gmap-iframe">
      <!-- include google maps iframe for free -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.6611082492964!2d-2.920260001981129!3d43.25852385975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6e2cf49d4cdbeba!2sEscuela%20Infantil%20%C2%B7%20DOLARETXE%20%C2%B7%20Haur%20Eskola!5e0!3m2!1ses!2ses!4v1576769681457!5m2!1ses!2ses"
        width="100%"
        height="400px"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="form-group">
      <router-link :to="{name: 'contact'}">
        <button class="btn dolar-gradient-orangred py-3 px-4 btn-map">Contactar</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "component-map-cta",
  mixins: []
};
</script>

<style scoped>
.btn-map {
  color: white !important;
  font-weight: bold;
  font-size: 17pt;
}
.gmap-iframe {
    max-width: 100%;
    max-width: -webkit-available;
    border:0px;
}
.map-wrapper {
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 31px -21px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 10px 31px -21px rgba(0, 0, 0, 0.33);
}
</style>