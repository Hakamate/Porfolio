<template>
  <div v-if="icon">
    <component :is="icon" :width="width" :height="height" />
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
  }
})
export default class DynamicSvg extends Vue {
  @Prop({ required: true })
  icon!: string

  @Prop({ default: 20 })
  width!: string

  @Prop({ default: 20 })
  height!: string
}

</script>
