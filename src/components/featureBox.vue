<template>
  <div class="block-18 text-center py-4 mb-4 wrapper-box" :class="colorClass">
     <div class="text">
        <div class="icon d-flex justify-content-center align-items-center wrapper-title">
           <span class="colored" :class="icon"></span>
        </div>
        <span class="center-feature">
          <p class="box-text">{{text}}</p>
          <p v-if="subtitle" class="box-subtitle">{{subtitle}}</p>
        </span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'featurebox-component',
  props: {
    text: {
        type: String,
        default: ""
    },
    subtitle: {
        type: String,
        default: undefined
    },
    icon: {
        type: String,
        default: "flaticon-idea"
    },
    colorClass: {
        type: String,
        default: "bg-primary"
    }
  },
  methods: {
  },
  data: () => {
    return {
    }
  },
  created(){
    console.log("featurebox::created")
  },
  mounted(){
    console.log("featurebox::mounted")
  },
  components:{
  }
}
</script>

<style type="text/css" scoped="true">
.wrapper-box {
  min-height: 185px;
  max-height: 225px;
}
.wrapper-title {
  padding-top: 15px;
}
.center-feature {
  color: white !important;;
  font-size: 20px !important;
  font-weight: bold;
}
.colored {
  color: white;
  font-size: 40px;
}
.box-text {
  padding-bottom: 10px;
  max-width: 95%;
}
.box-subtitle {
  margin: 8px;
  max-width: 95%;
  font-size: 18px !important;
  font-weight: normal;
}
</style>