<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'vanessa@thespecific.com';
    $email_subject = "New Email From M&M Cleaning";
    $email_body = "User Name: $name.\n".
                       "User Email: $visitor_email.\n".
                            "User Message: $message.\n";

    $to = "vanessa@thespecific.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>