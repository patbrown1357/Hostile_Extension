var badSearches = [
    "how+to+degrease+keyboard",
    "rick+roll",
    "ted+cruz+zodiac+killer+?",
    "bigfoot+fan+club",
    "how+to+use+internet",
    "bing+could+you+please+help+me",
    "why+are+my+farts+so+stinky?",
    "what+is+the+meaning+of+life?"
]

var fontFamilies = [
    "Times New Roman",
    "Courier New",
    "Brush Script MT"
]
$('div').css("background-color",hexColorGen);

var quack = new Audio(chrome.runtime.getURL("quack.mp3"));
window.onload = timedRefresh(Math.floor((Math.random()*60000)+30000));


$('p').hover(
    function() { $(this).css("display","none"); },
    async function() { 
        await new Promise(r => setTimeout(r, 2000));
        $(this).css("display","inline");
    }
);

$('a').hover(function() {
    var search = Math.floor(Math.random() * (badSearches.length-1));
    $(this).attr("href", "https://www.bing.com/search?q="+badSearches[search]);
});

$("img").each( function() {
    var n = Math.random();
    if( n < .50 ) {
        $(this).css("transform","scaleX(-1)")
    } else {
        $(this).css("transform","scaleY(-1)")
    }
});

function hexColorGen() {
    let n = (Math.random() * 0xFFFFF * 1000000).toString(16);
    return '#' + n.slice(0,6);
};


$('p').each(
    function() {
    var html = $(this).html()
    $(this).html(html.replace('the', 'is'))
    
});

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true)",timeoutPeriod);
}


$(document).ready(function() {
    var colors = ['red', 'green', 'blue', 'orange', 'purple', 'gray', 'yellow'];
    var minFontSize = 5;
    var maxFontSize = 50;

    $('p').hover( function(e) {
    $(this).css("font-size", randomNumberGenerator(minFontSize, maxFontSize));
    $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
    $(this).css("font-family", fontFamilies[Math.floor(Math.random() * fontFamilies.length)]);
    });

});

function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
