<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "vanessa@thespecific.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}

if (isset($_POST['user-submit'])) {
    $name1 = $_POST['user-name'];
    $mailFrom1 = $_POST['user-mail'];
    $message1 = $_POST['user-message'];

    $mailTo1 = "vanessa@thespecific.com";
    $headers1 = "From: ".$mailFrom;
    $txt1 = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo1, $txt1, $headers1);
    header("Location: index.php?mailsend");
}