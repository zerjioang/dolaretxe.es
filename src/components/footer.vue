<template>
	<footer class="ftco-footer ftco-bg-dark ftco-section dolar-gradient-orangred-darken-1">
	    <cookie-law theme="dark-lime" buttonText="Aceptar">
	    	<div slot="message">
				<p class="justified">
					Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continua navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener <router-link to="cookies">más información</router-link>.
				</p>
			</div>
	    </cookie-law>
		<div class="container">

			<div class="row mb-5">
				<div class="col-md-12">
					<div class="mb-4 text-center"> 
						<img :src="require('@/assets/images/dolaretxe-white.png')" class="footer-img">
					</div>
				</div>
			</div>

			<div class="row mb-5">
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Dolaretxe Haur Eskola</h2>
						<p align="justify">
							Os invitamos a conocer la Escuela Infantil Dolaretxe Haur Eskola, donde os proporcionaremos una asistencia más personalizada y os informaremos de todos servicios.
						</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
							<li v-show="false" class="ftco-animate">
								<a href="#" rel="noopener" target="_blank">
									<span class="icon-twitter"></span>
								</a>
							</li>
							<li class="ftco-animate">
								<a href="https://www.facebook.com/dolaretxehaurreskola/" rel="noopener" target="_blank">
									<span class="icon-facebook"></span>
								</a>
							</li>
							<li class="ftco-animate">
								<a href="https://www.instagram.com/dolaretxe" rel="noopener" target="_blank">
									<span class="icon-instagram"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4 ml-md-5">
						<h2 class="ftco-heading-2">Información</h2>
						<ul class="list-unstyled">
							<li>
								<a href="#" class="py-2 d-block">Jornadas</a>
							</li>
							<li>
								<a href="#" class="py-2 d-block">Calendario</a>
							</li>
							<li>
								<a href="#" class="py-2 d-block">Entrada y salida</a>
							</li>
							<li>
								<a href="#" class="py-2 d-block">Servicios</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Información Legal</h2>
						<ul class="list-unstyled">
							<li>
								<router-link :to="{'name':'legal'}" class="py-2 d-block">Aviso Legal</router-link>
							</li>
							<li>
								<router-link :to="{'name':'privacy'}" class="py-2 d-block">Pólitica de privacidad</router-link>
							</li>
							<li>
								<router-link :to="{'name':'cookies'}" class="py-2 d-block">Información sobre Cookies</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Contáctanos!</h2>
						<div class="block-23 mb-3">
							<ul>
								<li>
									<a class="link" href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA" target="_blank" rel="noopener">
										<span class="icon icon-map-marker"></span>
										<span class="text">
											<a class="link" href="https://goo.gl/maps/8NV7Twm7ARWWiPLDA" target="_blank" rel="noopener">
												Escuela Infantil Haur Eskola.
												Calle Prim, 11. Bajo.
												48006 Bilbao. Bizkaia
											</a>
										</span>
									</a>
								</li>
								<li>
									<a class="link" href="tel:+34946004558" target="_blank" rel="noopener">
										<span class="icon icon-phone"></span>
										<span class="text">
											<a class="link" href="tel:+34946004558" target="_blank" rel="noopener">94 600 45 58</a>
										</span>
									</a>
								</li>
								<li>
									<a href="mailto:info@dolaretxe.es" target="_blank" rel="noopener">
										<span class="icon icon-envelope"></span>
										<span class="text">
											 <a class="link" href="mailto:info@dolaretxe.es" target="_blank" rel="noopener">info@dolaretxe.es</a>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row row-centered text-center">
				<div class="col-xs-12 col-md-5 text-center">
					<badge/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center copyright">
					<p class="bold">Copyright &copy; {{currentYear}}. Todos los derechos reservados.</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>

export default {
  name: 'footer-component',
  props: {
  },
  mixins: [
  ],
  methods: {
  },
  data: () => {
    return {
      currentYear: new Date().getFullYear(),
      location: "Bilbao. Casco Viejo, Bizkaia",
      ejgvImage: require('@/assets/images/ejgv.png')
    }
  },
  created(){
    console.log("footer::created")
  },
  mounted(){
    console.log("footer::mounted")
  },
  components:{
  	badge: ()=> import('@/components/badge'),
  	CookieLaw: () => import('vue-cookie-law')
  }
}
</script>

<style scoped lang="css">
.bold {
	font-weight: bold;
	color: white;
}
.footer-img {
	max-height: 100px;
	margin: 5px;
}
.link {
	cursor: pointer;
}
.link:hover, .link:active, .link:focus {
	color: white;
	cursor: pointer;
}
.copyright {
	margin-top: 20px; 
}
footer {
	padding-bottom: 20px;
}
</style>

<style scoped lang="scss">
</style>