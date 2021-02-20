$('p').css("background-color",hexColorGen);


$('p').hover(
    function() { $(this).css("display","none"); },
    async function() { 
        await new Promise(r => setTimeout(r, 2000));
        $(this).css("display","inline");
    }
);

$('a').hover(function() {
    $(this).attr("href", "http://bing.com");
});


function changeText(text) {

};

function hexColorGen() {
    let n = (Math.random() * 0xFFFFF * 1000000).toString(16);
    return '#' + n.slice(0,6);
};