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

// MSG SUBJECT
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $msg_subject = $_POST["msg_subject"];
}

// Phone Number
if (empty($_POST["phone_number"])) {
    $errorMSG .= "Number is required ";
} else {
    $phone_number = $_POST["phone_number"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "psicolinemh@gmail.com";

$Subject = "Contáctanos - Psicoline";

// prepare email body text
$Body = "";
$Body .= "Nombre: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Correo Electrónico: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Razón: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Teléfono: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Mensaje: ";
$Body .= $message;
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