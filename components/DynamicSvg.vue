<template>
  <div v-if="icon" @click="clickedDynamic()">
    <component :is="icon" :width="width" :height="height" class="fill-current"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    profile: () => import('~/components/Svg/SvgProfile.vue'),
    envelope: () => import('~/components/Svg/SvgEnvelope.vue'),
    share: () => import('~/components/Svg/SvgShare.vue'),
    down: () => import('~/components/Svg/SvgDown.vue'),
    stat: () => import('~/components/Svg/SvgStat.vue'),
    info: () => import('~/components/Svg/SvgInfo.vue'),
    download: () => import('~/components/Svg/SvgDownload.vue'),
    graduation: () => import('~/components/Svg/SvgGraduation.vue'),
    locate: () => import('~/components/Svg/SvgLocate.vue'),
    phone: () => import('~/components/Svg/SvgPhone.vue'),
    work: () => import('~/components/Svg/SvgWork.vue'),
    close: () => import('~/components/Svg/SvgClose.vue'),
    linkedin: () => import('~/components/Svg/SvgLinkedin.vue'),
    github: () => import('~/components/Svg/SvgGithub.vue'),
    htmll: () => import('~/components/Svg/SvgHtml.vue'),
    css: () => import('~/components/Svg/SvgCss.vue'),
    javascript: () => import('~/components/Svg/SvgJavascript.vue'),
    typescript: () => import('~/components/Svg/SvgTypescript.vue'),
    php: () => import('~/components/Svg/SvgPhp.vue'),
    nodejs: () => import('~/components/Svg/SvgNodejs.vue'),
    adonisjs: () => import('~/components/Svg/SvgAdonisjs.vue'),
    nestjs: () => import('~/components/Svg/SvgNestjs.vue'),
    nuxtjs: () => import('~/components/Svg/SvgNuxtjs.vue'),
    vuejs: () => import('~/components/Svg/SvgVuejs.vue'),
    reactjs: () => import('~/components/Svg/SvgReactjs.vue'),
    tailwind: () => import('~/components/Svg/SvgTailwind.vue'),
    vuetify: () => import('~/components/Svg/SvgVuetify.vue'),
    bootstrap: () => import('~/components/Svg/SvgBootstrap.vue'),
    postgresql: () => import('~/components/Svg/SvgPostgresql.vue'),
    mysql: () => import('~/components/Svg/SvgMysql.vue'),
    mongodb: () => import('~/components/Svg/SvgMongodb.vue'),
    graphql: () => import('~/components/Svg/SvgGraphql.vue'),
    strapi: () => import('~/components/Svg/SvgStrapi.vue'),
    bubble: () => import('~/components/Svg/SvgBubble.vue'),
    wordpress: () => import('~/components/Svg/SvgWordpress.vue'),
    vscode: () => import('~/components/Svg/SvgVscode.vue'),
    git: () => import('~/components/Svg/SvgGit.vue'),
    google: () => import('~/components/Svg/SvgGoogle.vue'),
    office: () => import('~/components/Svg/SvgOffice.vue'),
    linux: () => import('~/components/Svg/SvgLinux.vue'),
    windows: () => import('~/components/Svg/SvgWindows.vue'),
    bash: () => import('~/components/Svg/SvgBash.vue'),
    npm: () => import('~/components/Svg/SvgNpm.vue'),
    postman: () => import('~/components/Svg/SvgPostman.vue'),
    jwt: () => import('~/components/Svg/SvgJwt.vue'),
    netlify: () => import('~/components/Svg/SvgNetlify.vue'),
    heroku: () => import('~/components/Svg/SvgHeroku.vue'),
    docker: () => import('~/components/Svg/SvgDocker.vue'),
    notion: () => import('~/components/Svg/SvgNotion.vue'),
    zapier: () => import('~/components/Svg/SvgZapier.vue'),
    integromat: () => import('~/components/Svg/SvgIntegromat.vue'),
    airtable: () => import('~/components/Svg/SvgAirtable.vue'),
    mailchimp: () => import('~/components/Svg/SvgMailchimp.vue'),
    figma: () => import('~/components/Svg/SvgFigma.vue'),
    clickup: () => import('~/components/Svg/SvgClickup.vue'),
    asana: () => import('~/components/Svg/SvgAsana.vue'),
    tools: () => import('~/components/Svg/SvgTools.vue'),
    cubes: () => import('~/components/Svg/SvgCubes.vue'),
    home: () => import('~/components/Svg/SvgHome.vue'),
    meteor: () => import('~/components/Svg/SvgMeteor.vue'),
    jira: () => import('~/components/Svg/SvgJira.vue'),
    confluence: () => import('~/components/Svg/SvgConfluence.vue'),
    trello: () => import('~/components/Svg/SvgTrello.vue'),
    scrum: () => import('~/components/Svg/SvgScrum.vue'),
    miro: () => import('~/components/Svg/SvgMiro.vue'),
    eye: () => import('~/components/Svg/SvgEye.vue'),
    before: () => import('~/components/Svg/SvgBefore.vue'),
    hamburger: () => import('~/components/Svg/SvgHamburger.vue'),
  }
})
export default class DynamicSvg extends Vue {
  @Prop({ required: true })
  icon!: string

  @Prop({ default: 20 })
  width!: string

  @Prop({ default: 20 })
  height!: string

  clickedDynamic () {
    this.$emit('clickedDynamic')
  }
}

</script>
