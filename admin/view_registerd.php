<?php
session_start();
if(isset($_SESSION['user_name']))
{
?>

<html>

<head>
<title> ADMIN PANEL</title>
</head>
<link rel="stylesheet" href="style.css" />
<body>

<div id="header"><center><h1><a href="admin.php">Welcome to the admin panel</a></h1></center></div>
<div id="sidebar">
<h2><a href="logout.php">Logout</a></h2>
<h2><a href="view_registerd.php">View registered students </a></h2>
</div>
<table width="1100"; height="50" border="5" align="center">
<tr>
<td colspan="500" align="center" bgcolor="#B0D6FF"><b><font face="Comic Sans MS">VIEW DETAILS OF THE REGISTERED STUDENTS</font></b></td>
</tr>
<tr>
<th>S NO.</th>
<th>NAME</th>
<th>LASTNAME</th>
<th>CONTACT NO.</th>
<th>E-MAIL</th>
<th>COLLEGE</th>
<th>USERNAME</th>
<th>PASSWORD</th>
</tr>
<?php
include('conect1.php');
$info="SELECT * FROM spandan ";
$fetch=mysql_query($info);
$w=0;
while($row=mysql_fetch_array($fetch))
{
$w++;
$name=$row['NAME'];
$lname= $row['LASTNAME'];
$phnum = $row['PHNUM'];
$email= $row['EMAIL'];
$college= $row['COLLEGE'];
$username= $row['USERNAME'];
$pass= $row['PASSWORD'];
?>
<tr align="center" bgcolor="#FFB3FF">
<td><?php echo $w; ?></td>
<td><?php echo $name; ?></td>
<td><?php echo $lname; ?></td>
<td><?php echo $phnum; ?></td>

<td><?php echo $email; ?></td>
<td><?php echo $college; ?></td>
<td><?php echo $username; ?></td>
<td><?php echo $pass; ?></td>

</tr>
<?php } ?>
</body>
<?php } 

else
{
header("Location: adminlogin.php");
}

?>