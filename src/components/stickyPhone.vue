<template>
  <div class="icon-bar">
    <a :href="'tel:'+phone" class="call">
      <span v-if="showText">{{text}}</span>
      <strong>{{phone}}</strong>
    </a>
  </div>
</template>

<script>
export default {
  name: "stickyphone-component",
  props: {
    text: {
      type: String,
      default: "Llámanos: "
    },
    phone: {
      type: String,
      default: "94 600 45 58"
    }
  },
  methods: {},
  data: () => ({
    showText: true
  }),
  created() {
    console.log("stickyphone::created");
  },
  methods: {
    onResize: function() {
      this.showText = window.innerWidth >= 480;
    }
  },
  mounted() {
    console.log("stickyphone::mounted");
    // Register an event listener when the Vue component is ready
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  components: {}
};
</script>

<style type="text/css" scoped="true">
body {
  margin: 0;
  height: 2000px;
}

.icon-bar {
  position: fixed;
  top: 1%;
  left: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 4;
  margin-left: -110px; /* Negative half of width. */
}
@media screen and (min-width: 380px) and (max-width: 480px) {
  .icon-bar {
    top: 1%;
    left: 65%;
  }
}

@media screen and (max-width: 380px) {
  .icon-bar {
    top: 1%;
    left: 83%;
  }
}

.icon-bar a {
  display: block;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
  color: white;
  font-size: 16px;
  border-radius: 0px 0px 10px 10px;
}

.icon-bar a:hover {
  background-color: #a00;
}

.call {
  background: #dd4b39;
  color: white;
}

.content {
  margin-left: 75px;
  font-size: 30px;
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