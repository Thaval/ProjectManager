<template>
  <page-layout>About</page-layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import PageLayout from "@/layouts/PageLayout.vue";

@Component({
  components: {PageLayout}
})
export default class About extends Vue {
  name = "About"
}
</script>

<style scoped>

</style>