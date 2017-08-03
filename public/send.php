<!-- SERVIDOR PHP SEND.PHP -->
<?php
// Recupero datos
$email 		=	trim(htmlspecialchars($_POST["email"], ENT_QUOTES));
$comments =	trim(htmlspecialchars($_POST["message"], ENT_QUOTES));
$newsletter =	trim(htmlspecialchars($_POST["newsletter"], ENT_QUOTES));

$error = 0;

// Valido que los campos esten seteados
if (empty($email) || empty($comments) || isset($_POST['newsletter']) && $newsletter !="" || $email == NULL || $comments == NULL) {
  /*
  * DEBUG
  echo '<div><p>Email: '. $email .'</p><div>';
  echo '<div><p>Comentario: '. $comments .'</p><div>';
  if(isset($_POST['newsletter']) && $newsletter !=""){
    echo '<div><p>Seteado</p><div>';
  }
  die();
  */
  echo '<div class="alert alert-danger" role="alert"><p>Todos los campos son obligatorios</p></div>';
  die();
}
else
{
  // VALIDACIONES
  if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/",$email)) {
    echo '<div class="alert alert-danger" role="alert"><p>Por favor, escriba un email válido.</p></div>';
    $error = 1;
    die();
  }
}

// Si no hay errores
if ($error != 1) {

  $suscribir = "No";
  if(isset($_POST['newsletter']) && $newsletter !=""){
    $suscribir = "Si";
  }


  // Envio al administrador del sitio
  // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
  $email_from = $email;
  $email_to = "contacto@153adv.com";
  $email_subject = "Nuevo contacto silviamoscati.com";

  // Contenido del mensaje
  $email_message = "Detalles del formulario de contacto:\n\n";
  $email_message .= "E-mail: " . $email . "\n\n";
  $email_message .= "Comentario: " . $comments . "\n\n";
  $email_message .= "Desea suscribirse: " . $suscribir . "\n\n";
  $email_message .= "Contacto web Silvia Moscati.\n\n";

  // Ahora se envía el e-mail usando la función mail() de PHP
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);


  // Aviso en el formulario
  echo '<div class="alert alert-success" role="alert"><p>El formulario fue enviado exitosamente</p></div>';
  echo "<script>jQuery('#btn_enviar').hide();</script>";
}

?>
