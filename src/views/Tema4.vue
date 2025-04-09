<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión documental: concepto y técnicas
    p.mb-4 La gestión documental en BPG permite sistematizar e inspeccionar la documentación requerida en todas las etapas del proceso productivo, asegurando su adecuada disposición final.
    .row.bg-c11.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Responsables de la gestión documental]
                    p.mb-0 La administración de los documentos debe estar a cargo de #[b directivos o administradores], quienes supervisan el archivo y garantizan su correcta organización.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema4/img1.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Funciones en la gestión documenta]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Formalizar procesos administrativos.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Ordenar la documentación por dependencias.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Mejorar el acceso a la información.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Conservar y digitalizar registros para su respaldo.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema4/img2.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Automatización de la gestión documental]
                    p.mb-0 El uso de herramientas digitales permite optimizar la administración documental. Los archivos pueden mantenerse en formato físico por hasta #[b 20 años], pero se recomienda su migración a #[b #[i software] especializados] para mejorar la gestión y liberar espacio.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema4/img3.png", alt="", style="width: 500px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Comunicación y gestión de personal
    p.mb-5 Aunque la comunicación y la gestión de personal son procesos distintos, están estrechamente vinculados dentro del sector ganadero.
    p Hola.

</template>

<script>
export default {
  name: 'Tema4',
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
