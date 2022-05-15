<?php

$errorMSG = "";


// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Se requiere email ";
} else {
    $email = $_POST["email"];
}



$EmailTo = "psicolinemh@gmail.com";

$Subject = "Suscripción - Psicoline";

// prepare email body text
$Body = "Hola, ¡ha llegado una suscripción nueva!";
$Body .= "\n";
$Body .= "Correo Electrónico: ";
$Body .= $email;
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Gracias por suscribirte a nosotros.";
}else{
    if($errorMSG == ""){
        echo "Algo ha salido mal.";
    } else {
        echo $errorMSG;
    }
}

?>