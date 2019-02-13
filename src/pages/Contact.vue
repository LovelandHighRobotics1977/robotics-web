<template>
  <div class="content list">
    <title>LHR - Contact</title>
    <div class="infocard" style="width: 20rem;">
      <h2>Address</h2>
      <p>Loveland High School
        <br>920 W 29th Street
        <br>Loveland, CO 80538
      </p>
    </div>

    <div class="infocard">
      <h2>Team Contact</h2>
      <p>lhsrobotics@thompsonschools.org</p>
      <p>-</p>
    </div>

    <div class="infocard" style="width: 20rem;">
      <h2>Teachers</h2>
      <p>Michael Pintaric</p>
      <p>Jenn Hall</p>
    </div>
    <div v-for="card of cards" v-bind:key="card">
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
import contact_data from "./../data/contact.js"

export default {
  name: "contact",
  data() {
    return contact_data;
  }
};
</script>

<style>
</style>
