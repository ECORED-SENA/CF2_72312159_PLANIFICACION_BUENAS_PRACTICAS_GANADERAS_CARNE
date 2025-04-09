<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down") La ganadería en Colombia ha evolucionado gracias al compromiso de las entidades encargadas del sector. Con el tiempo, se han establecido normativas y regulaciones que han elevado la competitividad en los mercados nacionales e internacionales.
    .row.mb-4(data-aos="fade-right")
      .col-lg.bg-c1
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 La implementación de las Buenas Prácticas Ganaderas (BPG) en la producción de carne requiere un compromiso constante por parte de los ganaderos. Su participación en cada proceso garantiza productos inocuos sin descuidar la responsabilidad ambiental.
      .col-lg-auto.ps-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width: 350px").m-auto
    p.mb-4(data-aos="fade-left") La creciente apertura comercial ha acelerado la adopción de medidas sanitarias y la colaboración con organismos multilaterales, lo que asegura el cumplimiento de normativas y un manejo adecuado de los alimentos de exportación. Esto contribuye a la protección de la salud pública y del medio ambiente.
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p En este componente formativo, se abordarán los conceptos y prácticas esenciales para desarrollar un plan de BPG adecuado y pertinente. Se explorarán estrategias para:
        .row
          .col-12.mb-3
            .p-3.bg-c2
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Establecer cronogramas.
          .col-12.mb-3
            .p-3.bg-c3
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Diseñar y diligenciar listas de chequeo.
          .col-12.mb-3
            .p-3.bg-c4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Aplicar parámetros y metodologías.
          .col-12.mb-3
            .p-3.bg-c5
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Implementar estrategias de evaluación.
          .col-12
            .p-3.bg-c6
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Gestionar documentación y procedimientos generales.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="", style="width: 450px").m-auto
    p.mb-0(data-aos="fade-right") Conozca cada uno de estos aspectos y fortalezca sus competencias en la planificación y ejecución de Buenas Prácticas Ganaderas.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
