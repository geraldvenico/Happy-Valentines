$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: 0
        }, "slow");
    });

    $(".card").click(function(){
        window.location.href = "nextpage.html"; // Change to your desired page
    });

    $(".front").click(function(){
        window.location.href = "nextpage.html"; // Change to your desired page
    });
    
});
