<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión documental: concepto y técnicas
    p.mb-4(data-aos="fade-down") La gestión documental en BPG permite sistematizar e inspeccionar la documentación requerida en todas las etapas del proceso productivo, asegurando su adecuada disposición final.
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
    p.mb-5(data-aos="fade-right") Aunque la #[b comunicación] y la #[b gestión de personal] son procesos distintos, están estrechamente vinculados dentro del sector ganadero.
    .row.mb-4
      .col-auto(data-aos="fade-down")
        .py-2.px-3.bg-c17
          p.mb-0 #[b La comunicación en la producción ganadera]
    p.mb-4(data-aos="fade-right") Es una estrategia clave para el desarrollo e interacción entre los actores del sector. Su propósito es mantener una #[b articulación constante] en temas de:
    .row.justify-content-center.mb-5
      .col-lg-8
        .row.mb-3(data-aos="fade-left")
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img4.png', alt='', style='width: 300px').m-auto
          .col-lg.bg-c42
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Vacunación y sanidad animal.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Normativas y certificaciones.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Producción y comercialización.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Manejo de las Buenas Prácticas Ganaderas.
        .row
          .col-12(data-aos="fade-right")
            .p-4.bg-c43
              p.mb-0 Una comunicación eficiente permite que una finca o empresa pueda ser reconocida a nivel nacional e internacional.
    .row.mb-4
      .col-auto(data-aos="fade-down")
        .py-2.px-3.bg-c17
          p.mb-0 #[b La gestión de personal en ganadería]
    p.mb-4(data-aos="fade-right") La gestión de personal abarca todas las #[b actividades administrativas de recursos humanos], desde el proceso de #[b contratación] hasta la finalización del contrato.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-left")
        .row.mb-3
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img5.png', alt='', style='width: 450px').m-auto
          .col-lg.bg-c42
            .row.h-100.align-items-center
              .col-12
                .p-4
                  p #[b Este proceso incluye aspectos clave como:]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Seguridad y salud en el trabajo (SST).
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Asignación de roles y funciones.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Capacitación en protocolos y normativas.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Evaluación del desempeño laboral.
    .row.mb-4
      .col-auto(data-aos="fade-down")
        .py-2.px-3.bg-c17
          p.mb-0 #[b Aspectos clave en la gestión de comunicación y personal en ganadería]
    .row.mb-3
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Para una correcta implementación de estrategias de comunicación y gestión de personal en la finca ganadera, es importante considerar lo siguiente:
        ol.lista-ol--cuadro.lista-ol
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 1
            |
            p.mb-0 Establecer canales de comunicación internos y externos efectivos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 2
            |
            p.mb-0 Capacitar al personal en el cumplimiento de BPG.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 3
            |
            p.mb-0 Mantener registros de asistencia, capacitación y desempeño del equipo de trabajo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 4
            |
            p.mb-0 Aplicar estrategias de liderazgo y trabajo en equipo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 5
            |
            p.mb-0 Garantizar condiciones laborales óptimas y cumplimiento de normas de SST.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img6.png', alt='', style='width: 400px').m-auto
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-auto.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema4/img7.png', alt='', style='width: 300px').m-auto
          .col(data-aos="fade-left")
            p El cumplimiento de protocolos, registros y normativas en las Buenas Prácticas Ganaderas es fundamental para garantizar un sistema productivo sostenible, competitivo y alineado con estándares nacionales e internacionales. La certificación en BPG no solo mejora la calidad de los productos, sino que también permite acceder a mercados más exigentes, generando mayores oportunidades para los productores ganaderos 
            p.mb-0 La comunicación y la gestión de personal son clave en el proceso productivo de una finca ganadera. Este video explora estrategias efectivas para articular equipos de trabajo, optimizar la producción y fortalecer la relación con proveedores y clientes.
    Separador
    p.text-center.fs-3.mb-4(data-aos="fade-down") #[b Video comunicación y gestión personal]
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WeKADALI0OE?si=NWvyq-ipeWCsxt5K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
