<template>
  <div class="content list">
    <title>LHR - Gallery</title>
    <center>
      <div class="infocard" v-for="picture of pictures" v-bind:key="picture">
        <img :src="picture" class="gimg">
      </div>
    </center>
  </div>
</template>

<script>
import gallery_data from "./../data/gallery.js";

export default {
  name: "gallery",
  data() {
    return gallery_data;
  }
};
</script>

<style lang="less">
.gimg {
  @gimg-pad: 0.5rem;
  height: 20rem;
  padding-top: @gimg-pad;
  padding-bottom: @gimg-pad;
  padding-right: @gimg-pad;
  padding-left: @gimg-pad;
}
</style>
