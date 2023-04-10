<template>
  <v-main>
    <v-container fluid class="home-container">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4">

          <v-card class="mx-auto home-card" max-width="400">
            <v-img src="@/assets/avatar.png" class="home-avatar" />
            <v-card-title class="home-title">Hi, I'm Ahriana</v-card-title>
            <v-card-subtitle class="home-subtitle">Freelance Fullstack Developer</v-card-subtitle>
            <v-card-text class="home-text">Welcome to my portfolio site! I specialize in building web applications and games using the latest technologies.</v-card-text>
            <hr>
            <v-card-actions class="home-links">
              <v-btn icon class="home-link" href="https://discord.gg/MDS8E27j7U" target="_blank">
                <img src="@/assets/discord.svg" alt="Discord logo" class="home-link-icon" />
              </v-btn>
              <v-btn icon class="home-link" href="https://www.twitch.tv/ahriana" target="_blank"><v-icon>mdi-twitch</v-icon></v-btn>
              <v-btn icon class="home-link" href="https://www.youtube.com/channel/UCcifyPfjO22JVY_jAuVgqUg" target="_blank"><v-icon>mdi-youtube</v-icon></v-btn>
              <v-btn icon class="home-link" href="https://twitter.com/AhrianaDev" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn icon class="home-link" href="https://github.com/Ahriana" target="_blank"><v-icon>mdi-github</v-icon></v-btn>
            </v-card-actions>
            <v-card-actions class="home-actions">
              <v-btn class="home-link" to="/projects">Projects</v-btn>
              <v-btn class="home-link" to="/contact">Contact</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 128px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-actions { display: flex; justify-content: center; }
.home-avatar { margin-top: 36px; position: relative; left: 50%; transform: translateX(-50%); height: 150px; width: 150px; border-radius: 50%; border: 5px solid white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.home-button { font-weight: bold; font-size: 18px; }
.home-card { background-color: #1f1f1f; color: white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.home-link { margin: 0 10px; padding: 5px; background-color: #4a4a4a; color: white; transition: transform 0.2s ease-in-out; }
.home-link-icon { width: 24px; height: 24px; }
.home-link:hover { transform: translateY(-5px); }
.home-links { display: flex; justify-content: center; margin-top: 20px; }
.home-subtitle { font-size: 18px; margin-top: 10px; margin-bottom: 0px; text-align: center; }
.home-text { font-size: 16px; text-align: center; }
.home-title { font-size: 36px; margin-top: 10px; font-weight: bold; text-align: center; }
</style>
