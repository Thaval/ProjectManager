<template>
  <page-layout>
    <template v-slot:header>
      <v-btn>
        <v-icon>mdi-pencil</v-icon>
        Neues Projekt erstellen
      </v-btn>
    </template>
    <projects-list :projects="projects"></projects-list>
  </page-layout>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import PageLayout from "@/layouts/PageLayout.vue";
import ProjectsList from "@/components/projects/ProjectsList.vue";
import {Project} from "@/models/Project";

@Component({
  components: {ProjectsList, PageLayout}
})
export default class Projects extends Vue {
  name = "Proejcts"

  projects: Project[] = [
    {name: "P1"}
  ]
}
</script>

<style scoped>

</style>