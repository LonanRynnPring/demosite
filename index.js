$(function() {
    $("h1").css("color", "red"); 	
    $("h1").addClass("redH1"); 
    $("button").on("click", () => {
        $("h1").css("color", "blue");
    });    
    $("button").on("click", () => {
        $("h1").slideToggle();
    });    
});
