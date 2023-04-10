<template>
  <v-app class="background">
    <v-app-bar app color="#E35BFF" height="40" fixed>
      <v-row align="center">
        <v-col>
          <v-row no-gutters>
            <v-btn color="white" to="/" class="nav-button">Home</v-btn>
            <v-btn color="white" to="/projects" class="nav-button">Projects</v-btn>
            <v-btn color="white" to="/contact" class="nav-button">Contact</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>

    <DefaultView />

    <v-footer absolute style="position: fixed; bottom: 10px;">AhrianaDev {{ year }}</v-footer>
  </v-app>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import DefaultView from './View.vue'

export default defineComponent({
  components: { DefaultView },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>

<style scoped>
.background { background: linear-gradient(to bottom right, #5BCEFA, #5BCEFA, #F5A9B8, #F5A9B8, #FFFFFF, #FFFFFF, #F5A9B8, #F5A9B8, #5BCEFA, #5BCEFA); }
</style>

<style>
html { overflow-y: auto }
</style>
