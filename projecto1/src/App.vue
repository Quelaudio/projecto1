<template>
  <div class="listGames">
    <div v-for="post in games" :key="post.id" style="padding-left: 30px;">
      <div @click="selectGame(post)">
        {{ post.title }}  
      </div>
    </div> 
  </div>   
  <div class="right_img">
    <img :src="selectedGameThumbnail" alt="Selected Game Thumbnail">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      games: [],
      selectedGameThumbnail: null
    }
  },
  methods: {
    selectGame(post) {
      this.selectedGameThumbnail = post.thumbnail
    },
    fetchData() {
      axios.get('https://www.freetogame.com/api/games')
        .then(response => this.games = response.data)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
.listGames {
  background-color: #1b2838;
  color: aliceblue;
  max-height: 100vh;
  overflow: scroll;
  width: 600px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  letter-spacing: 1px;
  line-height: 40px;
}

.right_img {
  padding-left: 30px;
  position: fixed;
  width:  500px;
  top: 0;
  right: 0;
  bottom: 0;
}
.right_img img {
  max-width: 100%;
  max-height: 100vh;
}
</style>
