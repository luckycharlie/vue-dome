<template>
    <div>
        <personal-center></personal-center>
        <!-- <navigation-bar></navigation-bar> -->
    </div>
</template>

<script>
    import PersonalCenter from "./PersonalCenter";
    import NavigationBar from "./NavigationBar";

    export default {
        data() {
            return {};
        },
        components: {
            PersonalCenter,
            NavigationBar
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
