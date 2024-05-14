<template>
    <div class="container">
    <div class="error">
        <h1>Page not Found</h1>
        <h2>Error 404</h2>
        
    </div>
</div>
</template>

<script>
    export default{
        methods:{
            redirectMe(){
                this.$router.push('/'); 
            }
        }
    }

</script>

<style>
.error {
    font-size: 50px;
}

</style>
