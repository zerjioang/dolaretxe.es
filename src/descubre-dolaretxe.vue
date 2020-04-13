<template>
  <section class="ftco-counter img">
    <div class="container">
      <br />
      <div class="heading-section">
        <div class="text-center">
          <h2 class="mb-4">Descubre Dolaretxe Haurreskola</h2>
          <p class="justified font-20">
            Te ofrecemos un
            <strong>servicio único</strong> y excepcional para ti y para los niños, gracias al
            <strong>equipazo de educadoras</strong> y un personal totalmente cualificado, con nuestra experiencia y profesionalidad como principales avales. Sin olvidar nuestras instalaciones, con aulas perfectamente equipadas y destacando como punto fundamental la
            <strong>perfecta localización</strong> del centro, situado en una
            <strong>zona abierta, totalmente peatonal y libre de tráfico</strong>.
          </p>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 1" icon="flaticon-battery" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 2" icon="flaticon-battery" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 3" icon="flaticon-battery" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 4" icon="flaticon-battery" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 5" icon="flaticon-archive-1" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 6" icon="flaticon-archive-1" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 7" icon="flaticon-archive-1" colorClass="bg-primary" />
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <featureBox text="caracteristica 8" icon="flaticon-archive-1" colorClass="bg-primary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'component-descubre-dolaretxe',
    components: {
        featureBox: () => import("@/components/featureBox"),
    }
}
</script>

<style scoped>

</style>