export default {
  global: {
    Name: 'Principios de buenas prácticas en ganadería bovina de carne',
    Description:
      'El componente formativo aborda la implementación de Buenas Prácticas Ganaderas (BPG) en la producción de carne bovina, destacando aspectos como bienestar animal, bioseguridad, trazabilidad y sostenibilidad. Describe metodologías, cronogramas, protocolos y registros necesarios para garantizar la calidad e inocuidad del producto. Además, presenta normativas vigentes, gestión documental y estrategias de evaluación para la certificación ganadera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de Implementación de BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cronogramas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodologías de desarrollo y programación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Concepto, procedimiento y metodología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protocolos y registros: concepto, diseños y modelos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión documental: concepto y técnicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de Implementación',
      referencia:
        'Producción agropecuaria y agroindustrial. (2021). <i>Buenas prácticas ganaderas</i>, ICA; 2020 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F1SXng6fIr4&t=227s',
    },
    {
      tema: 'Plan de implementación',
      referencia:
        'La Finca de Hoy. (2019). <i>Impacto de las BPG en productividad y mercados</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=leSpGVgUde0',
    },
    {
      tema: 'Documentación y metas BPG',
      referencia:
        'TvAgro. (2018). <i>Requisitos para Certificar una Finca en Buenas Prácticas Ganaderas - TvAgro por Juan Gonzalo Ángel</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/z_g_1Fn4exk',
    },
    {
      tema: 'Procedimientos, procesos y registros de la implementación BPG',
      referencia:
        'Sánchez, L. (2020). <i>BPG en Producción de Carne Bovina</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CDffdvhbR_c',
    },
    {
      tema: 'Gestión documental: concepto y técnicas',
      referencia:
        'Didáctica Empresarial. (2020). <i>Sistema de gestión documental</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uxLwxvnG2NY',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental de un animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de prácticas sanitarias y preventivas para evitar la entrada y salida de agentes infecciosos en la producción ganadera.',
    },
    {
      termino: 'Buenas prácticas ganaderas (BPG)',
      significado:
        'conjunto de normas y procedimientos que garantizan la sanidad, inocuidad y sostenibilidad en la producción ganadera.',
    },
    {
      termino: 'Certificación',
      significado:
        'proceso que lleva a cabo una entidad para certificar una empresa, producto, proceso, servicio o persona con alguna facultad, normas o especificaciones técnicas.',
    },
    {
      termino: 'Cronograma',
      significado:
        'lista de actividades y procedimientos que se ordenan con un propósito y con un horizonte destinado.',
    },
    {
      termino: 'Enfermedad de control oficial',
      significado:
        'enfermedades declaradas como obligatorias por el ICA, debido a su importancia zoonótica y de importancia nacional e internacional.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los alimentos no causan daño alguno al consumidor en todas sus etapas de producción.',
    },
    {
      termino: 'Plan',
      significado:
        'lista de pasos con identificaciones de tiempo y recursos en pro de un objetivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corrientes Portal Turístico Provincial. (s.f.). <i>Ganadería de Corrientes. Corrientes</i>. ',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos. (s.f.). <i>Buenas prácticas ganaderas</i>. FEDEGAN. ',
      link: 'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2007). <i>Resolución 002341 de 2007. Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano</i>.',
      link: '',
    },
    {
      referencia:
        'nstituto Colombiano Agropecuario. (s.f.). <i>Reglamento sobre las condiciones sanitarias y de inocuidad en la producción de ganado bovino y porcino</i>. ',
      link:
        'https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx',
    },
    {
      referencia:
        'OnCuba. (2018, 8 de noviembre). <i>Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda</i>. OnCuba Next. ',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud & Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2003). <i>Garantía de la inocuidad y calidad de los alimentos: Directrices para el fortalecimiento de los sistemas nacionales del control de los alimentos (76)</i>. Roma. ',
      link: '',
    },
    {
      referencia:
        'Recuerda, M. A. (2006). <i>Seguridad alimentaria y nuevos alimentos</i>. Editorial Thomson-Aranzadi. ',
      link: '',
    },
    {
      referencia:
        'Suárez, Y., Cepero, O., et al. (2007). <i>Metodología de análisis de riesgos químicos-tóxicos para la sanidad animal</i>. Revista Científica y Técnica de la Organización Mundial de Sanidad Animal, 26(3), 565-576. ',
      link: '',
    },
    {
      referencia:
        'Tafur, M. (2009). <i>La inocuidad de los alimentos y el comercio internacional</i>. Revista Colombiana de Ciencias Pecuarias, 22(3), 331-338.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable línea de producción',
          centro: 'Dirección general',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernandez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
