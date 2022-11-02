export default {
  global: {
    componenteFormativo:
      'Preparación y ejecución de los servicios bibliográficos digitales',
    descripcionCurso:
      'Este componente formativo aborda generalidades de los servicios bibliográficos digitales: conceptos, normas, tipos de información y usuarios, fuentes, recursos digitales, medios, canales y sistemas de información para que el aprendiz se apropie de su rol dentro del sistema de consulta y recursos de información. Se afianzará en herramientas de preparación y ejecución de los servicios digitales de información bibliográfica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normas en la biblioteca',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Legislación, reglamentación y políticas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Democratización de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Accesibilidad de la información personal y virtual',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clasificación de usuarios de biblioteca',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Unidades de Información',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Información, características y formatos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Servicios de información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistemas de Información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura y reglamentación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Medios de acceso a recursos digitales de información',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Recursos tecnológicos para la prestación del servicio bibliotecario',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de atención en medios tecnológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Necesidades de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Segmentación de usuarios y necesidades',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Servicio al cliente como estrategia de atención',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medios digitales de consulta',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Recuperación de información',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Transferencia de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Clasificación, características y criterios de selección de información',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Recursos y canales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Orientación al usuario',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Referenciación bibliográfica',
            hash: 't_4_4',
          },
        ],
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
      tema: 'Estrategias de atención en medios tecnológicos',
      referencia:
        'Digital youth network. (2009). YouMedia Chicago. [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/yRG2Bf-me6k',
    },
    {
      tema: 'Legislación, reglamentación y políticas',
      referencia: 'Ministerio de Cultura (2010). Ley de Bibliotecas Públicas.',
      tipo: 'Artículo',
      link:
        'https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/Documents/Ley%20de%20bibliotecas%20publicas%201379%20de%202010.pdf',
    },
    {
      tema: 'Legislación, reglamentación y políticas',
      referencia:
        'Ministerio de Cultura (2016). Manifiesto de la IFLA/Unesco sobre internet. Biblioteca Nacional.',
      tipo: 'Artículo',
      link:
        'https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/lineamientos-pol%C3%Adticas-y-directrices-sobre-las-bibliotecas-p%C3%Bablicas/manifiesto-de-internet-ifla',
    },
    {
      tema: 'Legislación, reglamentación y políticas',
      referencia:
        'FIC - Udelar. (2021). La investigación en la FIC. Acceso y democratización de la información.  [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aj9Sl59Lqdc',
    },
    {
      tema: 'Tipos de usuarios',
      referencia:
        'Udearroba. (2018). Tipos de estudios de usuarios. [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LgXQ0PmkW_o',
    },
    {
      tema: 'Formación de usuarios',
      referencia:
        'Biblioteca Nacional de España. (2014). Formación de usuarios. [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=d_NmCueSotM',
    },
    {
      tema: 'Estrategias de atención en medios tecnológicos',
      referencia:
        'Ministerio de Cultura. (s. f.). Servicios bibliotecarios que unen comunidades.',
      tipo: 'Enlace a la WEB',
      link:
        'https://siise.bibliotecanacional.gov.co/UPLOADSFILES/documentos/RNBP/mm_guias/Guia_36_Cartilla_servicios_bibliotecarios.pdf',
    },
    {
      tema: 'Orientación al usuario',
      referencia:
        'Udearroba. (2020). Estudios de usuarios de las unidades de información 1 Diálogo entre Edilma Naranjo y Hernando Lopera  [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zRNruxmu_qQ',
    },
    {
      tema: 'Estrategias de atención en medios tecnológicos',
      referencia:
        'Julián Marquina (s. f.). [Informe APEI] Bibliotecas ante el siglo XXI: nuevos medios y caminos. Julianmarquina.es.',
      tipo: 'Artículo',
      link:
        'https://www.julianmarquina.es/informe-apei-bibliotecas-ante-el-siglo-xxi-nuevos-medios-y-caminos/',
    },
    {
      tema: 'Transferencia de la información',
      referencia:
        'Euroinnova International Online Education. (s. f.). Cómo atender al usuario de las bibliotecas. Euroinnova.',
      tipo: 'Artículo',
      link:
        'https://www.euroinnova.co/blog/como-atender-al-usuario-de-las-bibliotecas',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'colección organizada de datos introducida en un ordenador de tal forma que facilita la recuperación de datos concretos con la ayuda de un sistema de recuperación de la información.',
    },
    {
      termino: 'Biblioteca virtual',
      significado:
        'incorpora los avances de la realidad virtual y sus equipos deberán incorporar tecnología de punta para administrar estas colecciones y colocarlas al servicio de sus usuarios de manera presencial o remota.',
    },
    {
      termino: 'Biblioteca',
      significado:
        'institución que está a disposición de todos los miembros de la comunidad sin distinción de raza, nacionalidad, edad, sexo, religión, idioma, discapacidad, nivel de escolaridad, condición económica y laboral; allí se puede leer, buscar información, llevar libros a casa, participar en actividades intelectuales, recreación y ocio, talleres de lectura y escritura, ver películas, interactuar, socializar y dialogar.',
    },
    {
      termino: 'Catalogación',
      significado:
        'proceso de análisis documental basado en los estándares respectivos en donde la biblioteca extrae la información clave del documento para la alimentación del sistema de búsqueda y localización.',
    },
    {
      termino: 'Clasificación',
      significado:
        'proceso de asignación del código único para organización de colecciones, basado en el sistema de clasificación de la biblioteca.',
    },
    {
      termino: 'Consulta en sala',
      significado:
        'materiales de lectura en distintos soportes (impresos, audiovisuales y en línea) para ser consultados libremente por los usuarios.',
    },
    {
      termino: 'Extensión bibliotecaria',
      significado:
        'la extensión bibliotecaria más que un servicio es una estrategia para extender los servicios que presta la biblioteca a aquellas poblaciones que por diversas razones (económicas, sociales, geográficas, entre otras) no pueden asistir a la biblioteca pública.',
    },
    {
      termino: 'Préstamo',
      significado:
        'materiales de la biblioteca que se utilizan fuera de esta, este es por excelencia el servicio que distingue la biblioteca pública.',
    },
    {
      termino: 'Referencia bibliográfica',
      significado:
        'conjunto de datos que sirven para identificar y describir un documento u otro tipo de obra intelectual.',
    },
    {
      termino: 'Referencia',
      significado:
        'atender y orientar a los usuarios en sus necesidades de información. Estas pueden relacionarse con el funcionamiento de la biblioteca, sus servicios y recursos o temas de investigación específicos.',
    },
    {
      termino: 'Registro bibliográfico',
      significado:
        'resultado escrito de la descripción de un documento. Se denomina también asiento bibliográfico y ficha, aunque estos términos se suelen usar para referirse a los catálogos manuales.',
    },
    {
      termino: 'Servicios en línea',
      significado: 'servicios prestados a través de redes tecnológicas.',
    },
    {
      termino: 'Usuario',
      significado:
        'persona que necesita información para el desarrollo de sus actividades profesionales, de estudio, ocio, etc., y recurre a la biblioteca para localizar dicha información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República. (2010). Ley 1379 de 2010. Por medio de la cual se organiza la Red Nacional de Bibliotecas Públicas y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38695#:~:text=Objeto%20de%20la%20ley%20y,su%20desarrollo%20integral%20y%20sostenible',
    },
    {
      referencia:
        'Euroinnova. (2022). Cómo atender al usuario de las bibliotecas. Euroinnova.',
      link:
        'https://www.euroinnova.co/blog/como-atender-al-usuario-de-las-bibliotecas',
    },
    {
      referencia:
        'IFLA/Unesco. (2001). Directrices IFLA/Unesco para el desarrollo del servicio de bibliotecas públicas. IFLA.',
    },
    {
      referencia:
        'Laudon, K., & Laudon, J. (2002). Sistemas de información gerencial: organización y tecnología de la empresa conectada en red. Pearson education.',
    },
    {
      referencia:
        'Monfasani, R. E. & Curzel, M. F. (2006). Usuarios de la información: formación y desafíos. Alfagrama.',
    },
    {
      referencia:
        'Moreiro, J. A. (1998). Introducción al estudio de la información y la documentación. Universidad de Antioquia.',
    },
    {
      referencia:
        'Pérez, P., M., y Herrera, M, J. L. (2006). Teoría y nuevos escenarios de la biblioteconomía, Alfagrama.',
    },
    {
      referencia: 'Unesco. (s. f.). ¿Qué es el patrimonio documental? Unesco.',
    },
    {
      referencia:
        'Valery, F., & Brush, C. (1988). The needs for information and some aspects of information retrieval systems constructions. Journal of the American Society for Information Science, 39,(2), 86-89.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Bleidy Joaquín Ardila Pinzón',
        cargo: 'Experto Temático',
        centro:
          'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejia Lopez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
