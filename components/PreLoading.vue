<template lang="html">
  <div v-if="loading" class="fixed h-screen w-screen z-50 bg-gray-800 flex items-center justify-center overflow-hidden">
    <svg>
    <g>
        <path d="M 50,100 A 1,1 0 0 1 50,0"/>
    </g>
    <g>
        <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
    </g>
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#FF56A1;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
        </linearGradient>
    </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "PreLoading",
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
        this.loading = true
    },
    finish() {
        this.loading = false
    },
    fail(error) {
        console.log(error)
    },
    increase(num) {
        console.log(num)
    },
  },
}
</script>
<style scoped>
html, body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  overflow: visible;
  width: 100px;
  height: 150px;
}
svg g {
  animation: slide 2s linear infinite;
}
svg g:nth-child(2) {
  animation-delay: 0.5s;
}
svg g:nth-child(2) path {
  animation-delay: 0.5s;
  stroke-dasharray: 0px 158px;
  stroke-dashoffset: 1px;
}
svg path {
  stroke: url(#gradient);
  stroke-width: 20px;
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: 0 157px;
  stroke-dashoffset: 0;
  animation: escalade 2s cubic-bezier(0.8, 0, 0.2, 1) infinite;
}

@keyframes slide {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(50px);
  }
}
@keyframes escalade {
  0% {
    stroke-dasharray: 0 157px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 156px 157px;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 156px 157px;
    stroke-dashoffset: -156px;
  }
}
</style>