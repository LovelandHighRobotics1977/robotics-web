<template>
  <desk>
    <div
      class="listing"
      v-for="listing of list"
      v-bind:key="listing"
      v-on:click="openInNewTab(listing.url)"
      :title="listing.url"
    >
      <desk-row>
        <desk-cell v-if="listing.logo != 'none'">
          <img :src="listing.logo" class="logo" :style="listing.logo_sizing">
        </desk-cell>
        <desk-cell class="detail">
          <h2>{{ listing.title }}</h2>
          <p v-for="desc of listing.description" v-bind:key="desc">{{ desc }}</p>
          <p>{{ listing.url }}</p>
        </desk-cell>
      </desk-row>
    </div>
  </desk>
</template>

<script>
import Desk from "./desk/Desk.vue";
import DeskRow from "./desk/Row.vue";
import DeskCell from "./desk/Cell.vue";

export default {
  name: "list",
  props: ["list"],
  components: {
    Desk,
    DeskRow,
    DeskCell
  },
  methods: {
    openInNewTab(url) {
      let page = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>

<style lang="less" scoped>
@gray5: rgba(35, 35, 35, 0.5);

.logo {
  height: 6rem;
  padding-left: 0.7rem;
}

.detail {
  vertical-align: top;
  padding-top: 0.5rem !important;
  padding-left: 1rem;
  padding-right: 2rem;
}

.listing {
  background: @gray5;
  border-radius: 0.5rem;
  padding: 1.2rem 0rem 1.2rem 0.5rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  margin-top: none;
  float: left;
  width: 100%;
  cursor: pointer;
  & p {
    font-size: x-large;
  }
}
</style>
