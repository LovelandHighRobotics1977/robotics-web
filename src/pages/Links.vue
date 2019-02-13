<template>
  <div class="content list">
    <title>LHR - Links</title>
    <list :list="links"/>
  </div>
</template>

<script>
import List from "./../components/List.vue";
import links_data from "./../data/links.js";
import request from "request";

export default {
  name: "links",
  data() {
    return links_data;
  },
  components: {
    List
  }
};
</script>

<style lang="less">
</style>
