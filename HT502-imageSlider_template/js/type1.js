$(function (){

    $items  = $("#slider ul li.item");

    var currentIndex =  1;
    var imgCount = $items.length;

    setInterval(function(){
        if(currentIndex >= imgCount)
        {
            currentIndex = 0;
        }

        $items.removeClass("active");
        $items.eq(currentIndex++).addClass("active");

    },1000);
});