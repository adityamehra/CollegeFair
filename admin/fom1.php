<?php
include('conect1.php');
 "<br><i>";
 $a=$_REQUEST['name'];
 "   ";
 $b=$_REQUEST['lname'];
 "<br><i>";
 "CONTACT NO:  "  ;
$c=$_REQUEST['ph'];
 "<br><i>";
 $to=$_REQUEST['email'];
 "<br><i>";
 $e=$_REQUEST['collegename'];
 "<br><i>";
$length = 7;
$randomString = substr(str_shuffle("0123456789"), 0, $length);
$length2 = 7;
$randomString2 = substr(str_shuffle("0123456789"), 0, $length2);

$d="INSERT INTO spandan(`NAME`,`LASTNAME`,`PHNUM`,`EMAIL`,`COLLEGE`,`USERNAME`,`PASSWORD`)VALUES('$a','$b','$c','$to','$e','SPAN/14/$randomString','SPAN$randomString2')";
mysql_query($d);

require_once "Mail.php";

$from = '<himanshu885986@gmail.com>';
$subject = 'You have successfully registered in spandan14';
$body = "Hi $a,\n\nCongratulations you have successfully registered in spandan'14.\n\n Please confirm your registration by clicking on dis link http://www.techspandan.org/ \n\n\nYour username is SPAN/14/$randomString (This will serve as ur id inside our college campus) \n\n Your password is SPAN$randomString2";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'himanshu885986@gmail.com',
        'password' => 'ishu_8859863030'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
?>


<html>
<style>

.fancy{background-image:url(7.jpg)}


</style>
<script>
alert("YOU HAVE SUCCESFULLY REGISTERED");
window.location='../index.html';
</script>


</html>