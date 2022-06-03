<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


// Area
if (empty($_POST["area"])) {
    $errorMSG .= "Number is required ";
} else {
    $area = $_POST["area"];
}

$EmailTo = "psicolinemh@gmail.com";

$Subject = "Área Reservar - Psicoline";

// prepare email body text
$Body = "";
$Body .= "Nombre: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Correo Electrónico: ";
$Body .= $email;
$Body .= "\n";
$Body .= "El formulario pertenece al área: ";
$Body .= $area

// send email
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Pronto nos pondremos en contacto contigo.";
}else{
    if($errorMSG == ""){
        echo "No funcionó wey :(";
    } else {
        echo $errorMSG;
    }
}

?>