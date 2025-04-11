<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Concepto, procedimiento y metodología
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Un procedimiento es un conjunto de actividades detalladas que deben cumplirse bajo ciertas condiciones establecidas por normas. Estas condiciones incluyen aspectos como la duración, documentación y cumplimiento de requisitos específicos.
          br
          br
          p En el caso de las Buenas Prácticas Ganaderas (BPG), la norma que regula los procedimientos es la Resolución 068167 de 2020, la cual establece los requisitos para obtener la certificación en producción de carne de bovinos y/o bufalinos.
          br
          br
          p Además de cumplir con las exigencias normativas, es fundamental llevar un registro detallado de las actividades de la empresa, garantizando que el producto final sea inocuo y de alta calidad para el consumo humano.
    .row.justify-content-center.align-items-center.mb-5
      .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
      .col-md-9(data-aos="fade-left")
        .p-4.bg-c6
          p.mb-0 A continuación, se presentan los aspectos generales relacionados con procedimientos, procesos y registros.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Procedimientos en BPG
    p(data-aos="fade-right") Los procedimientos permiten detallar cada etapa de un proceso y están conformados por una serie de actividades cronológicas llevadas a cabo por el personal encargado.
    p.mb-4(data-aos="fade-right") En el contexto de las BPG, estos procedimientos están orientados a la certificación y garantizan:
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c32.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 100px').m-auto
          .row
            .col-12
              .p-3.bg-c33
                p.text-center.mb-0 Manejo adecuado de la crianza y explotación ganadera.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c32.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img3.svg', alt='', style='width: 100px').m-auto
          .row
            .col-12
              .p-3.bg-c33
                p.text-center.mb-0 Optimización de los procesos de producción.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c32
          figure.mb-3
            img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 100px').m-auto
          .row
            .col-12
              .p-3.bg-c33
                p.text-center.mb-0 Cumplimiento de estándares sanitarios para exportación de carne bovina.
    .row.mb-5
      .col-12(data-aos="fade-right")
        .p-4.bg-c34
          p.text-center.mb-0 La normativa vigente para estos procedimientos es regulada por el Instituto Colombiano Agropecuario (ICA).
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Procesos en BPG
    p.mb-4(data-aos="fade-right") Los procesos en la producción ganadera son una cadena de actividades organizadas para alcanzar una meta o propósito. Estos procesos:
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Asignan tareas al personal según su #[b profesión y experiencia].
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Permiten un #[b control efectivo] de las operaciones.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Organizan las diferentes secciones o departamentos de la empresa ganadera.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Mejoran las #[b actividades administrativas y productivas] de los predios.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Contribuyen a que la ganadería se establezca como una empresa #[b competitiva].
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Entes de control en BPG
    p.mb-4(data-aos="fade-right") Existen organismos encargados de verificar los estándares de producción y asegurar la calidad del producto final. A continuación, se presentan los principales entes de control en el sector ganadero:
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 400px').m-auto
      .col-10.col-lg-4.mb-4.mb-lg-0
        .row
          .col-12
            .p-4.bg-c35
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 230px').m-auto
          .col-12
            .p-4.bg-c36
              p.text-white.mb-0 ICA (Instituto Colombiano Agropecuario). Previene, vigila y controla riesgos sanitarios, biológicos y químicos en la producción animal y vegetal. 
      .col-10.col-lg-4
        .row
          .col-12
            .p-4.bg-c35
              figure
                img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 275px').m-auto
          .col-12
            .p-4.bg-c36
              p.text-white.mb-0 Organiza y representa el gremio ganadero a nivel nacional, promoviendo el desarrollo del sector.
    .row
      .col-12
        .p-4.bg-c26(data-aos="fade-right")
          p.text-center.mb-0 La supervisión por parte de estos entes permite garantizar la seguridad y calidad de la producción ganadera en Colombia, asegurando el cumplimiento de las normativas nacionales e internacionales.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Protocolos y registros: concepto, diseños y modelos
    p.mb-5(data-aos="fade-down") Los registros en Buenas Prácticas Ganaderas (BPG) son documentos esenciales que consignan cada actividad realizada en una empresa o establecimiento pecuario. Estos registros permiten asegurar la trazabilidad de los procesos y garantizar que cada etapa de la producción cumple con los estándares de inocuidad, sanidad, bienestar animal y sostenibilidad ambiental.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 ¿Para qué sirven los registros en BPG?
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Aseguran la trazabilidad del producto, permitiendo su seguimiento desde el origen hasta el consumidor final.
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c3.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Optimización de la gestión productiva, proporcionando información clave en alimentación, reproducción, sanidad y comercialización.
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c37.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Facilitan auditorías y certificaciones de entidades regulatorias como el ICA y organismos internacionales.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c6.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Cumplimiento de normativas sanitarias y ambientales, garantizando la calidad e inocuidad del producto.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c5.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 100px').m-auto
            .col-md
              p.mb-0 Prevención y control de enfermedades, documentando planes sanitarios, vacunas, tratamientos y medidas de bioseguridad.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Parámetros clave para llevar registros en BPG
    p.mb-4(data-aos="fade-right") Para garantizar una gestión eficiente de la documentación, se deben establecer ciertos parámetros:
    .row.mb-4
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-3.bg-c38
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[b Claridad y precisión:] la información debe ser ordenada, legible y sin ambigüedades.
        .row.mb-3
          .col-12
            .p-3.bg-c38
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[b Actualización constante:] los datos deben registrarse en tiempo real o en intervalos definidos.
        .row
          .col-12
            .p-3.bg-c38
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 #[b Disponibilidad y accesibilidad:] los registros deben organizarse en archivos físicos o digitales para su consulta en auditorías.
      .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 580px').m-auto
    p.mb-4(data-aos="fade-down") Los registros deben contener la siguiente información mínima:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          p.mb-0 #[b Tabla 1.] Elementos clave en la documentación de BPG
        .tabla-a.color-acento-contenido(data-aos="fade-left")
          table
            thead
              tr.bg-c14
                th(width="30%") Elemento
                th Descripción
            tbody
              tr
                td
                  p.mb-0 Logo de la empresa
                td
                  p.mb-0 Identificación visual del establecimiento.
              tr.bg-c15
                td
                  p.mb-0 Razón social
                td
                  p.mb-0 Nombre legal de la empresa ganadera.
              tr
                td
                  p.mb-0 Nombre del registro
                td
                  p.mb-0 Identificación del documento.
              tr.bg-c15
                td
                  p.mb-0 Realizado por
                td
                  p.mb-0 Nombre del responsable de diligenciarlo
              tr
                td
                  p.mb-0 Fecha de diligenciamiento
                td
                  p.mb-0 Día en que se completó el registro.
              tr.bg-c15
                td
                  p.mb-0 Aprobado por
                td
                  p.mb-0 Persona encargada de validar el registro.
              tr
                td
                  p.mb-0 Fecha de aprobación
                td
                  p.mb-0 Día en que se autorizó el documento.
              tr.bg-c15
                td
                  p.mb-0 Aspectos a registrar
                td
                  p.mb-0 Actividades y eventos consignados en el documento.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Manejo de los registros en BPG
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Un adecuado manejo de los registros permite que la empresa ganadera tenga soporte financiero y productivo, asegurando control sobre sus operaciones. Algunos registros clave incluyen:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro Sanitario de Predio Pecuario (RSPP) o Inscripción Sanitaria de Predio Pecuario (ISPP).
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de diagnósticos de enfermedades y mortalidades.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro o ficha individual por lotes de animales.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de ingreso de personas y vehículos.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de tratamientos veterinarios.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de temperatura de biológicos.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de uso de medicamentos por animal.
          li.d-flex
            i.fas.fa-leaf(style='color: #3D631E')
            |
            p.mb-0 Registro de rotación de animales en potreros y uso de plaguicidas y fertilizantes.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 580px').m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Ejemplo de Registro Sanitario en Ganadería de Carne
    p.mb-4(data-aos="fade-down") Un adecuado manejo de los registros permite que la empresa ganadera tenga soporte financiero y productivo, asegurando control sobre sus operaciones. Algunos registros clave incluyen:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      .p-4.p-lg-5(titulo="Registro sanitario de predio pecuario")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img8.png", alt="", style="width: 500px").m-auto
          .col-lg-6
            p #[b Registro sanitario de predio pecuario]
            p.mb-0 La información base para el registro sanitario de predio pecuario está trazada de los reportes de los ciclos de vacunación positivos (animales vacunados y los soportes de estas fechas de vacunación). Para los predios ubicados en la zona libre con vacunación, es necesario habilitar la expedición de las guías sanitarias de movilización interna. Los predios ubicados en la zona libre sin vacunación deben presentar la información de identificación de los animales, además de los datos sanitarios de zoonosis que se encuentran en el predio y su seguimiento en cada ciclo.
      .p-4.p-lg-5(titulo="Habilitar la expedición de las guías sanitarias de movilización interna")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img9.png", alt="", style="width: 500px").m-auto
          .col-lg-6
            p #[b Habilitar la expedición de las guías sanitarias de movilización interna]
            p Los propietarios ubicados en la zona libre con vacunación deben presentar la forma 3-101 reglamentada con los datos actualizados del predio y los animales.
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-arrow-circle-right
                |
                p.mb-0 Presentar los soportes y registros únicos de vacunación contra fiebre aftosa.
              li.d-flex
                i.fas.fa-arrow-circle-right
                |
                p.mb-0 Para la zona libre sin vacunación, se deben presentar los datos sanitarios del predio y un documento que garantice el seguimiento de los animales.
              li.d-flex
                i.fas.fa-arrow-circle-right
                |
                p.mb-0 Garantizar la correcta identificación de los bovinos y bufalinos en el predio.
              li.d-flex
                i.fas.fa-arrow-circle-right
                |
                p.mb-0 Todo propietario que requiera movilizar animales debe diligenciar la forma 3-101 con la información actualizada de los animales.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Ejemplo de registro productivo en ganadería de carne
    p.mb-4(data-aos="fade-down") Este registro documenta la aplicación de medicamentos, cumpliendo con las Buenas Prácticas Ganaderas y normativas sanitarias.
    .row.bg-c11.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Datos del animal]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Número de identificación: código o chip del animal.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Raza: especificación genética.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Sexo: macho o hembra.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Fecha de nacimiento: para determinar la edad del animal.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img10.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Detalles del medicamento aplicado]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Nombre del medicamento.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Número de registro del medicamento.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Presentación (tableta, inyectable, polvo, etc.).
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Dosis administrada.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Fecha de administración.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Vía de administración (oral, intramuscular, subcutánea, etc.).
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Frecuencia de aplicación.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Duración del tratamiento.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img11.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Motivo de la aplicación]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Diagnóstico o causa del tratamiento.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Condición del animal (sano, enfermo, en recuperación, etc.).
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img12.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Control de medicamentos y antibióticos]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Medicamentos prohibidos o restringidos, si aplica.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Uso de antibióticos, especificando el período de carencia para evitar residuos en la carne.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Período de carencia, tiempo necesario para que el medicamento no deje residuos en el producto final.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img13.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Registro del veterinario]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Nombre del veterinario responsable.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Firma y número de licencia.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img14.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Observaciones]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Reacciones adversas.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Observaciones de seguimiento.
                      li.d-flex
                        i.fas.fa-arrow-circle-right
                        |
                        p.mb-0 Comprobación de la eficacia del tratamiento.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img15.png", alt="", style="width: 500px").m-auto
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.mb-0 #[b Figura 1.] Formato de registro de aplicación de medicamentos en ganadería
    figure(data-aos="fade-left").mb-4
      img(src='@/assets/curso/tema2/img5.svg', alt='Formato de registro para la aplicación de medicamentos, vitaminas y vermífugos en ganadería, con espacios para datos de finca, animal, producto y administración.', style='width: 1200px').m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 60px').m-auto
            .col-md
              p.mb-0 Este registro documenta la aplicación de medicamentos, cumpliendo con las Buenas Prácticas Ganaderas y normativas sanitarias.

</template>

<script>
export default {
  name: 'Tema2',
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
