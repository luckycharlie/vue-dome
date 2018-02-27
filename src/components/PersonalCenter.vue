<template>
    <div>
        <uppart></uppart>
        <lowerpart></lowerpart>
    </div>
</template>

<script>
    import uppart from "./peoplecener/uppart";
    import lowerpart from "./peoplecener/lowerpart";

    export default {
        data() {
            return {};
        },
        components: {uppart, lowerpart}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
