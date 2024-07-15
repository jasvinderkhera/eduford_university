let nav = false
let bars = $(".bars").click(function(){
    if(nav == false){
        $(".mobile_nav").addClass("active")
        nav = true
    }
    else{
        $(".mobile_nav").removeClass("active")
        nav = false
    }
})