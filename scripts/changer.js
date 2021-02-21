var badSearches = [
    "how+to+degrease+keyboard",
    "embarrassing+rashes",
    "rick+roll",
    "ted+cruz+zodiac+killer+?",
    "bigfoot+fan+club",
    "how+to+use+internet",
    "bing+could+you+please+help+me"
]

var fontFamilies = [
    "Times New Roman",
    "Courier New",
    "Brush Script MT"
]
$('div').css("background-color",hexColorGen);


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

<<<<<<< Updated upstream
$('p').each(
    function() {
    var html = $(this).html()
    $(this).html(html.replace('the', 'is'))
    
});
=======
function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true)",timeoutPeriod);
}
>>>>>>> Stashed changes
