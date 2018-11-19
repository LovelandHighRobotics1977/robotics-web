/*jshint esversion: 6*/
/*jslint browser: true*/ /*global  $*/

let current_page = "home";

document.getElementByClassName("home").onmousedown = function () {
    console.log("home");
    return true; // Not needed, as long as you don't return false
};