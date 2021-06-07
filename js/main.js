$(function(){
    $("#img1").on("mouseover",function(){
        $(this).children("img").css({opacity:"1"});
        $("#img2").children("img").css({opacity:"0.3"});
        $("#img3").children("img").css({opacity:"0.3"});
    });
    $("#img1").on("mouseout",function(){
        $(this).children("img").css({opacity:""});
        $("#img2").children("img").css({opacity:""});
        $("#img3").children("img").css({opacity:""});
    });
    $("#img2").on("mouseover",function(){
        $(this).children("img").css({opacity:"1"});
        $("#img1").children("img").css({opacity:"0.3"});
        $("#img3").children("img").css({opacity:"0.3"});
    });
    $("#img2").on("mouseout",function(){
        $(this).children("img").css({opacity:""});
        $("#img1").children("img").css({opacity:""});
        $("#img3").children("img").css({opacity:""});
    });
    $("#img3").on("mouseover",function(){
        $(this).children("img").css({opacity:"1"});
        $("#img2").children("img").css({opacity:"0.3"});
        $("#img1").children("img").css({opacity:"0.3"});
    });
    $("#img3").on("mouseout",function(){
        $(this).children("img").css({opacity:""});
        $("#img2").children("img").css({opacity:""});
        $("#img1").children("img").css({opacity:""});
    });
    $(function(){
        var slides=$('.img4').find('img');
        var now=0,tot=2;
        sliding();
        function sliding(){
          slides.eq(1).fadeOut('slow');
          slides.eq(2).fadeOut('slow');
          setInterval(function(){
            if(now==tot)now=0;else now++;
            slides.eq(now-1).fadeOut(1000);
            slides.eq(now).fadeIn(1000);
          },2000);
        }
    });
    $(function(){
        var slides=$('.img5').find('img');
        var now=0,tot=2;
        sliding();
        function sliding(){
          slides.eq(1).fadeOut('slow');
          slides.eq(2).fadeOut('slow');
          setInterval(function(){
            if(now==tot)now=0;else now++;
            slides.eq(now-1).fadeOut(1000);
            slides.eq(now).fadeIn(1000);
          },2000);
        }
    });
    $(function(){
        var slides=$('.img6').find('img');
        var now=0,tot=2;
        sliding();
        function sliding(){
          slides.eq(1).fadeOut('slow');
          slides.eq(2).fadeOut('slow');
          setInterval(function(){
            if(now==tot)now=0;else now++;
            slides.eq(now-1).fadeOut(1000);
            slides.eq(now).fadeIn(1000);
          },2000);
        }
    });
});
