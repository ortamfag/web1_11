$(document).ready(function(){
   $("#hideheader").click(function(){
       $(".picture").hide();
   })
5
   $("#showheader").click(function(){
       $(".picture").show();

    })
   $("#hidemain").click(function(){
       $(".imagee").toggle();
   })

   $("#Loremcolor").dblclick(function(){
       $(".lines").addClass("blue");
   })

   $('#btn').click(function(){
	alert("Value: " + $("#test").val());
});

    $("#slide").dblclick(function(){
        $("#nextslide").slideDown("slow");
    });

    $("#slide1").dblclick(function(){
        $("#nextslide1").slideToggle('slow');
    });

    $(".focus").mouseenter(function(){
        $(".focus").fadeOut('slow');
    })

    $(".focus2").mouseenter(function(){
        $(".focus2").animate({
            left: '400px',
            opacity: '0.5',
            height: '150px',
            width: '150px'})
    })

    $(".last_anim").dblclick(function(){
        $(".focus3").fadeToggle();
        $(".focus3_1").fadeToggle('slow');
        $(".focus3_2").fadeToggle(3000);
    })

    alert("Метод html() в консоли")
    console.log($( "div").html());

    $( function() {
        $( "#accordion" ).accordion();
      } );

    $( function() {
        $( "#draggable" ).draggable();
  } );














   
   //сделать кнопки читабельными(25line);










});

