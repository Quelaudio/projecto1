<template>
  <div style="max-height: 10vh; overflow:scroll">
  <div v-for="post in games" class="listGames">
    {{ post.id }} {{ post.title }}  
    <!-- {{ counterStore.name }} -->
  </div>    
  </div>

</template>

<script >
   import { mapState, mapStores } from 'pinia'
   import { useCounterStore } from '@/stores/counter'
  import axios from 'axios'
  export default {
    data() {
      return {
        games: []
      }
    },
    computed: {
      ...mapStores(useCounterStore)
    // gives access to this.count inside the component and allows setting it
    // this.count++
    // same as reading from store.count
    //...mapWritableState(useCounterStore, ['count']),
    // same as above but registers it as this.myOwnName
    // ...mapWritableState(useCounterStore, {
    //   myOwnName: 'count',
    // }),
  },
    mounted(){
      axios.get('https://www.freetogame.com/api/games')
      .then(response => this.games = response.data)
    }
  }
</script>


<style>



</style>

