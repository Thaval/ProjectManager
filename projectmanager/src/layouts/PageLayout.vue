<template>
  <v-container class="d-flex flex-column h-100 ma-0">
    <slot name="header">
      <div>header</div>
    </slot>
    <div class="flex-grow-1">
      <slot name="default">
        <div>content</div>
      </slot>
    </div>
    <slot name="footer">
      <div>footer</div>
    </slot>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class PageLayout extends Vue {
  name = "PageLayout"
}
</script>

<style scoped>

</style>