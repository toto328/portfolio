$(function(){
   
    
    $(".menu_btn").on("click",function(){
        
        bgcolor ="black";
        //クリック時処理
        $(".icon_bar").toggleClass("bgblack");
        $(".nav_wrapper").slideToggle(200);
        
        bgcolor="white";
    });
});
