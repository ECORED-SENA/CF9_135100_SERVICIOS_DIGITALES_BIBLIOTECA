<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normas en la biblioteca
    
    p Cada biblioteca, independientemente de los servicios debidamente establecidos y consolidados para sus usuarios, debe estructurar y garantizar la aplicación de unas normas fundamentales, relacionadas con el uso eficiente de la documentación e información allí ofrecida, el uso de sus salas y espacios de circulación y préstamo, equipos y herramientas en total relación con los métodos y recursos de consulta dispuestos para ello. 

    .row.justify-content-center.mb-4
      .col-lg-10.BG01(data-aos="flip-up")
        .row.align-items-center
          .col-lg-1.col-2.order-1.px-0
            img(src="@/assets/curso/temas/img01.png")
          .col-lg-8.order-lg-2.order-3.p-4
            p La consulta, sin duda, es la palabra y acción misional de toda biblioteca; es una actividad que depende directamente del tipo de usuario, los recursos y las normas que la biblioteca dispone, garantizado el acceso a la información en el menor tiempo posible.
          .col-lg-3.col-6.order-lg-3.order-2.mb-lg-0.mb-4.p-3
            img(src="@/assets/curso/tema1/img01.png")
    
    p.text-center.mb-5 Entre las normas más comunes y fundamentales en las bibliotecas, en relación con las obligaciones de los usuarios, se pueden mencionar las siguientes:

    SlyderF.mb-5(columnas="col-lg-4 col-md-6")
      .BGIMG01.p-4
        .row.justify-content-center.mb-5
          .col-4
            img(src="@/assets/curso/tema1/img02.png")
        .h5 <span style="color:#FFC98C">Cuidar</span>
        p.text-white.mb-0 Cuidar y hacer buen uso de las instalaciones físicas, mobiliario, equipos y recursos.
      .BGIMG01.p-4
        .row.justify-content-center.mb-5
          .col-4
            img(src="@/assets/curso/tema1/img03.png")
        .h5 <span style="color:#FFC98C">Responsabilidad</span>
        p.text-white.mb-0 Ser responsable del material documental en el formato que le sea proporcionado para consulta bajo cualquier forma de préstamo y respetar las fechas que se establezcan para su devolución.
      .BGIMG01.p-4
        .row.justify-content-center.mb-5
          .col-4
            img(src="@/assets/curso/tema1/img04.png")
        .h5 <span style="color:#FFC98C">Preservar</span>
        p.text-white.mb-0 Contribuir a preservar los inmuebles, mobiliario, equipos y acervo de la biblioteca y sujetarse a los mecanismos de control, seguridad y vigilancia establecidos para tal efecto.
      .BGIMG01.p-4
        .row.justify-content-center.mb-5
          .col-4
            img(src="@/assets/curso/tema1/img05.png")
        .h5 <span style="color:#FFC98C">Respeto</span>
        p.text-white.mb-0 Guardar respeto y consideración a los demás usuarios y servidores de la biblioteca.
      .BGIMG01.p-4
        .row.justify-content-center.mb-5
          .col-4
            img(src="@/assets/curso/tema1/img06.png")
        .h5 <span style="color:#FFC98C">Reporte</span>
        p.text-white.mb-0 Reportar cualquier anomalía que se encuentre en el material documental (ausencia, daño intencional o involuntario) y/o en las instalaciones de la biblioteca.

    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img07.png")
      .col-lg-7(data-aos="fade-left")
        p En ese mismo sentido, existen para los usuarios algunas prohibiciones necesarias, tales como:
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Negarse a presentar sus pertenencias al personal de vigilancia y carné cuando sea requerido.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Sustraer y/o mutilar de la biblioteca cualquier tipo de material documental o del mobiliario.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Fumar, consumir cualquier tipo de alimentos y bebidas en todas las áreas de la biblioteca.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Realizar trabajos con pinturas, tijeras, cuchillas, bisturíes y/o cualquier material que pueda dañar los libros o mobiliario.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Hablar en voz alta o con teléfono celular en las áreas de acervo y en salas de lectura formal e informal.  
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Hacer uso de equipos electrónicos diferentes a los suministrados sin causa justificada. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Legislación, reglamentación y políticas.
    
    p Corresponde a la lista de normas, reglamentos y políticas expedidas por el estado colombiano y las instituciones respecto a los procesos de estructura, creación, administración, desarrollo de colecciones, disposición de la información y el fomento del libro y la lectura de las bibliotecas en Colombia. 
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-primario.img-inv.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img08.jpg')})`}"
          )(data-aos="fade-left")
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 La legislación de la biblioteca en Colombia, es el compendio de: Constitución política de Colombia, Ley 98 de 1993 sobre Democratización y fomento del libro, la Ley 397 de 1997 denominada Ley General de Cultura y la Ley 1379 de 2010 denominada Ley de Bibliotecas Públicas.
    
    p En relación con los principales elementos de la normativa y reglamentación para las bibliotecas en Colombia, reconozca y asimile los aspectos clave que se mencionan a continuación:

    .BGIMG02.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img09.png")
        .col-lg-7
          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .h4 Constitución Política de Colombia de 1991.
                p #[b Artículo 20]: establece la libertad de expresión y difusión de pensamiento como una condición esencial para la vida. La biblioteca es un espacio de constante difusión social del conocimiento, que le permite a las personas expresarse a partir del conocimiento.
                p.mb-0 #[b Artículo 27]: reflexiona sobre la libertad de enseñanza, aprendizaje, investigación y cátedra, lo que determina que las bibliotecas se deben relacionar con otros tipos de bibliotecas, como las bibliotecas públicas, escolares, universitarias…
              .row.justify-content-center
                .h4 Ley 44 de 1993: derecho de autor y depósito legal.
                p.mb-0 En el Art. 7° establece el procedimiento para cumplir con el depósito legal según reglamentación posterior del Decreto 460 de 1995, Art. 25, que incluye, además de la Biblioteca Nacional, a las bibliotecas departamentales como depositarias.
              .row.justify-content-center
                .h4 Ley 98 de 1993: Ley de Democratización y Fomento del Libro
                p.mb-0 Pretende la creación y desarrollo de espacios del libro y la lectura en el país (bibliotecas, eventos y actividades como ferias y fiestas del libro y la lectura en el territorio colombiano). Promueve la promoción y formación de personal idóneo para el sector del libro y el personal bibliotecario. Determina y exige el porcentaje mínimo de adquisición y dotación de material editado e impreso en el país que deben llegar a las dotaciones de las bibliotecas públicas del país. Promulga que las bibliotecas públicas del país son parte del desarrollo y equipamiento de las comunidades tanto rurales como urbanas y complementariamente, el Gobierno debe destinar presupuesto para el funcionamiento y dotación de estas.
              .row.justify-content-center
                .h4 Ley 397 de 1997: Ley General de Cultura
                p.mb-0 La cual crea el #[b Ministerio de Cultura], donde cada una de las bibliotecas pasa a ser parte de este Ministerio, estableciendo, a partir de allí, la red nacional de bibliotecas públicas. Los artículos 23 y 24 promueven el apoyo a las bibliotecas públicas y casas de la cultura, en relación con el apoyo financiero, creación y funcionamiento de la estampilla procultura en los municipios.
              .row.justify-content-center
                .h4 Ley 1185 de 2008: modifica y adiciona la Ley 397 de 1997
                p.mb-0 Aprueba la deducción tributaria a las empresas que se vinculen a proyectos de preservación de manifestaciones culturales y para propietarios de inmuebles declarados de interés cultural. Y crea el #[b Sistema Nacional de Patrimonio Cultural] y los consejos departamentales y distritales de patrimonio cultural.
              .row.justify-content-center
                .h4 Ley 1379 de 2010: Ley de Bibliotecas Públicas
                p Sienta las bases para el fortalecimiento y mantenimiento de la Red Nacional de Bibliotecas Públicas, determina los horarios de atención, las jornadas laborales de las bibliotecas y la proyección social de las personas. Esta Ley es un instrumento fundamental para canalizar recursos, establecimiento de alianzas, diseño de nuevos servicios y trabajo en red. 
                p.mb-0 Además, convierte a los servicios de la biblioteca en un #[b servicio público obligatorio y social] y regula los servicios, el funcionamiento y el perfil del personal.
              .row.justify-content-center
                .h4 El Manifiesto sobre Internet de la IFLA
                p.mb-0 Se fundamenta en el artículo 19 de la Declaración Universal de Derechos Humanos, y hace hincapié en que los usuarios de las bibliotecas tienen derecho a esperar el mismo grado de libertad de expresión y de libertad de acceso a la información en internet de la que disfrutan los materiales impresos. Se trata de un documento de actualización de los ideales fundamentales de la profesión bibliotecaria para la era de internet.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img02.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Conozca y explore a profundidad la Ley de Bibliotecas Públicas en el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/Documents/Ley%20de%20bibliotecas%20publicas%201379%20de%202010.pdf" target="_blank")
                  span Enlace web
                  i.fas.fa-link
      .col-lg-10(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img(src="@/assets/curso/temas/img02.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Amplíe su conocimiento sobre el Manifiesto de Internet IFLA, visitando el siguiente enlace para estudiarlo a profundidad:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/lineamientos-pol%C3%ADticas-y-directrices-sobre-las-bibliotecas-p%C3%BAblicas/manifiesto-de-internet-ifla" target="_blank")
                  span Enlace web
                  i.fas.fa-link

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Democratización de la información
    
    p El concepto de democratización de la información corresponde al proceso de avanzada entendido como el #[b acceso libre a cualquier tipo de información por cualquier persona o usuarios] a las bibliotecas. Las estrategias, desarrollos, innovaciones y demás servicios propuestos por las bibliotecas en relación con la variedad de información, eficiencia y oportunidad, fidelizarán los servicios bibliotecarios ofrecidos a un público cada vez más inquieto y difícil de sorprender. 

    .row.justify-content-center.mb-4
      .col-lg-10.BG01(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.png")
          .col-lg-7.p-4
            p La relación entre los medios, variedad de canales de acceso a la información, los usuarios y sus necesidades consolidará la estructura adecuada de servicios, a favor del nivel de satisfacción del cliente.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Importante
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img11.png")
        .col-lg-7
          p.mb-0 La biblioteca no debe discriminar por raza, edad, sexo, preferencia sexual, origen étnico, social o nacional ni por ideas políticas o religiosas. Se debe facilitar el acceso a la información en cualquier formato y a través de cualquier medio disponible. Es así como la era digital, sin duda, propone una de las estrategias más contundentes y robustas entre la información y los tipos de usuario.          
    
    .row.justify-content-center.mb-4
      .col-lg-10.p-4  
        p ¿Cómo se puede evitar que la democratización afecte los servicios de la biblioteca?
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Con el establecimiento de mecanismos de seguridad para controlar el acceso y manipulación de la información.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Con mecanismos de gobernabilidad de la información consolidada y canales de comunicación apropiados para asegurar que los usuarios consulten la información de primera mano, y con el contexto correcto.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Monitoreando en forma permanente los servicios de la biblioteca en búsqueda de estrategias y acciones para mejorar el resultado de estos. 

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img03.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Comprenda integralmente el concepto y propuesta de la democratización de la información y su impacto en lo cotidiano y las bibliotecas digitales mediante el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=aj9Sl59Lqdc" target="_blank")
                  span Ver video
                  i.fas.fa-file-video
                  
    separador
    .BGIMG03.px-md-5.px-4
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Accesibilidad de la información personal y virtual
      
      p Cada vez hay más personas que, a diario, deben administrar mayor cantidad de información, convirtiéndo esto en una dinámica implícita en su vida. Este gran aumento de información y de personas que necesitan utilizarla ha creado un mayor desarrollo tecnológico que, a su vez, exige y crea más información. 

      .row.justify-content-center.BG03.p-4.mb-4
        .col-lg-7.order-lg-1.order-2.px-0(data-aos="fade-right")
          p La información, sobre todo en forma digital, y las nuevas formas de tecnología de la información se han convertido en el punto de atención de la sociedad actual. Este nuevo contexto propone retos para las bibliotecas, como:
          ul.lista-ul--color.ms-4
            li
              <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
              | Adaptación de los centros del conocimiento o unidades de información a la era digital.
            li
              <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
              | Acceso remoto a salas de lectura virtual.
            li
              <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
              | Catálogos con gran contenido digital de libros.
            li
              <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
              | Información electrónica “a un clic”.
            li
              <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
              | Identificación y caracterización de los componentes y factores fundamentales dentro de la estructura requerida, entre otros .
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4.p-3(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img12.jpg")

      p Los principales elementos de la estructura de las bibliotecas digitales para cumplir con todas estas expectativas y retos, se visualizan en el siguiente esquema; se invita a analizarlo y tomar nota, de lo más destacado, en la libreta personal de apuntes.

      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Figura 1
        span Estructura de la biblioteca digital
      
      .row.justify-content-center.p-4.mb-4
        .col-lg-3.order-lg-1.order-2(data-aos="fade-right")
          .h4.text-center <span style="color:#FFF; background-color: #785549; padding: 3px">Misión principal</span>
          p Las unidades de información (las bibliotecas digitales) tienen como misión principal seleccionar la información más importante para su comunidad, adquirirla, organizarla para facilitar su uso, promover y ayudar a los usuarios.
        .col-lg-6.order-lg-2.order-1(data-aos="flip-up")
          img(src="@/assets/curso/tema1/img13.svg")
        .col-lg-3.order-3.mb-lg-0.mb-4(data-aos="fade-left")
          .h4.text-center <span style="color:#FFF; background-color: #785549; padding: 3px">¡Nota importante!</span>
          p La información ha estado siempre condicionada a la forma de acceso y a la tecnología a través de la cual se hace disponible.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Clasificación de usuarios de biblioteca
    
    p La demanda expresada y satisfecha conduce al uso de los servicios de la biblioteca donde, entonces, se deben reconocer y diferenciar al bibliotecario y al usuario, en relación con el uso de los servicios de la biblioteca.
    p La demanda de información y de servicios de información puede, de acuerdo con el uso, tipificarse de la siguiente manera:

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img14.svg')
      .BGR4.p-3(x="27%" y="25%" numero="1")
        .h5.mb-2 Demanda potencial individual
        p.mb-0 Se trata del nivel máximo de solicitud o uso de los elementos del servicio bibliotecario que tenga un usuario identificado o una mínima porción identificada del grupo total de usuarios.
      .BGR4.p-3(x="30%" y="50%" numero="2")
        .h5.mb-2 Demanda potencial grupal
        p.mb-0 Se trata de las posibilidades de conquista que, sobre determinada cantidad de usuarios de la biblioteca, tengan los elementos de la oferta y/o servicios prestados en ella.
      .BGR4.p-3(x="27%" y="75%" numero="3")
        .h5.mb-2 Demanda expresada
        p.mb-0 Se refiere a las expectativas claramente manifestadas por los usuarios sobre los servicios bibliotecarios y oferta de la biblioteca. Es una demanda fácil de identificar y que se percibe por diferentes mecanismos de comunicación entre usuarios y biblioteca.
      .BGR4.p-3(x="56%" y="18%" numero="4")
        .h5.mb-2 Demanda potencial total
        p.mb-0 Hace referencia a las posibilidades máximas de solicitud o requerimiento que los elementos de la oferta y/o servicios que se presten en la biblioteca por parte de la totalidad de los usuarios o una mayoría identificada de ellos.
      .BGR4.p-3(x="56%" y="82%" numero="5")
        .h5.mb-2 Demanda no expresada
        p.mb-0 Se trata de aquellos aspectos de necesidad o expectativa que tienen los usuarios sobre los servicios bibliotecarios, pero que no son identificados bajo ningún mecanismo ni expresados a la biblioteca.
      .BGR4.p-3(x="68.5%" y="38.5%" numero="6")
        .h5.mb-2 Demanda no satisfecha
        p.mb-0 Se refiere a la imposibilidad total o parcial de cumplir con las expectativas, exigencias o necesidades que, del servicio de la biblioteca, tengan los usuarios (bien sea de manera individual, grupal o total).
      .BGR4.p-3(x="68.5%" y="61.5%" numero="7")
        .h5.mb-2 Demanda satisfecha
        p.mb-0 Refiere al cumplimiento total de las expectativas, exigencia o necesidades que, del servicio bibliotecario, tengan los usuarios (individual, grupal o totalmente).

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BGRS01.p-4
        .row.align-items-center
          .col-lg-1.col-2
            img(src="@/assets/curso/tema1/img15.png")
          .col
            .h4 <span style="color:#785549">¡Atención!</span>
            p.mb-0 Entendida la demanda y su clasificación es importante realizar un estudio de usuarios para conocer e identificar la manera como estos hacen uso de los servicios de la biblioteca y, entonces, establecer si hay interacción efectiva entre biblioteca y usuarios y la forma en que la información es transmitida y cómo llega a ellos.

    p Entre los objetivos de un estudio de usuarios, los más comunes son:

    .row.justify-content-center.mb-4
      .col-lg-3.mb-lg-0.mb-4(data-aos="fade-right")
        .BGIMG04.p-4
          .h4 <span style="color:#785549">1.	Determinar</span>
          p.mb-0 Determinar el tipo de usuarios.
      .col-lg-3.mb-lg-0.mb-4(data-aos="flip-up")
        .BGIMG05.p-4
          .h4 <span style="color:#785549">2.	Detectar</span>
          p.mb-0 Detectar el nivel y tipos de necesidades de información de los usuarios.
      .col-lg-3.mb-lg-0.mb-4(data-aos="flip-up")
        .BGIMG06.p-4
          .h4 <span style="color:#785549">3.	Establecer</span>
          p.mb-0 Establecer prioridades respectos a las necesidades identificadas.
      .col-lg-3.mb-lg-0.mb-4(data-aos="fade-left")
        .BGIMG07.p-4
          .h4 <span style="color:#785549">4.	Conocer</span>
          p.mb-0 Conocer el nivel de satisfacción y contexto de la información.
      .col-lg-3.mb-lg-0.mb-4(data-aos="fade-right")
        .BG05.p-4
          .h4 <span style="color:#785549">5.	Establecer</span>
          p.mb-0 Establecer estrategias de comunicación y acceso a la información.
      .col-lg-3.mb-lg-0.mb-4(data-aos="flip-up")
        .BG05.p-4
          .h4 <span style="color:#785549">6.	Determinar</span>
          p.mb-0 Determinar el comportamiento de los usuarios frente a la forma de presentación de la información.
      .col-lg-3.mb-lg-0.mb-4(data-aos="flip-up")
        .BG05.p-4
          .h4 <span style="color:#785549">7.	Determinar</span>
          p.mb-0 Determinar nuevas estrategias de investigación y acceso a la información.
      .col-lg-3(data-aos="fade-left")
        .BG05
          img(src="@/assets/curso/tema1/img16.png")
        
    p.mb-5 En este sentido, los resultados de un estudio de usuarios determinarán la efectividad del servicio prestado por la biblioteca, si este es apropiado o no a sus necesidades y qué se podría implementar para hacerlo más eficiente. 

    .row.align-items-center.mb-4(data-aos="fade-right")  
      .col-lg-1.col-2
        img.w-50(src="@/assets/curso/tema1/img17.png") 
      .col.MLine
        .h4.mb-0 <span style="color:#785549">Necesidades de información</span>
    
    p Las bibliotecas son y deben ser espacios abiertos para todas las personas. Allí no se hace ningún tipo de distinción y todos los usuarios de la biblioteca son bienvenidos y tratados de manera profesional, por el personal bibliotecario.
    p Ahora bien, cada persona tiene no solo su forma de ser, sino que se rige por gustos, intereses, necesidades y circunstancias concretas que, en este contexto, le conducen a demandar servicios bibliotecarios particulares. 

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema1/img18.svg")
    
    .row.align-items-center.mb-4(data-aos="fade-right") 
      .col-lg-1.col-2
        img.w-50(src="@/assets/curso/tema1/img17.png") 
      .col.MLine
        .h4.mb-0 <span style="color:#785549">Tipos de usuarios</span>
    
    p Son justamente las condiciones de consulta de los usuarios lo que permite hacer una tipificación de ellos. Tanto los impulsos de consulta como los procesos de asimilación o uso de la información o necesidades de esta que los usuarios tengan, los hace fácilmente clasificables dentro de una tipología de usuarios de bibliotecas.
    p Entre los tipos de usuarios de bibliotecas más destacados, se encuentran:

    .tarjeta--container.row.justify-content-center.mb-5
      .col-lg-3.col-md-6.BG01.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img19.png')
        .h4 Estudiante
        p.mb-0 Usuario interno de la institución donde está adscrita la biblioteca. Demanda consultas múltiples con periodos de préstamo relativos para hacer más amplia la información por obtener. Acude a la biblioteca de forma directa, mayormente, por un compromiso académico más que por su propia iniciativa.
      .col-lg-3.col-md-6.BG06.p-4(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img20.png')
        .h4 Personal docente
        p Imparte enseñanza en asignaturas designadas por la institución académica donde se encuentran ubicadas o adscritas las bibliotecas. 
        p.mb-0 Es un cliente constante y busca, generalmente, afianzar conocimientos sobre su materia, mejorar su nivel de trabajo, aportar fuentes de consulta a sus estudiantes.
      .col-lg-3.col-md-6.BG01.p-4(data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img21.png')
        .h4 Usuarios potenciales
        p Logra entrar a la biblioteca y superar las otras barreras del acceso para solicitar, buscar, recuperar y utilizar algún recurso de información que se ofrecen en la colección, o que solicita un dato o información, o que desea utilizar las instalaciones que se tienen disponibles.
      .col-lg-3.col-md-6.BG06.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/img22.png')
        .h4 Otros usuarios
        p La mayor parte de los servicios que ofrece la biblioteca pueden ser utilizados por cualquier ciudadano. Acogiéndose, en ambos sentidos, al cumplimiento de las normas y compromisos del servicio.
        p.mb-0 Al margen de los miembros de la comunidad donde está adscrita la biblioteca los (alumnos, profesores e investigadores, y personal de administración y servicios), son estos los usuarios a los que se les permite un uso total de los servicios bibliotecarios.

    .row.justify-content-center.mb-4
      .col-lg-10
        p En palabras más concretas, los usuarios son:
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Consumidores de contenidos y conocimientos
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Agentes activos que se involucran en las diferentes actividades de la biblioteca
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Clientes que ayudan a generar nuevos temas de discusión, nuevas posibilidades de servicios, nuevas políticas tanto para el servicio como para la adquisición de materiales y recursos de información que podrían ser útiles.
          li
            <i class="fas fa-circle" style="color:#FD9827; font-size: x-small"></i>
            | Clientes cuyas opiniones sobre las diferentes experiencias en la biblioteca contribuyen a desarrollar nuevas formas para satisfacer mejor sus necesidades. 

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img03.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white.mb-0 Afiance sus saberes en lo relacionado con el Estudio de usuarios: 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=LgXQ0PmkW_o" target="_blank")
                  span Ver video
                  i.fas.fa-file-video
      .col-lg-10(data-aos="flip-up")
        .row.align-items-center.BGR02
          .col-lg-1.col-2.px-0
            img.img-w90(src="@/assets/curso/temas/img03.png")
          .col.p-4
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-white Amplíe los conceptos vistos sobre Formación de usuarios, explorando el enlace que aquí se propone:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=d_NmCueSotM" target="_blank")
                  span Ver video
                  i.fas.fa-file-video
    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Unidades de información

    p En la actualidad, las bibliotecas están orientadas a las necesidades de sus usuarios y aspiran a superar con éxito el desafío de definir y evaluar quiénes son y quiénes podrían llegar a serlo.
    p Esta definición es importante para identificar las necesidades de usuarios existentes y potenciales, evaluando cuántos de los servicios que ya ofrece satisfacen efectivamente dichas necesidades y qué servicios nuevos se podrían crear para satisfacer otras a las que, por el momento, no se está respondiendo.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img23.png' alt='AvatarTop')
            .tarjeta.BGR01
              .p-4
                .h4.mb-2 <span style="color:#785549">¡Sociedad de la información!</span>
                p En razón de lo anterior, el término de sociedad de información aparece como el modelo indirecto y estratégico que se debe evaluar a la hora de definir usuarios y servicios en las bibliotecas. 

    p En lo relacionado con las unidades de información, se deben tener en cuenta aspectos clave como los que se enuncian a continuación; procurando llevar registro de lo más destacado en la libreta personal de apuntes.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="BGR01")
          .row(titulo="Búsqueda y acceso a la información")
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img24.png')
            .col-lg-7
              p Las competencias y habilidades informacionales de los usuarios determinan cómo buscar y acceder a la información, en relación con las herramientas adecuadas para la gestión y aprovechamiento de esos contenidos.
          .row(titulo="Sociedad de la información")
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img25.png')
            .col-lg-7
              p Es un conjunto de factores y/o componentes donde la tecnología y las comunicaciones tienen un rol importante en el desarrollo de las regiones; satisfacer las necesidades de información para la toma de decisiones.
          .row(titulo="Uso y aprovechamiento de las tecnologías")
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img26.png')
            .col-lg-7
              p Esta conjunción entre las tecnologías y la información contenida y transmitida, poco a poco se ha venido consolidando en un todo dentro de la denominada sociedad de la información, donde se determina el buen uso y aprovechamiento de las tecnologías en relación con la información, esto último impacta al ser humano en la interpretación de datos para la toma de decisiones.
          .row(titulo="Satisfacción final pretendida")
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img27.png')
            .col-lg-7
              p Por lo anterior, las bibliotecas sin duda se convierten en los entornos determinantes entre las tecnologías, las herramientas, los canales, los medios y toda clase de usuarios que precisan el buen uso de la información en razón a la satisfacción final pretendida.
          .row(titulo="Determinación de los medios y canales de acceso")
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img28.png')
            .col-lg-7
              p Es el usuario quien más conoce sus necesidades de información y precisa el medio, el canal, el material, el formato y las herramientas necesarias para obtener, de manera oportuna y eficiente, la información que satisfaga su necesidad.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
