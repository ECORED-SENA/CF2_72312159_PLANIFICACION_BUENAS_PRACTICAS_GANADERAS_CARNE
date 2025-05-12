<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Protocolos y registros: concepto, diseños y modelos
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
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Protocolos
    .row.bg-c39.mb-5
      .col-12
        .px-5
          p(data-aos="fade-right") Se trata de una descripción detallada y ordenada de los pasos que deben seguirse para realizar una actividad específica dentro de la unidad ganadera. Su propósito es asegurar que cada acción se ejecute de manera estandarizada, segura y organizada. Por ejemplo, un procedimiento puede especificar cómo desinfectar las instalaciones o cómo llevar a cabo el pesaje de los animales.
          p(data-aos="fade-right") Los protocolos de bioseguridad ganadera son fundamentales, ya que proporcionan una orientación clara y precisa sobre las actividades que deben realizarse en los procesos de crianza, producción, mantenimiento y exportación. Su correcta aplicación contribuye a garantizar la sanidad animal, la calidad del producto y el cumplimiento de los requisitos nacionales e internacionales.
          p.mb-5(data-aos="fade-right") La clave en bioseguridad ganadera es:
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
          p Los procedimientos dentro de las Buenas Prácticas Ganaderas (BPG) no se certifican de manera individual, pero son esenciales para obtener la certificación del sistema de producción ganadera. La certificación evalúa el cumplimiento de todas las prácticas en conjunto, incluyendo procedimientos documentados sobre manejo animal, sanidad, alimentación, bienestar y ambiente. En países como Colombia, por ejemplo, la certificación en BPG es otorgada por el Instituto Colombiano Agropecuario (ICA), que verifica el cumplimiento de los estándares establecidos. Tener procedimientos claros y aplicados correctamente facilita esta certificación, mejora la trazabilidad y abre oportunidades comerciales en mercados que exigen productos seguros y sostenibles.
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
                  p.text-center.mb-0 Cumple con el 100% de los criterios fundamentales, al menos el 80% de los criterios mayores y el 60% de los menores. Se expide el certificado de BPG.
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
