<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/30
 * Time: 19:11
 */
$uname = $_POST["username"];
$upassword = $_POST["password"];
$conn = new mysqli("localhost","root","","myshop",3306);
$sql = "select * from users where uName = '$uname' and uPassword = '$upassword'";
$res = $conn -> query($sql);
if($res->num_rows == 1){
    echo'{"login":true,"msg":"登录成功"}';
}else{
    echo'{"login":false,"msg":"登录失败"}';
}
