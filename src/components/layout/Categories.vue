<template>
    <div class="categories">
        <center>
            <router-link v-for="category of categories" v-bind:key="category" replace :to="'/' + category">
        </center>
    </div>
</template>

<script>
export default {
    name: "categories",
    props: ["categories"]
}
</script>

<style>

</style>
