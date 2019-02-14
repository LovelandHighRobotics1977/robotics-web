<template>
  <div class="content list">
    <title>LHR - Contact</title>
    <div
      class="infocard"
      v-for="card of cards"
      v-bind:key="card"
      :style="'width: ' + card.width + 'rem'"
    >
      <h2>{{ card.title }}</h2>
      <p v-for="item of card.info" v-bind:key="item">
        <span v-for="(itembreak, index) of item.split(' | ')" v-bind:key="itembreak">
          {{ itembreak }}
          <br v-if="index != item.split(' | ').length-1">
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import contact_data from "./../data/contact.js";

export default {
  name: "contact",
  data() {
    return contact_data;
  }
};
</script>

<style>
</style>
