<template>
    <div>
    <input type="email" v-model="email">&nbsp; <input type="password" v-model="password"><button @click="register">Register</button>
    
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: '',
            user: null
        }
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Welcome')
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    }
}
</script>
