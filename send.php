<?php
/* Set e-mail recipient */

$myemail  = "harding.lee@gmail.com";


/* Check all form inputs using check_input function */
$name = $_REQUEST['name'];
$lastname  = $_REQUEST['lastname'];
$email  = $_REQUEST['email'];
$message_detail = $_REQUEST['message'];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: $name <noreply@leeharding.uk>" . "\r\n";


$message .= "Hello!\r\n";

$message .="Your form has been submitted by:\r\n <br />";
$message = '<html><body>';
$message .="Name: $name $lastname\r\n <br />";
$message .="Email-id: $email\r\n <br />";
$message .="Message from user: $message_detail\r\n <br />";
$message .= "</body></html>";

/* Send the message using mail() function */
mail($myemail, "Email from the contact form on the maglabs website", $message, $headers);

?>