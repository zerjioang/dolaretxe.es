<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h2>Recent Blog</h2>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a
              href="blog-single.html"
              class="block-20"
              v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/image_1.jpg') + ')' }"
            ></a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div>
                  <a href="#">July. 14, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" class="meta-chat">
                    <span class="icon-chat"></span> 3
                  </a>
                </div>
              </div>
              <h3 class="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a
              href="blog-single.html"
              class="block-20"
              v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/image_2.jpg') + ')' }"
            ></a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div>
                  <a href="#">July. 14, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" class="meta-chat">
                    <span class="icon-chat"></span> 3
                  </a>
                </div>
              </div>
              <h3 class="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry">
            <a
              href="blog-single.html"
              class="block-20"
              v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/image_3.jpg') + ')' }"
            ></a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div>
                  <a href="#">July. 14, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" class="meta-chat">
                    <span class="icon-chat"></span> 3
                  </a>
                </div>
              </div>
              <h3 class="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "blog-component",
  extends: template,
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("blog::created");
  },
  mounted() {
    console.log("blog::mounted");
  }
};
</script>

<style type="text/css" scoped="true">
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