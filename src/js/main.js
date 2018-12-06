/*jshint esversion: 6*/
/*jslint browser: true*/ /*global  $*/
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

if(player.getDuration()==player.getCurrentTime() && player.getDuration()!=0) {
    document.getElementsByClassName("video-container")[0].style.visibility = 'hidden';
}