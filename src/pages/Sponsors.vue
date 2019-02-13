<template>
  <div class="content list">
    <title>LHR - Sponsors</title>
    <list :list="sponsors"/>
  </div>
</template>

<script>
import List from "./../components/List.vue";
import sponsors_data from "./../data/sponsors.js";

export default {
  name: "contact",
  data() {
    return sponsors_data;
  },
  components: {
    List
  }
};
</script>

<style>
</style>
