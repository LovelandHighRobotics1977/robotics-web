<template>
    <div class="content">
        <center>
            <div class="infocard"><img src="./../assets/ig/2.jpg" class="gimg"></div>
            <div class="infocard"><img src="./../assets/ig/3.jpg" class="gimg"></div>
            <div class="infocard"><img src="./../assets/ig/4.jpg" class="gimg"></div>
            <div class="infocard"><img src="./../assets/ig/5.jpg" class="gimg"></div>
        </center>
    </div>
</template>

<script>
export default {
    name: "gallery"
}
</script>

<style lang="less">
.gimg {
    @gimg-pad: .5rem;
    height: 20rem;
    padding-top: @gimg-pad;
    padding-bottom: @gimg-pad;
    padding-right: @gimg-pad;
    padding-left: @gimg-pad;
}
</style>
