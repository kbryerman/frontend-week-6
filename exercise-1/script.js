jQuery(function(){

$("#about").hide();
$("#portfolio").hide();
$("#pricing").hide();
$("#contact").hide();

$("a").on("click",
    function() {
        $("article").hide();
        var nav_link = $(this).attr("href");
        $("article"+nav_link).show();
    }
    );
});