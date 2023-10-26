<template>
    <a :href="link" class="flex items-center rounded-md bg-gray-600 font-semibold hover:bg-blue-500 px-3 py-2" @click="clickedButton()">
        <slot />
    </a>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        link: {
            type: String,
            default: '#'
        }
    },
    methods: {
        clickedButton() {
            this.$emit('clickedButton')
        }
    }
})
</script>
