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


// Phone Number
if (empty($_POST["phone_number"])) {
    $errorMSG .= "Number is required ";
} else {
    $phone_number = $_POST["phone_number"];
}

// Tipo Sesion
if (empty($_POST["tipo"])) {
    $errorMSG .= "Tipo Sesion is required ";
} else {
    $tipo = $_POST["tipo"];
}

// Horario
if (empty($_POST["horario"])) {
    $errorMSG .= "Horario is required ";
} else {
    $horario = $_POST["horario"];
}


$EmailTo = "psicolinemh@gmail.com";

$Subject = "Reservar Cupo - Psicoline";

// prepare email body text
$Body = "";
$Body .= "Nombre: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Correo Electrónico: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Teléfono: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Tipo de Sesión: ";
$Body .= $tipo;
$Body .= "\n";
$Body .= "Horario de preferencia: ";
$Body .= $horario;
$Body .= "\n";

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