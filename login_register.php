<?php
session_start();
require_once 'Config.php';

if(isset($_POST['SignUp'])){
    $name=$_POST['Name'];
    $age=$_POST['Age'];
    $Gender=$_POST['Gender'];
    $email=$_POST['email'];
    $password=password_hash($_POST['password'],PASSWORD_DEFAULT);

    $checkEmail=$conn->query("SELECT email FROM users WHERE email='$email'");
    if($checkEmail->num_rows>0){
        $_SESSION['register_error']='Email is already registered';
        $_SESSION['active_form']='register';
    }
    else{
        $conn->query("INSERT INTO users (name,age,Gender,email,password) VALUES('$name,$age,$Gender,$email,$password)");
    }
    header("Location:index.php");
    exit();
}


if(isset($_POST['Login']))
{
    $role=$_POST['Role'];
    $Emil=$_POST['Email'];
    $Password=$_POST['Password'];

    $result=$conn->query("SELECT *FROM users WHERE email= '$email'");
    if($checkEmail->num_rows>0){
        $users=$result->fetch_assoc();
        if(password_verify($password,$user['password'])){
            $_SESSION['role']=$role;
            $_SESSION['email']=$email;

            if($user['role']=='admin'){
                header("Location:admin_dashboard.php");
            }
            else
            {
                header("Location:user_dashboard.php");
            }
            exit();}}
        $_SESSION['login_error']='Incorrect email or password';
        $_SESSION['active_form']='Login';
        header("Location:index.php");
        exit();
    }

?>