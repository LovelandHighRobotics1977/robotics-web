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
import request from "request";
import jszip from "jszip";
import jsziputils from "jszip-utils";

export default {
  name: "gallery",
  data() {
    return gallery_data;
  },
  mounted() {
    let images = [];
    request(
      {
        method: "GET",
        url: "https://crossorigin.me/https://imgur.com/a/LlEXCEl/zip",
        encoding: null // <- this one is important !
      },
      function(error, response, body) {
        console.log("it works! " + response + " - " + body);
        console.log(error);
        if (error || response.statusCode !== 200) {
          // handle error
          return;
        }
        jszip
          .loadAsync(body)
          .then(function(zip) {
            return zip.file("1 - i791PTa.jpg").async("string");
          })
          .then(function() {
            console.log(text);
          });
      }
    );
    /*JSZipUtils.getBinaryContent("", function(err, data) {
      if (err) {
        console.log(err);
      }

      return jszip.loadAsync(data).then(function(zip) {
        let returned_images = zip.file(/[0-9] - \w\w\w\w\w\w\w\.jpg/);
        for ((image, index) of returned_images) {
          images.push(image);
          if(index == zip.file(/[0-9] - \w\w\w\w\w\w\w\.jpg/).length-1) console.log(images);
        }
      });
    });*/
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
