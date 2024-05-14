<template>
    <div>
    <input type="email" v-model="email">&nbsp; <input type="password" v-model="password"><button @click="login">login</button>

        
    
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            email:'',
            password:'',
            user:null
        }
    },
    methods:{
        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(
                ()=>{
                    alert('Welcome')
                    this.user=firebase.auth().currentUser
                    this.$router.push('/');
                }
            )
        }
    },
    created (){
        this.user = firebase.auth().currentUser
    }
}


</script>

<style>
body{
    color: white;
   
}

</style>