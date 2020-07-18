<template>
  <div>
    <pagetitle :page="$t('seo.title')" />
    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-12 p-md-5 d-flex justify-content-center align-items-center"></div>
          <div class="col-md-12 wrap-about py-md-5 ftco-animate">
            <div class="heading-section mb-5 pt-5 pl-md-5 text-center">
              <h2 class="mb-4">{{$t('seo.title')}}</h2>
              <p>{{$t('description')}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import template from "@/mixins/template";

export default {
  name: "view-not-found",
  extends: template,
  metaInfo() {
    return {
      title: this.$t("seo.title")
    };
  },
  methods: {},
  data: () => {
    return {};
  },
  created() {
    console.log("view-not-found::created");
  },
  mounted() {
    console.log("view-not-found::mounted");
    this.jQueryInit();
  },
  components: {
    pagetitle: () => import("@/components/pagetitle")
  }
};
</script>

<i18n>
{
	"es": {
		"seo": {
			"title": "Página no encontrada"
		},
		"description": "Lo sentimos pero la página solicitada no se encuentra disponible."
	},
	"en": {
		"seo": {
			"title": ""
		},
		"description": ""
	},
	"eus": {
		"seo": {
			"title": "Aurkitu gabeko orria"
		},
		"description": "Sentitzen dugu, baina eskatutako orria ezin da aurkitu."
	}
}
</i18n>