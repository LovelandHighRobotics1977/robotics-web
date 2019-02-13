<template>
    <div class="categories">
        <center>
            <router-link :class="'category ' +  category" v-for="category of categories" v-bind:key="category" replace :to="'/' + category">{{ category }}</router-link>
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
