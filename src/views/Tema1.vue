<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de Implementación de BPG
    p Las Buenas Prácticas Ganaderas (BPG) son un conjunto de procedimientos y normativas que garantizan una producción pecuaria segura, sostenible y controlada. Para el 2025, estas prácticas han evolucionado con el uso de tecnología, digitalización de datos y regulaciones internacionales que refuerzan su aplicación en la producción primaria.
    .row.mb-4
      .col-12
        .p-3.bg-c4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 100px").m-auto
            .col-md
              p.mb-0 El objetivo de este sistema de aseguramiento es garantizar la inocuidad en la producción pecuaria, reduciendo riesgos biológicos, químicos y físicos en la gestión del ganado y la cadena productiva. Su correcta implementación:
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Protege la salud del consumidor.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Mejora la calidad de los productos.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Optimiza la rentabilidad de la empresa ganadera.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Facilita el acceso a mercados nacionales e internacionales.
    .row.bg-c8.mb-5
      .col-12
        .px-5
          .row.mb-4.ms-0
            .col-auto.bg-c7(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Elementos clave en la implementación del BPG
          .row.justify-content-center.mb-4
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.h-100.bg-c9.shadow
                figure.mb-3
                  img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-3 #[b Trazabilidad digital]
                p.text-center.mb-0 Permite un mejor control sanitario y productivo.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.h-100.bg-c9.shadow
                figure.mb-3
                  img(src='@/assets/curso/tema1/img5.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-3 #[b Producción regenerativa]
                p.text-center.mb-0 Minimiza el impacto ambiental.
            .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
              .p-4.h-100.bg-c9.shadow
                figure.mb-3
                  img(src='@/assets/curso/tema1/img6.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-3 #[b Automatización en la gestión]
                p.text-center.mb-0 Mejora la eficiencia en el manejo de datos.
            .col-10.col-md-6.col-lg-3
              .p-4.h-100.bg-c9.shadow
                figure.mb-3
                  img(src='@/assets/curso/tema1/img7.svg', alt='', style='width: 100px').m-auto
                p.text-center.mb-3 #[b Bienestar animal]
                p.text-center.mb-0 Estrategias alineadas con normativas globales.
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c10
                p.mb-0 Este enfoque actualizado permite a las empresas ganaderas cumplir con los estándares de calidad y proyectarse como un sector competitivo y sostenible.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Responsabilidades del producto ganadero
    p.mb-4 El productor debe garantizar la seguridad alimentaria, asegurando que los productos no representen riesgos parala salud en las distintas etapas de comercialización. Para ello, en Colombia existen entidades encargadas de la regulación y supervisión de las BPG:
    .row.bg-c11
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-left")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b ICA (Instituto Colombiano Agropecuario)]
                    p.mb-0 Regula y supervisa la sanidad agropecuaria. Pertenece al Sistema Nacional de Ciencia y Tecnología y está adscrita al Ministerio de Agricultura y Desarrollo Rural.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img3.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b INVIMA (Instituto Nacional de Vigilancia De Medicamentos y Alimentos)]
                    p.mb-0 Vigila y controla el cumplimiento de normas sanitarias en alimentos, medicamentos y dispositivos médicos. Protege la salud individual y colectiva.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img4.png", alt="", style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Entidades territoriales]
                    p.mb-0 Comprenden departamentos, distritos, municipios y territorios indígenas, con funciones en regulación y control del sector pecuario.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema1/img5.png", alt="", style="width: 500px").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Objetivos del plan de BPG
    .row.bg-c12
      .col-12
        .px-5
          p.mb-4 El propósito del plan de BPG es garantizar que los predios interesados cumplan la normativa, promoviendo la competitividad en el mercado. Para ello, se establecen los siguientes objetivos:
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img8.png', alt='', style='width: 350px').m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF.mb-3(columnas="col-md-6")
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Trazar programa]
                  p.text-center.mb-0 Implementar estrategias sanitarias y de inocuidad.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Organizar registros]
                  p.text-center.mb-0 Mantener documentación administrativa actualizada.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Optimizar alimentación]
                  p.text-center.mb-0 Aplicar buenas prácticas en la nutrición animal.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Control sanitario]
                  p.text-center.mb-0 Cumplir con requisitos sanitarios en la propiedad.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Registrar vehículos]
                  p.text-center.mb-0 Llevar un control del transporte ganadero.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Supervisar insumos]
                  p.text-center.mb-0 Inspeccionar medicamentos y productos utilizados.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Ejecutar saneamiento]
                  p.text-center.mb-0 Implementar programas de higiene en las instalaciones.
                .tarjeta.bg-c13.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c14
                        p.text-center.mb-0 #[b Almacenar insumo]
                  p.text-center.mb-0 Garantizar el cumplimiento de normativas de almacenamiento.
          p La participación de entidades como el ICA y el INVIMA es clave para supervisar la implementación de estas prácticas a lo largo de la cadena productiva.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Cronograma de Implementación
    p.mb-4 Los cronogramas son una herramienta esencial para la planificación y ejecución de las actividades en la empresa ganadera. Su correcta implementación permite:
    .row.mb-4
      .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img9.png', alt='', style='width: 300px').m-auto
      .col-lg.bg-c15
        .row.h-100.align-items-center
          .col-12
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Optimizar tiempo y recursos, reduciendo costos operativos.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Coordinar eficientemente alimentación, sanidad, reproducción y comercialización.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Garantizar trazabilidad en el proceso productivo.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Reducir errores y mejorar la toma de decisiones basada en datos.
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Con el avance de la digitalización, los cronogramas han evolucionado mediante plataformas automatizadas de gestión y aplicaciones de monitoreo en tiempo real. Estas herramientas permiten un seguimiento preciso de las actividades, considerando las condiciones climáticas y las exigencias del mercado.
            .row.align-items-center
              .col-auto.d-none.d-md-block
                figure
                  img(src='@/assets/curso/tema1/img16.svg', alt='', style='width: 75px').m-auto
              .col
                p.mb-0 La responsabilidad de elaborar y divulgar el cronograma recae en el propietario o administrador de la empresa, asegurando que todo el  equipo de trabajo lo conozca y cumpla con las actividades programadas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img10.png', alt='', style='width: 500px').m-auto
        hr.bg-c16
    p.mb-4 Este video presenta la importancia de un cronograma en la implementación de buenas prácticas ganaderas. A lo largo del contenido, se explican sus beneficios, los pasos para su elaboración y su papel en la certificación de ganaderías.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=vGNWclBzJhXFu9s1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Metodologías de desarrollo y programación
    p.mb-5 En la implementación de Buenas Prácticas Ganaderas (BPG), es fundamental contar con metodologías que permitan evaluar y controlar los procesos. Una de las herramientas más utilizadas en auditorías de calidad es la #[b lista de chequeo].
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Lista de chequeo
    p.mb-4 La lista de chequeo es un formato impreso o digital que se diligencia como medio de información para verificar el cumplimiento de ciertos puntos o situaciones de control. Su función principal es identificar fallos en los procedimientos y es el primer paso en una auditoría, facilitando su análisis y la búsqueda de soluciones. Para elaborar una lista de chequeo, es necesario establecer ciertos parámetros y formular preguntas orientadoras que permitan evaluar cada aspecto de la auditoría. Algunas preguntas clave incluyen:
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 1
            |
            p.mb-0 ¿Se están cumpliendo los protocolos establecidos en cada etapa del proceso?
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 2
            |
            p.mb-0 ¿Existen registros adecuados de las actividades realizadas?
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 3
            |
            p.mb-0 ¿Los insumos utilizados cumplen con las normativas sanitarias?
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 4
            |
            p.mb-0 ¿Se han identificado riesgos en el proceso productivo?
          li.d-flex
            .lista-ol--cuadro__vineta
              span.txt-c1 5
            |
            p.mb-0 ¿Las medidas correctivas se han implementado y documentado adecuadamente?
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img11.png', alt='', style='width: 500px').m-auto
    .row.mb-5
      .col-12
        .p-3.bg-c4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 100px").m-auto
            .col-md
              p.mb-0 El uso de listas de chequeo facilita el control y monitoreo de las #[b Buenas Prácticas Ganaderas], garantizando que los procedimientos cumplan con los estándares de calidad y seguridad requeridos.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img12.png', alt='', style='width: 500px').m-auto
      .col-lg-7
        p #[b Lista de chequeo requisitos para la gestión sanitaria]
        p Se invita a revisar el documento Lista de chequeo requisitos para la gestión sanitaria, el cual contiene una guía estructurada para verificar el cumplimiento de normativas en la gestión sanitaria, bioseguridad y bienestar animal. Este material permite evaluar aspectos clave como sanidad animal, identificación, bioseguridad, uso de medicamentos, alimentación, saneamiento, bienestar animal y requisitos del personal.
        .row
          .col-auto
            a.anexo.mb-4.mb-lg-0.shadow(:href="obtenerLink('/downloads/Anexo1.docx')" target="_blank" type="application/pdf")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p #[b Anexo.] Lista de chequeo requisitos para la gestión sanitaria
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Parámetros en Buenas Prácticas Ganaderas (BPG)
    .row.mb-4
      .col-lg-auto.pe-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img13.png', alt='', style='width: 400px').m-auto
      .col-lg.bg-c17
        .row.h-100.align-items-center
          .col-12
            .p-4
              p.mb-0 Los #[b parámetros] permiten #[b clasificar, medir y determinar] las condiciones de un proceso en sus diferentes etapas. Funcionan como una herramienta de evaluación que ayuda a identificar variables representativas y proporciona un pronóstico sobre el estado del sistema analizado. A continuación, se detallan algunos aspectos clave relacionados con los parámetros en las Buenas Prácticas Ganaderas.
    .row.mb-4
      .col-lg-6.bg-c18
        .p-4.p-lg-5
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img17.svg', alt='', style='width: 70px').m-auto
            .col
              p.fs-4.mb-0 #[b Diagnóstico de áreas de trabajo]
          p.mb-0 Para identificar los parámetros dentro de un proceso, se realiza un #[b diagnóstico del área de trabajo], determinando los puntos con mayor concentración de actividades. Este análisis permite enfocar los esfuerzos en las áreas críticas del sistema productivo.
      .col-lg-6.bg-c19
        .p-4.p-lg-5
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img17.svg', alt='', style='width: 70px').m-auto
            .col
              p.fs-4.mb-0 #[b Responsables del proceso]
          p.mb-0 En la implementación de las Buenas Prácticas Ganaderas, diferentes actores intervienen en el seguimiento y control de los parámetros. Cada uno cumple funciones específicas que garantizan el cumplimiento de los estándares de calidad y seguridad.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.png', alt='', style='width: 450px').m-auto
        .row
          .col-12
            .p-4.bg-c20
              p.text-center #[b Operarios]
              p.text-center.mb-0 Ejecutan y monitorean las actividades dentro del proceso ganadero.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img15.png', alt='', style='width: 450px').m-auto
        .row
          .col-12
            .p-4.bg-c20
              p.text-center #[b Profesionales a cargo]
              p.text-center.mb-0 Asignan funciones y supervisan el cumplimiento de los parámetros establecidos.
      .col-10.col-md-6.col-lg-4
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='', style='width: 450px').m-auto
        .row
          .col-12
            .p-4.bg-c20
              p.text-center #[b Administradores de la finca o predio]
              p.text-center.mb-0 Realizan la revisión interna para garantizar el cumplimiento de las BPG.
    .row.mb-4
      .col-auto
        .py-2.px-3.bg-c17
          p.mb-0 #[b Verificación por entidades competentes]
    p.mb-4 Después de la revisión interna, las certificaciones de BPG son verificadas por entidades regulatorias como el ICA. Una vez aprobadas, los productos pueden ser comercializados y distribuidos al consumidor final.
    .row.mb-5
      .col-lg-6.bg-c21.mb-4.mb-lg-0
        .row.h-100.align-items-center
          .col-12
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Instalaciones y bienestar.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Alimentación.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Sanidad y bioseguridad.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Medicamentos veterinarios.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Saneamiento básico.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Transporte.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Registro y documentación.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 MIP.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Almacenamiento de insumos.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Trazabilidad.
      .col-lg-6.ps-lg-0
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='', style='width: 620px').m-auto
    .row.mb-4
      .col-auto
        .py-2.px-3.bg-c17
          p.mb-0 #[b Análisis de parámetros]
    p.mb-4 Una vez identificados los puntos críticos, se realiza un #[b análisis detallado] de los parámetros generados en cada área. Esto permite:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c22.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img18.svg', alt='', style='width: 100px').m-auto
          p.text-center.mb-0 Clasificar y medir las condiciones del proceso.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c22.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img19.svg', alt='', style='width: 100px').m-auto
          p.text-center.mb-0 Mejorar el control sobre las funciones  ejecutadas.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c22.h-100
          figure.mb-3
            img(src='@/assets/curso/tema1/img20.svg', alt='', style='width: 100px').m-auto
          p.text-center.mb-0 Identificar oportunidades de optimización en la producción ganadera.
    .row.mb-4
      .col-auto
        .py-2.px-3.bg-c17
          p.mb-0 #[b Evaluación de variables en la ganadería de carne]
    .row.mb-5
      .col-lg-8.order-2.order-lg-1
        p Las variables para evaluar se determinan según el área de proceso. Cada parámetro se gestiona de manera independiente, pero con un objetivo en común: #[b garantizar la inocuidad y calidad del producto final para los consumidores].
        .row
          .col-12
            .p-4.bg-c23
              .row.align-items-center
                .col-md-auto.mb-3.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img21.svg', alt='', style='width: 100px').m-auto
                .col-md
                  p.mb-0 Un control adecuado de los parámetros permite optimizar la producción, reducir riesgos y cumplir con los estándares de calidad exigidos en el sector ganadero.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img18.png', alt='', style='width: 350px').m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Metodologías en Buenas Prácticas Ganaderas (BPG)
    p.mb-4 Las metodologías clave utilizadas en las Buenas Prácticas Ganaderas (BPG) son fundamentales para organizar y optimizar la producción ganadera. El siguiente video explica cómo se aplican estas metodologías a lo largo del proceso productivo, destacando las fases esenciales que garantizan una gestión eficiente y alineada con la normativa vigente.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=vGNWclBzJhXFu9s1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Estrategias de evaluación de la implementación de BPG
    p.mb-4 La estrategia de evaluación es una herramienta clave para realizar un monitoreo continuo del proceso productivo. Para que sea efectiva, debe contar con:
    .row.bg-c24.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-4
            .col-lg-10
              .row
                .col-lg-6.bg-c25.mb-4.mb-lg-0
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ol.lista-ol--cuadro.lista-ol.mb-0
                          li.d-flex
                            .lista-ol--cuadro__vineta
                              span.txt-c1 1
                            |
                            p.mb-0 Un recurso humano capacitado y comprometido.
                          li.d-flex
                            .lista-ol--cuadro__vineta
                              span.txt-c1 2
                            |
                            p.mb-0 Disponibilidad de recursos económicos adecuados.
                          li.d-flex
                            .lista-ol--cuadro__vineta
                              span.txt-c1 3
                            |
                            p.mb-0 Estrategias claras y bien definidas.
                          li.d-flex
                            .lista-ol--cuadro__vineta
                              span.txt-c1 4
                            |
                            p.mb-0 Cobertura suficiente para evaluar todas las acciones implementadas.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img20.png', alt='', style='width: 440px').m-auto
          .row.mb-4
            .col-12
              .p-4.bg-c26
                p.mb-0 El propósito principal de esta estrategia es garantizar el cumplimiento de los indicadores exigidos por los entes de control, alcanzando las metas propuestas que benefician tanto a los productores como a los consumidores. Esto contribuye a ofrecer productos de calidad en #[b óptimas condiciones sanitarias y comerciales].
          .row.justify-content-center.align-items-center
            .col-lg-7
              p #[b Criterios de evaluación]
              p Se invita a leer el documento Criterios de la evaluación, el cual detalla los aspectos fundamentales para la aplicación de estrategias de evaluación en la implementación de las Buenas Prácticas Ganaderas (BPG). En este material, se presentan tablas con puntos de control, criterios de cumplimiento y referencias normativas en áreas clave como sanidad animal, identificación y bioseguridad.
              .row
                .col-auto
                  a.anexo.mb-4.mb-lg-0.shadow(:href="obtenerLink('/downloads/Anexo2.pdf')" target="_blank" type="application/pdf")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p #[b Anexo.] Criterios de evaluación.
            .col-lg-3
              figure
                img(src='@/assets/curso/tema1/img21.png', alt='', style='width: 300px').m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Documentación y metas BPG
    .row.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='', style='width: 490px').m-auto
      .col-lg-7
        p La documentación es el proceso de #[b recolección de datos e identificación de información verídica] sobre un tema, con el objetivo de generar nuevo conocimiento. Su principal función es:
        .row
          .col-12
            .p-4.bg-c23
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Garantizar la conservación de datos.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Facilitar el intercambio de información con el equipo de trabajo.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Crear un documento sólido que permita identificar errores, prácticas y registros dentro de una empresa u organización.
    p.mb-5 En el año 2020, se expidió la #[b Resolución 068167], que establece los requisitos para obtener la #[b certificación en Buenas Prácticas Ganaderas (BPG)] en la producción de carne de bovinos y/o bufalinos.
    .row.mb-4.ms-0
      .col-auto.bg-c7(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Metas en Buenas Prácticas Ganaderas (BPG)
    p.mb-4 Las metas BPG son un conjunto de prácticas que conducen a resultados específicos en una organización. Estas se plantean en el corto, mediano y largo plazo, mediante acciones concretas que se desarrollan en paralelo con las metas propuestas.
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12
            .p-4.bg-c27
              p.text-white.fs-5.mb-0 #[b El cumplimiento oportuno de estas metas facilita:]
          .col-12
            .p-4.bg-c30
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 El aseguramiento de la inocuidad en la producción.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 El posicionamiento de la finca en el mercado nacional e internacional.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 La consolidación de un sistema productivo competitivo.
      .col-lg-6
        .row
          .col-12
            .p-4.bg-c28
              p.text-white.fs-5.mb-0 #[b Las principales metas de las BPG en la producción de carne son:]
          .col-12
            .p-4.bg-c29
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Recuperar el medio ambiente.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Implementar medidas para el bienestar animal.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Proteger al personal encargado, el medio ambiente y los animales.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Recuperar la ganadería de carne.
    .row
      .col-auto.pe-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img23.png', alt='', style='width: 550px')
      .col.bg-c31
        .row.h-100.align-items-center
          .col-12
            .p-4
              .row.mb-3
                .col-auto
                  .py-2.px-3.bg-white
                    p.mb-0 #[b Plan de Implementación de BPG]
              p.mb-0 Para profundizar en este tema, se recomienda consultar la siguiente normativa: Resolución No. 068167 (20/05/2020) “Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción de carne de bovinos y/o bufalinos.”
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
