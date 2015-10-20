<?php
session_start();
?>
<html>
<head><h1><center>ADMIN LOGIN
<title>admin login</title>
</head>
<body bgcolor="grey">

<table align="center">
<tr><td>
<form  method="post" action="inter.php">
<tr>
<td><font face="Lucida Sans" size="+2" ><b>USERNAME</b></font></td>
<td><input type="text" name="user_name" placeholder="user name" required/><br /><br /></td>
</tr>
<tr>
<td><font face="Lucida Sans" size="+2" ><b>PASSWORD</b></td>
<td><input type="password" name="pass_word" placeholder="password"  required /><br /><br /></td>
</tr>
<tr>
<td><input type="submit" name="login"  value="login"/></td>
</tr>
</form>
</body>
</html>

