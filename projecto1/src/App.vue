<template>
  <div class="container">
    <div class="listGames">
      
      <div class="listGames" v-if="$route.name !== 'errorPage'">

        <div v-for="post in filteredGames" :key="post.id" style="padding-left: 30px;">  
      

      <div v-for="post in games" :key="post.id" style="padding-left: 30px;">  

        <div @click="selectGame(post)" >
          {{ post.title }}  
          
        </div>
      </div> 

    </div> 
      </div>  
  
  
      <div class="right_img">
      

    </div>   
  </div>
  
  
    <div class="right_img">

      <div>
    <router-link to="/login">
      <button class="comic-button">Login!</button>
    </router-link>
    
    
    <router-link to="/register">
      <button class="comic-button">Register!</button>
    </router-link>
  </div>
      <RouterView/>
      
      
      <img :src="selectedGameThumbnail" alt="" class="img">
      <button @click="showDescription(selectedGame)" class="comic-button">Show Description</button>
      <div class="description">
        <input type="text" v-model="searchTerm" placeholder="Search for games..." class="search-input">

        <p>Descrição do jogo:</p>
        <p v-if="selectedGameDescription">{{ selectedGameDescription }}>   </p>
        <p v-if="selectedGameDescription">  {{ selectGenre }}</p>

        <svg 
          @click="insereFavorito()" 
          height="30px" 
          width="30px" 
          
          version="1.1" 
          id="Capa_1" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 47.94 47.94" 
          xml:space="preserve" 
          :fill="isFavorite ? '#d6cb05' : '#ffffff'"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> 
          </g>
        </svg>
        
      </div>
    </div>
  </div>
  
 
  
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'


export default {
  data() {
    return {
      games: [],
      selectedGameThumbnail: null,
      selectedGameDescription: null,
      selectedGame: null,
      isFavorite: false ,
      favoriteGames: [],
      searchTerm: ''
    }
    
  },
  computed: {
  
    filteredGames() {
      return this.games.filter(game => {
        return game.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  },
  methods: {
    selectGame(post) {
      this.selectedGameThumbnail = post.thumbnail;
      this.selectedGame = post ;
      this.selectedGameDescription = null;
    },
    fetchData() {
      axios.get('https://www.freetogame.com/api/games')
        .then(response => this.games = response.data)
    },
    showDescription(post) {
      this.selectedGameDescription = post.short_description;
      this.selectGenre = post.genre;
    },
    
    insereFavorito(games){
      firebase.database().ref(`/favoritos/${firebase.auth().currentUser.uid}/`).push().set(this.selectedGame)
      this.isFavorite = !this.isFavorite;
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
.img{
  margin-top: 20px;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
}

body {
  margin: 0;
  background-color: #2a475e ;
}
.comic-button {
  display: inline-block;
  padding: 10px 20px 10px 10px;
  font-size: 15.69px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #19319e;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000000;
  transition: all 0.3s ease;
  cursor: pointer;

  margin-bottom: 10px;
  margin-top: 10px;

  margin-bottom: 20px;
  margin-top: 20px;

}

.comic-button:hover {
  background-color: #fff;
  color: #13a37f;
  border: 2px solid #14595e;
  box-shadow: 5px 5px 0px #091a4c;
}

.comic-button:active {
  background-color: #16d96e;
  box-shadow: none;
  transform: translateY(4px);
}

.right_img {
  width: 700px;
  margin-left: 500px;
  margin-top: -80px;
}

.right_img img {
  width: 530px;
  border-radius: 20px;
}

.description {
  margin-bottom: -60px;
  color: whitesmoke;
  line-height: 40px;
}

</style>