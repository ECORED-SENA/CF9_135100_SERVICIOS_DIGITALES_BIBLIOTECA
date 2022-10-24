<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Información, características y formatos
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .BG07.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img01.png")
            .col-lg-8
              p Las bibliotecas pueden ofrecer información eficiente y oportuna de acuerdo con las necesidades de los usuarios, mediante estrategias y políticas de acceso a la información que promuevan cumplir con las expectativas institucionales y de satisfacción por consulta.
              p Es así como, dentro del proceso de prestación de servicios bibliotecarios y de información, se deben establecer los formatos, según características, en que la información será almacenada, protegida, distribuida, ofertada y cuidada.
          .tarjeta.tarjeta--blanca.p-4(data-aos="flip-up")
            .row.align-items-center
              .col-lg-1.col-2
                img(src="@/assets/curso/tema1/img15.png")
              .col
                .h4 <span style="color:#785549">¡Atención!</span>
                p.mb-0 En la oferta de información, el trato con el público hace que las bibliotecas tengan que pensar nuevas formas de hacer que las personas se sientan atraídas por las bibliotecas y sus actualizadas maneras de operar y no, exclusivamente, por los servicios comunes clásicos bibliotecarios.

    separador
    .BGIMG03.px-md-5.px-4
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Servicios de información
      
      p Los servicios de información ofrecidos deben incluir consultas, servicios de referencia, investigación física y virtual, préstamo de material, acceso presencial y remoto a las colecciones de bases de datos, salones de estudio y de consulta, acceso a equipos de cómputo y préstamos interbibliotecarios.
      p Para comprender más y mejor las generalidades de los servicios de información, se invita a analizar el contenido del video que se muestra enseguida y a registrar lo más importante en la libreta personal de apuntes.
    
      figure.mb-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      P El siguiente esquema muestra las generalidades del modelo funcional de los servicios básicos de una biblioteca pública que se debe analizar con atención:
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-9
          img(src="@/assets/curso/tema2/img02.svg")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Sistemas de Información
    
    p La producción y el incremento potencial del conocimiento ha elevado, notoriamente, la posibilidad de asegurar y consolidar la información y documentarla en textos y material físico o digital para su disposición; promoviendo la creación y el diseño de espacios para su conservación, custodia y consulta, conocidos como bibliotecas o unidades de información.

    .row.justify-content-center
      .col-lg-10.BGR01.p-4.mb-4(data-aos="flip-up")
        .row.justify-content-center
          .col-lg-3.col-6.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img03.png")
          .col-lg-7
            p Las funciones básicas de una biblioteca, según la Unesco, son dos: facilitar información y generar conocimiento. 
            p En lo relacionado con los sistemas de información, se deben tener presentes algunas generalidades, como las que a continuación se enuncian.
      .col-lg-10(data-aos="fade-right")
        SlyderF.mb-5(columnas="col-lg-6")
          .BGIMG01.p-4
            .row.justify-content-center.mb-5
              .col-4
                img(src="@/assets/curso/tema2/img04.png")
            .h5.mt-5 <span style="color:#FFC98C">TIC y desarrollo personal</span>
            p.text-white.mb-0 La información y el desarrollo personal solo pueden realizarse, hoy en día, mediante las posibilidades que ofrecen las tecnologías de la información.
          .BGIMG01.p-4
            .row.justify-content-center.mb-5
              .col-4
                img(src="@/assets/curso/tema2/img05.png")
            .h5 <span style="color:#FFC98C">Conocimiento universal</span>
            p.text-white.mb-0 En este sentido, la biblioteca se estructura como un sistema de información del conocimiento universal.
          .BGIMG01.p-4
            .row.justify-content-center.mb-5
              .col-4
                img(src="@/assets/curso/tema2/img06.png")
            .h5 <span style="color:#FFC98C">Retroalimentación</span>
            p.text-white.mb-0 Las bibliotecas planean, organizan y ejecutan sus acciones, personal y procedimientos de entrada, salida y retroalimentación.
          .BGIMG01.p-4
            .row.justify-content-center.mb-5
              .col-4
                img(src="@/assets/curso/tema2/img07.png")
            .h5 <span style="color:#FFC98C">Componentes principales</span>
            p.text-white.mb-0 Sus componentes se constituyen en dos conjuntos principales: las colecciones documentales y el usuario.
          .BGIMG01.p-4
            .row.justify-content-center.mb-5
              .col-4
                img(src="@/assets/curso/tema2/img08.png")
            .h5 <span style="color:#FFC98C">Acceso y disponibilidad</span>
            p.text-white.mb-0 La documentación y la información en bruto proviene del desarrollo intelectual y la labor del productor la que se convierte en el insumo principal de una cadena de gestión basada en las políticas y normas bibliotecarias, que la convierten en información con acceso y disponibilidad.

    p En principio, las bibliotecas, como parte de su estructura base y en relación con los servicios que pretende ofrecer, deben contar con, al menos:

    .tarjeta--container.row.justify-content-center
      .col-lg-5.col-md-10.BG01.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/tema2/img09.png')
        .h4 Sistema de clasificación
        p.mb-0 Es un sistema de clasificación internacional estructurado, robusto y de uso general que evite los procesos artesanales y de poca seguridad para codificar la temática a la que pertenece cada documento.
      .col-lg-5.col-md-10.BG06.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-10
            figure
              img(src='@/assets/curso/tema2/img10.png')
        .h4 Lenguajes temáticos
        p.mb-0 Para los procesos de palabras clave se debe contar con lenguajes temáticos normalizados y de desarrollo profundo en las áreas temáticas necesarias, como es el caso de los tesauros y las listas de encabezamientos de materias.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-11.BGRS08.p-4
        .row.align-items-center
          .col-lg-1.col-2
            img(src="@/assets/curso/tema1/img15.png")
          .col
            .h4 <span style="color:#785549">¡Importante!</span>
            p.mb-0 Con estos dos procedimientos la biblioteca crea la estructura base y fundamental bibliográfica, además de las bases de datos que pueden contener millones de registros, disponibles para su acceso y consulta. 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Estructura y reglamentación
    
    p Además del importante aporte a la educación, al buen uso del tiempo libre y a la investigación, las bibliotecas tienen una función importantísima, y no siempre bien reconocida sobre su labor de llevar y mantener a los ciudadanos en la disciplina investigativa y el conocimiento. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.BGR09.p-4
        .row.justify-content-center
          .col-lg-9.order-lg-1.order-2
            p El uso de internet y demás canales y medios tecnológicos para el acceso a la información, se han convertido culturalmente en la estrategia dinamizadora y de fidelización de la biblioteca con sus diferentes tipos de usuarios. 
            .row.align-items-center.BG01(data-aos="fade-right")
              .col-lg-1.col-2.px-0
                img(src="@/assets/curso/temas/img01.png")
              .col.p-4
                .h4 <span style="color:#785549">Nota</span>
                p.mb-0 En este sentido, la definición concreta de la estructura de servicios hace que la biblioteca, por sí sola, regule su nivel reputacional en razón a dichos servicios y la misma satisfacción de sus usuarios.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img11.png')

    p Como aspecto clave de la estructura y reglamentación de la biblioteca, conozca los componentes básicos de la misma:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img12.png')
      .col-lg-6
        ul.lista-ul--color
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Producción documental a nivel mundial - información en bruto.
        p.ms-5.mb-0 - Adquisición.
        p.ms-5.mb-0 - Catalogación.
        p.ms-5.mb-0 - Clasificación.
        p.ms-5.mb-0 - Acabado físico.
        p.ms-5 - Disposición.
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Información disponible.
            ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Documentación almacenada y controlada.
        p.ms-5.mb-0 - Servicios bibliotecarios.
        p.ms-5.mb-0 - Tecnología.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Medios de acceso a recursos digitales de información
    
    p Hoy en día, la biblioteca moderna desarrolla múltiples servicios que giran en torno a la lectura, el aprendizaje, el disfrute, el crecimiento personal, el acceso a las manifestaciones culturales, el comportamiento ético y responsable con el uso eficiente de la información, y la apropiación social de la tecnología, para la solución efectiva de las necesidades de los usuarios, entre otros.

    .row.justify-content-center.mb-4
      .col-lg-10.BG01.p-4(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img13.png')
          .col-lg-8
            p Si algo ha caracterizado a las bibliotecas, es su nivel de adaptación a los tiempos, a la sociedad y a la tecnología, pues las bibliotecas son pioneras en ubicar sus recursos informativos y tecnológicos al alcance de las personas.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Atención
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img14.png')
          .col-lg-8
            p.mb-0 Las bibliotecas son el puente de conexión entre los recursos de información con a las personas, en procura de fidelizar el acceso mismo a sus servicios, dejando la inquietud en cada usuario sobre la importancia de la información, la lectura y los libros.

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4
        p.text-center.mb-0 En relación con los medios de acceso a los recursos digitales de la información, es necesario tener en cuenta aspectos clave como los que se mencionan a continuación:
      .col-lg-10.BGIMG08.p-4(data-aos="zoom-in")
        LineaTiempoB.color-primario(:datos="datosLineaTiempoB")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4
        img(src='@/assets/curso/tema2/img21.png')
      .col-lg-9
        p En relación con lo hasta aquí desarrollado, ¿qué supone la tecnología para la biblioteca?
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Permite viralizar servicios aumentando el uso por parte de los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Aumento de la colaboración entre usuarios y entre bibliotecas.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Aprendizaje basado en uso de servicios y mayor utilización de estos por parte de los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Estimulación, motivación y nuevos desafíos para los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Aumento del sentido de pertenencia de los usuarios hacia la biblioteca.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Cambio de comportamiento en las dinámicas de los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Aumento de la productividad y autonomía de los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Mayor concentración de los usuarios en la resolución de problemas o actividades.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Atraer nuevos usuarios y tratar de fidelizar a los ya existentes.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Nueva vía de comunicación y retroalimentación con los usuarios.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            p.mb-1 Permite incluir logros de los usuarios sobre las colecciones en el catálogo y en los servicios digitales. 

    p Por otra parte, las bibliotecas son entidades formadoras de usuarios y están preparadas para ser entidades que crean nuevos contenidos para los usuarios o para la ciudadanía en general.  

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img03.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Afiance los conceptos y saberes sobre tecnologías de información en las bibliotecas, para ello, explore el video que aquí se propone:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=yRG2Bf-me6k" target="_blank")
                  span Ver video
                  i.fas.fa-file-video
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img02.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Afiance los conceptos y saberes sobre tecnologías de información en las bibliotecas, para ello, explore el enlace que aquí se propone:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.julianmarquina.es/informe-apei-bibliotecas-ante-el-siglo-xxi-nuevos-medios-y-caminos/" target="_blank")
                  span Enlace web
                  i.fas.fa-link

    separador
    .BGIMG03.px-md-5.px-4
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Recursos tecnológicos para la prestación del servicio bibliotecario
      
      p A partir de la revisión y análisis de los servicios que presta actualmente cada biblioteca, el autodiagnóstico, estudio de usuarios y la exploración de diversas herramientas tecnológicas puede apoyar procesos de diseño o mejoramiento de servicios bibliotecarios, respecto a los servicios que presta y a su relación con la comunidad.
      p A continuación, se expone, de manera sintética, el catálogo de servicios digitales en las bibliotecas.

      figure.mb-4(data-aos="zoom-in")
        img(src='@/assets/curso/tema2/img22.svg')
      
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img02.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Interiorice el concepto de “Recursos tecnológicos”, analizando la información contenida en el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.julianmarquina.es/informe-apei-bibliotecas-ante-el-siglo-xxi-nuevos-medios-y-caminos/" target="_blank")
                  span Enlace web
                  i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    datosLineaTiempoB: [
      {
        titulo: 'Era tecnológica',
        texto:
          'En el siglo XXI se instaura un momento y época tecnológica que hace a la sociedad moverse en medio de  una extensa y variada información transmitida y recibida por diferentes medios y canales.',
        icono: require('@/assets/curso/tema2/img15.png'),
      },
      {
        titulo: 'Innovación y adaptación',
        texto:
          'Las bibliotecas, sin duda, se tienen que reinventar y adaptar sin falta. Se deben inscribir en una carrera de fondo en la cual no es necesario ser los primeros, pero sí llevar un ritmo de competencia que les permita cumplir con los objetivos propios y las necesidades de investigación y conocimiento de sus usuarios potenciales.',
        icono: require('@/assets/curso/tema2/img16.png'),
      },
      {
        titulo: 'Información y toma de decisiones',
        texto:
          'Para ello hay que tratar de obtener la mayor información posible, tanto de usuarios como de usuarios potenciales para tomar decisiones.',
        icono: require('@/assets/curso/tema2/img17.png'),
      },
      {
        titulo: 'Almacenamiento y procesamiento amplios',
        texto:
          'En este sentido, la tecnología debe ser capaz de almacenar grandes cantidades de datos y cruzarlos entre sí para dar posibles soluciones a cualquier tipo de necesidad de información.',
        icono: require('@/assets/curso/tema2/img18.png'),
      },
      {
        titulo: 'Transferencia a las comunidades',
        texto:
          'No es necesario sacar la colección física fuera de las paredes de la biblioteca, se puede solo llevar los contenidos digitales de la biblioteca a cada rincón a través de aplicaciones, pues la mayoría de las personas suelen llevar un dispositivo móvil conectado a internet.',
        icono: require('@/assets/curso/tema2/img19.png'),
      },
      {
        titulo: 'Interconectividad e interacción',
        texto:
          'Todos los individuos o grupos poblacionales pueden, cada vez más, estar en contacto con las bibliotecas, de una u otra manera, razón por la cual ellas deberán coordinar y establecer estrategias tecnológicas para garantizar estabilidad en acceso, consulta, disponibilidad de la información.',
        icono: require('@/assets/curso/tema2/img20.png'),
      },
    ],
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
