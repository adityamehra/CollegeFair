<?php
session_start();
if(isset($_SESSION['user_name']))
{
$name=$_GET['name'];
?>

<html>
<style>
.a{ position:absolute; top:5px; font:"Comic Sans MS"; right:10px; font-size:30px;}
</style>

<head>
<title> ADMIN PANEL</title>
</head>
<link rel="stylesheet" href="style.css" />
<body>

<div id="header"><center><h1><a href="admin.php">Welcome to the admin panel</a></h1></center>
<div class="a"><?php echo "Hi   ";
echo $name; ?></div></div>
<div id="sidebar">
<h2><a href="logout.php">Logout</a></h2>
<h2><a href="view_registerd.php">View registered students </a></h2>
<h2><a href="view_blockosort.php">View registered students </a></h2>

</div>
<div id="welcome">Welcome to your admin panel.
<p>This is where you can manage your website data and files</p></div> 
</body>
</html>
<?php } 

else
{
header("Location: adminlogin.php");
}

?>