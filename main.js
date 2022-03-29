let url = new URL(window.location.href);
var num = 0;
var index = url.href.indexOf("?");
index += 1;
var x = url.href.substring(index);
var str="the score is "+x;
document.getElementById("text").innerText=str;
