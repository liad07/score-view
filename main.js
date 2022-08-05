let url = new URL(window.location.href);
var num = 0;
var score = url.searchParams.get("score").trim()
var mode = url.searchParams.get("mode").trim()
var from = url.searchParams.get("from").trim()
fetch(from)
    .then(function (response) {
        return (response.text());
    })
    .then(function (responseText) {
        var parsedResponse = (new window.DOMParser()).parseFromString(responseText, "text/html");
        var link = parsedResponse.head.getElementsByTagName("link")[0].href.replace(window.location.origin, from)
        link = link.replace("/score-view/", "")
        document.getElementById("icon").href = link
        document.title = parsedResponse.title.toLowerCase()
    });
document.getElementById("score").textContent = "the score is " + score;
document.getElementById("mode").textContent = "the mode is:" + mode;

function back() {
    location.replace("https://liad07.github.io/king-of-the-hamuzim/")
}

function sharewithme() {
    var link = "mailto:liadgames07@gmail.com?subject=i%20want%20to%20share%20with%20you%20my%20record&body=my record is " + x;
    location.replace(link)

}
