<template>
    <div>
        <p v-html="msg"></p>
    </div>
</template>

<script>
export default {
    data (){
        return{
            msg:"hello world"
        }
    }
};
</script>

<style scoped>
    p{
        color: brown
    }
</style>


