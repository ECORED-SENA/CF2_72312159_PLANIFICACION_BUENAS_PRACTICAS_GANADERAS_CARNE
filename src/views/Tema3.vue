<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Protocolos y registros: concepto, diseños y modelos
    .row.bg-c39.mb-5
      .col-12
        .px-5
          p(data-aos="fade-down") Los protocolos de bioseguridad ganadera son fundamentales porque establecen una orientación clara sobre las actividades necesarias para la crianza, producción, mantenimiento y exportación de productos pecuarios. En Colombia, los estándares productivos en el sector ganadero están regulados por normativas específicas que garantizan la calidad e inocuidad del producto final. 
          p.mb-5(data-aos="fade-right") La normativas clave en bioseguridad ganadera es:
          .row.justify-content-center.mb-5
            .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img1.svg' alt='AvatarTop')
                //- .tarjeta debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta.bg-white.shadow
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-auto
                        .py-2.px-3
                          p.mb-0 #[b Resolución 0773 de 2020]
                    p.text-center.mb-0 Establece las medidas de bioseguridad para el sector pecuario.
            .col-10.col-md-6.col-lg-4(data-aos="fade-left")
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img2.svg' alt='AvatarTop')
                //- .tarjeta debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta.bg-white.shadow
                  .p-4
                    .row.justify-content-center.mb-3
                      .col-auto
                        .py-2.px-3
                          p.mb-0 #[b Resolución 068167 de 2020]
                    p.text-center.mb-0 Define los requisitos para la generación de Buenas Prácticas Ganaderas (BPG) en la producción de carne de bovinos y bufalinos.
          p.mb-0(data-aos="fade-down") Para obtener la certificación del ICA, es fundamental cumplir con los protocolos descritos en los #[b artículos 5 al 10 de la Resolución 068167 de 2020], ya que de ellos depende la aprobación o rechazo del certificado.
    .row.mb-4
      .col-auto(data-aos="fade-down")
        .py-2.px-3.bg-c17
          p.mb-0 #[b Protocolos en Buenas Prácticas Ganaderas (BPG)]
    p.mb-4(data-aos="fade-right") Las BPG, como estrategia de calidad en la producción primaria, deben cumplir con ciertos lineamientos establecidos por la entidad certificadora. Los protocolos incluyen los siguientes aspectos:
    .row.bg-c40.mb-4
      .col-12
        .px-5
          .row.justify-content-center(data-aos="fade-right")
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c5.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img3.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Control de plagas]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c6.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img4.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Manejo sanitario]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c37.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img5.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Alimentación y acceso al agua]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c4.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img6.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Transporte animal]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c6.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img7.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Trazabilidad del ganado]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c4.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img8.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Bienestar animal]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c5.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img9.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Condiciones laborales del personal]
            .col-10.col-md-6.col-lg-3.mb-4
              .p-3.bg-c6.h-100
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img10.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 #[b Manejo medioambiental de residuos]
          .row.mb-4
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p Para la certificación, el ICA realiza una #[b visita técnica] en la que evalúa el cumplimiento de estos requisitos. En este proceso se revisa:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 El plan de saneamiento, que exige al menos un examen médico anual.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 El uso adecuado de medicamentos veterinarios.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 La sanidad animal y las medidas de bioseguridad.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Las buenas prácticas de alimentación.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Las condiciones de transporte.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 La inscripción del predio en los registros oficiales.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img3.png', alt='', style='width: 360px').m-auto
          p.mb-0(data-aos="fade-down") A continuación, se presenta una lista de las enfermedades más relevantes en la ganadería bovina, con sus características principales.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(darta-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='', style='width: 390px').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Brucelosis bovina")
            .col-12
              p.mb-0 Enfermedad causada por #[i Brucella], afecta la reproducción, causa abortos y es zoonótica.
          .row(titulo="Tuberculosis")
            .col-12
              p.mb-0 Infección crónica por Mycobacterium, se transmite por vía aérea y afecta el sistema respiratorio.
          .row(titulo="Fiebre aftosa")
            .col-12
              p.mb-0 Enfermedad viral altamente contagiosa que provoca vesículas en mucosas, fiebre y pérdida del apetito.
          .row(titulo="Leptospirosis")
            .col-12
              p.mb-0 Enfermedad bacteriana zoonótica transmitida por aguas contaminadas. Provoca fiebre, abortos e infertilidad.
          .row(titulo="Diarrea Viral Bovina (DVB)")
            .col-12
              p.mb-0 Infección viral que afecta el sistema digestivo y respiratorio, con posibles abortos y malformaciones en terneros.
          .row(titulo="Rinotraqueítis Infecciosa Bovina (IBR)")
            .col-12
              p.mb-0 Virus que afecta el sistema respiratorio, genital y ocular. Se propaga por vía aérea.
          .row(titulo="Carbón bacteridiano")
            .col-12
              p.mb-0 Infección aguda causada por #[i Bacillus anthracis], provoca fiebre alta, hemorragias y muerte súbita en animales en pastoreo.
    .row.bg-c41
      .col-12
        .px-5
          .row.mb-4.ms-0
            .col-auto.bg-c7(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Clasificación de predios en certificación BPG
          p.mb-4(data-aos="fade-right") Para que un predio sea certificado debe cumplir con ciertos criterios de evaluación:
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img6.png', alt='', style='width: 300px').m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF.mb-3(columnas="col-md-6")
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Certificable]
                  p.text-center.mb-0 Cumple con el 100% de los criterios fundamentales, al menos el 80% de los criterios mayores y el 60% de los menores. Se expide el Certificado de BPG.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Aplazable]
                  p.text-center.mb-0 No cumple con el 100% de los criterios fundamentales, o no alcanza el 80% en criterios mayores ni el 60% en menores.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b No conformidad]
                  p.text-center.mb-0 Tiene deficiencias corregibles en un plazo de tres meses. Si cumple con los ajustes, el ICA puede reprogramar una auditoría dentro de 30 días hábiles.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Suspensión o cancelación]
                  p.text-center.mb-0 La certificación puede suspenderse o cancelarse si no se mantiene el cumplimiento de las normas tras su obtención.

</template>

<script>
export default {
  name: 'Tema3',
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
