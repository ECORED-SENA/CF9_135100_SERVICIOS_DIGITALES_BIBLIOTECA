<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.BGR02
      .col-lg-1.col-2.px-0
        img.img-w90(src="@/assets/curso/temas/img05.png")
      .col.p-4
        p Si ha llegado a este punto, usted ha finalizado con el estudio de los contenidos de este componente formativo. Aquí, haga un análisis de la estructura que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes y repase los temas que considere más importantes.
        .h5 <span style="color:#FD9827">¡Adelante!</span>

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
