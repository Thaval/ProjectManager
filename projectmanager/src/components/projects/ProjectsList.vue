<template>
  <v-list dense>
    <v-subheader>Projects</v-subheader>
    <v-list-item-group v-model="selectedProject" color="primary">
      <v-list-item v-for="(item, i) in projects" :key="i">
<!--        <v-list-item-icon>-->
<!--          <v-icon v-text="item.icon"></v-icon>-->
<!--        </v-list-item-icon>-->
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import {Vue, Component, VModel, Prop} from "vue-property-decorator";
import {Project} from "@/models/Project";

@Component({})
export default class ProjectsList extends Vue {
  name = "ProjectsList"
  @Prop({default: () => ([])}) projects!: Project[]
  private selectedProject: Project | undefined;

}
</script>

<style scoped>

</style>