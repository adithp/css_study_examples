$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        
    })
    $("#faq .tab-head a").on("click",function(){
       let $this =$(this);
       $("#faq .tab-head a").removeClass("active");
       $this.addClass("active");
       $("#faq .tab-body div.item").removeClass("active");
       let clicked_tab = $this.data("id");
       $(`#${clicked_tab}`).addClass("active");

    })
})