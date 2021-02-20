var badSearches = [
    "how+to+degrease+keyboard",
    "embarrassing+rashes",
    "rick+roll",
    "ted+cruz+zodiac+killer+?",
    "bigfoot+fan+club",
    "how+to+use+internet",
    "bing+could+you+please+help+me"
]

var quack = new Audio(chrome.runtime.getURL("quack.mp3"));

$('p').css("background-color",hexColorGen);

$('p').hover(
    function() { $(this).css("display","none"); },
    async function() { 
        await new Promise(r => setTimeout(r, 2000));
        $(this).css("display","inline");
    }
);

$('a').hover(function() {
    var search = Math.floor(Math.random() * (badSearches.length-1));
    console.log(search);
    console.log(badSearches[search]);
    $(this).attr("href", "https://www.bing.com/search?q="+badSearches[search]);
});


function changeText(text) {

};

function hexColorGen() {
    let n = (Math.random() * 0xFFFFF * 1000000).toString(16);
    return '#' + n.slice(0,6);
};

$('p').each(
    function() {
    var html = $(this).html()
    $(this).html(html.replace('the', 'is'))
    
});