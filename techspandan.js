//CLOCK
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=check(m);
s=check(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}


  
//COUNTER
function counter()
{
var today=new Date();
var day=today.getDate();
var month=today.getMonth();


var final=new Date("April 18, 2014 00:00:00");
var day2=final.getDate();

if(month==2)
var d=(31-day)+day2;
else
var d=Math.abs(day2-day);



d=check(d);



document.getElementById('d').innerHTML=d;

t=setTimeout(function(){counter()},500);
}

function check(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}


function myAlert()
{
	alert("CLICK EARTH,MARS,JUPITER AND SATURN FOR OPENING/CLOSING PANELS.");
	
}

//READY    
  $(document).ready(function(){
    $("#effect").hide(),$("#effect1").hide(),$("#event").show(6000);
     });
  
  //INSIDE EVENTS
  $(function() {
          $.fn.left = function( using ) {
              return this.position({
                  my: "right middle",
                  at: "left+25 middle",
                  of: "#container",
                  collision: "none",
                  using: using
              });
          };
          $.fn.right = function( using ) {
              return this.position({
                  my: "left middle",
                  at: "right-25 middle",
                  of: "#container",
                  collision: "none",
                  using: using
              });
          };
          $.fn.center = function( using ) {
              return this.position({
                  my: "center middle",
                  at: "center middle",
                  of: "#container",
                  using: using
              });
          };
  
          $( "img:eq(0)" ).left();
          $( "img:eq(1)" ).center();
          $( "img:eq(2)" ).right();
  
          function animate( to ) {
              $( this ).stop( true, false ).animate( to );
          }
          function next( event ) {
              event.preventDefault();
              $( "img:eq(2)" ).center( animate );
              $( "img:eq(1)" ).left( animate )
              $( "img:eq(0)" ).right().appendTo( "#container" );
          }
          function previous( event ) {
              event.preventDefault();
              $( "img:eq(0)" ).center( animate );
              $( "img:eq(1)" ).right( animate );
              $( "img:eq(2)" ).left().prependTo( "#container" );
          }
          $( "#previous" ).click( previous );
          $( "#next" ).click( next );
  
          $( "img" ).click(function( event ) {
              $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
          });
  
          $( window ).resize(function() {
              $( "img:eq(0)" ).left( animate );
              $( "img:eq(1)" ).center( animate );
              $( "img:eq(2)" ).right( animate );
          });
      });
  
  //HOME
  $(function() {
          // run the currently selected effect
          function runEffect() {
              // get effect type from
              var selectedEffect = $( "#effectTypes1" ).val();
  
              // most effect types need no options passed by default
              var options = {};
              // some effects have required parameters
              if ( selectedEffect === "scale" ) {
                  options = { percent: 0 };
              } else if ( selectedEffect === "size" ) {
                  options = { to: { width: 200, height: 60 } };
              }
  
              // run the effect
              $( "#effect" ).toggle( selectedEffect, options, 500 );
          };
  
          // set effect from select menu value
          $( "#hut2" ).click(function() {
              runEffect(),$("#panel2").hide(),$("#panel3").hide(),$("#effect1").hide(),$("#frm").hide();
              return false;
          });
      });
  //CONTACT US
  $(function() {
          // run the currently selected effect
          function runEffect() {
              // get effect type from
              var selectedEffect = $( "#effectTypes" ).val();
  
              // most effect types need no options passed by default
              var options = {};
              // some effects have required parameters
              if ( selectedEffect === "scale" ) {
                  options = { percent: 0 };
              } else if ( selectedEffect === "size" ) {
                  options = { to: { width: 200, height: 60 } };
              }
  
              // run the effect
              $( "#effect1" ).toggle( selectedEffect, options, 500 );
          };
  
          // set effect from select menu value
          $( "#hut3" ).click(function() {
              runEffect(),$("#panel2").hide(),$("#effect").hide(),$("#panel3").hide(),$("#frm").hide();
              return false;
          });
      });
  
  
  
 
   
    $(document).ready(function(){
    $("#event").click(function(){
           $("#panel2").slideToggle(),
           $("#effect,#effect1,#panel3,#frm,#robovault,#mechomaniac,#genotech,#civiature,#softtricks,#electra,#arcadia,#starnght,#literatus").hide(),$("#logo,#hut2,#hut3,#spandanteam").fadeToggle();
      /*$("#hut1").hide(),$("#hut2").hide(),$("#hut3").hide(),$("#hut4").hide(),$("#apartment1").hide(),$("#apartment2").hide(),$("#fence").hide();*/
      });
  });

    $(document).ready(function(){
    $("#spandanteam").click(function(){
      $("#panel3").slideToggle(),
      $("#effect,#effect1,#panel2,#frm,#mechomaniac,#genotech,#civiature,#softtricks,#electra,#arcadia,#starnght,#literatus").hide(),$("#logo,#hut2,#hut3,#event").fadeToggle();
	  //,$("#effect1").hide(),$("#panel2").hide(),$("#frm").hide();
      /*$("#hut1").hide(),$("#hut2").hide(),$("#hut3").hide(),$("#hut4").hide(),$("#apartment1").hide(),$("#apartment2").hide(),$("#fence").hide();*/
      });
  });
  
    $(document).ready(function(){
		startTime();
	});
	
	$(document).ready(function(){
		counter();
	});
  //close buttons begin
  $(document).ready(function(){
		$("#close0").click(function(){
			$("#loginfrm").hide(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
  
    $(document).ready(function(){
		$("#close").click(function(){
			$("#frm").hide(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close1").click(function(){
			$("#robovault").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close2").click(function(){
			$("#mechomaniac").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close3").click(function(){
			$("#genotech").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close4").click(function(){
			$("#civiature").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close5").click(function(){
			$("#softtricks").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close6").click(function(){
			$("#electra").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close7").click(function(){
			$("#arcadia").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close8").click(function(){
			$("#literatus").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	
	$(document).ready(function(){
		$("#close9").click(function(){
			$("#starnight").hide(),$("#effect1").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
        
        $(document).ready(function(){
		$("#close10").click(function(){
			$("#hospitality").hide(),$("#effect").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
        
        $(document).ready(function(){
		$("#close11").click(function(){
			$("#howtoreach").hide(),$("#effect").show(),$("#logo,#hut3,#hut2,#event,#spandanteam").show();
		});
	});
	//close button ends
	
      /*function pop()
       {
	        alertify.alert("message");
       }*/
  
    function modal1()
	   {
		document.getElementById("frm").style.display='block';
          
	   $("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam,#loginfrm").hide();
	   
	   }
	   
    function modal2()
	   {
		document.getElementById("loginfrm").style.display='block';
          
	   $("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam,#frm").hide();
	   
	   }  
           
           function modal3()
	   {
		document.getElementById("hospitality").style.display='block';
          
	   $("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam,#frm").hide();
	   
	   }
           
           function modal4()
	   {
		document.getElementById("howtoreach").style.display='block';
          
	   $("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam,#frm").hide();
	   
	   }
	   
    function frame()
	   {
		   document.getElementById("if").style.display='block';
		   
		   $("#effect").hide(),$("#effect1").hide(),$("#panel2").hide(),$("#panel3").hide();
		   
	   }
	
  //EVENT BUTTONS   
	   $(document).ready(function(){
		$("#game").click(function(){
			$("#arcadia").show(),$("#effect,#effect1,#panel2,#panel3,#robovault,#electra,#mechomaniac,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	   $(document).ready(function(){
		$("#ec").click(function(){
			$("#robovault").show(),$("#effect,#effect1,#panel2,#panel3,#arcadia,#electra,#softtricks,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
       $(document).ready(function(){
		$("#ee").click(function(){
			$("#electra").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	   $(document).ready(function(){
		$("#me").click(function(){
			$("#mechomaniac").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	 $(document).ready(function(){
		$("#bt").click(function(){
			$("#genotech").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	 $(document).ready(function(){
		$("#cse").click(function(){
			$("#softtricks").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	 $(document).ready(function(){
		$("#ce").click(function(){
			$("#civiature").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	
	$(document).ready(function(){
		$("#literary").click(function(){
			$("#literatus").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	 $(document).ready(function(){
		$("#star").click(function(){
			$("#starnight").show(),$("#effect,#effect1,#panel2,#panel3,#logo,#hut3,#hut2,#event,#spandanteam").hide();
		});
	});
	 
         
	
	
  //accordion begins
	$(function() {
    $( "#accordion" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion1" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion2" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion3" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion4" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion5" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion6" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion7" ).accordion({
		heightStyle: "content"
	});
  });
  
  $(function() {
    $( "#accordion8" ).accordion({
		heightStyle: "content"
	});
  });
  
  //acccordion ends
  
  $(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
        left: width
      }, 15000, function() {
         setTimeout(goLeft, 50);
      });
    }

    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 15000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});



$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#spaceship").animate({
        left: width
      }, 120000, function() {
         setTimeout(goLeft, 50);
      });
    }

    function goLeft() {
        $("#spaceship").animate({
        left: 0
      }, 120000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});


  