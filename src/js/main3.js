/*jshint esversion: 6*/
/*jslint browser: true*/ /*global  $*/

let current_page = "home";

document.getElementsByClassName("home")[0].onMouseDown = function () {
    console.log("home");
    return true; // Not needed, as long as you don't return false
};