$('p').css("background-color","#3bffeb");


$('p').hover(
    function() { $(this).css("display","none"); },
    async function() { 
        await new Promise(r => setTimeout(r, 2000));
        $(this).css("display","inline");
    }
);



function changeText(text) {

}