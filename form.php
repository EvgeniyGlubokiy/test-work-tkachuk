<?php
$recepient = "ceo@tkachuk.pro";
$siteName = "test-work";
$input__file = trim($_POST["file"]);
$code = trim($_POST["code"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);


$message = "Имя клиента: $name \nТелефон: $phone \nКод-фильтра: $code \nкартинка: input__file";


$pageTitle = "Заявка с сайта \"$siteName\"";

mail($recepient, $pageTitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
