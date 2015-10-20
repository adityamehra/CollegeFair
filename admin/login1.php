<?php
include('conect1.php');
session_start();
if(isset($_POST['login']))
{
 $user_name=$_POST['username'];
 $pass_name=$_POST['password'];

$admin_query= "SELECT * FROM spandan WHERE EMAIL='$user_name' AND PASSWORD='$pass_name' ";
$run=mysql_query($admin_query);
 $count=mysql_num_rows($run);

if($count > 0)
{
$_SESSION['username']=$user_name;
?>
<script>
window.location='../index.html?name=<?php echo $user_name; ?>';
</script>
<?php
}
else
{
echo "<script>alert('username and passwords do not match')</script>";
?>
<script>
window.location='login.php';
</script>

<?php
}
}
?>
