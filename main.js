let url = new URL(window.location.href);
var num = 0;
var index = url.href.indexOf("?");
index += 1;
var x = url.href.substring(index);
var str="the score is "+x;
document.getElementById("text").innerText=str;
function back() {
    location.replace("https://liad07.github.io/king-of-the-hamuzim/")
}
function sharewithme(){
    var link="mailto:liadgames07@gmail.com?subject=i%20want%20to%20share%20with%20you%20my%20record&body=my record is "+x;
    location.replace(link)

}
