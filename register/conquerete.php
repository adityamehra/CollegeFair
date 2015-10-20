<?php
session_start();
if(isset($_SESSION['username']))
{
	$event="conquerete";
?>




<!DOCTYPE html>
<html lang="en"><!-- This is a demonstration of HTML5 goodness with healthy does of CSS3 mixed in --><head>
    
    <title>CSS3/HTML5 Contact Form by Freshdesignweb.com</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <!--[if IE]>
    	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="style.css" type="text/css" media="screen">
</head>
<script type="text/javascript">
function fun()
{
	if((document.getElementById('t1').value).length!=10)	
	{
alert("plz enter the number of 10 digits");
	document.getElementById('t1').focus();
	return false;
	}
}
</script>
<body>
   <div  class="cover">
    		<h4 class="contact">REGISTER</h4>
    		<form id="contactform" method="post" action="event.php?event=<?php echo $event; ?>"> 
    			<p class="contact"><label for="name">Name</label></p> 
    			<input id="name" name="name" placeholder="First and last name" required tabindex="1" type="text"> 
    			 
    			<p class="contact"><label for="email">Contact no.</label></p> 
    			<input  name="ph" maxlength="10" id="t1" pattern="[0-9]*" required/ tabindex="2" type="text"> 

                <p class="contact"><label for="Subject">userid</label></p> 
    			<input id="subject" name="userid" placeholder="eg:SPAN/14/879879" required tabindex="2" type="text"> 
    			 
                <p class="contact"><label for="Subject">Email</label></p> 
    			<input id="subject" name="email" placeholder="example@domain.com" required tabindex="2" type="text"> 
    			<input name="submit" id="submit"  value="Submit" type="submit" onClick="return fun()"> 	 
    		</form> 
     </div>       
     <div style="float:right; padding-right:30px;padding-bottom:30px;"><a href="../index.html"> Back to homepage </a></div>
</body></html><?php } 

else
{
header("Location:../admin/login.php");
}

?>