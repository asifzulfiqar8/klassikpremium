<?php
function sendEmail($to, $subject, $body)
{
  $smtpServer = "smtp.titan.email";
  $port = 465;
  $username = "development@tetratechnologies.io";
  $password = 'ZIm DE~.r9lD>PF';
  $fromEmail = "development@tetratechnologies.io";
  $fromName = "Tetra InTech";

  $headers = "From: $fromName <$fromEmail>\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $connection = fsockopen("ssl://$smtpServer", $port, $errno, $errstr, 10);
  if (!$connection) {
    echo "Could not connect to SMTP server: $errstr ($errno)";
    return false;
  }
  function getServerResponse($connection)
  {
    $response = "";
    while ($str = fgets($connection, 515)) {
      $response .= $str;
      if (substr($str, 3, 1) == " ") break;
    }
    return $response;
  }

  fputs($connection, "EHLO $smtpServer\r\n");
  getServerResponse($connection);

  fputs($connection, "AUTH LOGIN\r\n");
  getServerResponse($connection);

  fputs($connection, base64_encode($username) . "\r\n");
  getServerResponse($connection);

  fputs($connection, base64_encode($password) . "\r\n");
  getServerResponse($connection);

  fputs($connection, "MAIL FROM: <$fromEmail>\r\n");
  getServerResponse($connection);

  fputs($connection, "RCPT TO: <$to>\r\n");
  getServerResponse($connection);

  fputs($connection, "DATA\r\n");
  getServerResponse($connection);

  $message = "Subject: $subject\r\n$headers\r\n\r\n$body\r\n.\r\n";
  fputs($connection, $message);
  getServerResponse($connection);

  fputs($connection, "QUIT\r\n");
  fclose($connection);

  echo "Email sent successfully!";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $userMessage = $_POST['message'];
  $to = "info@litiapublicidad.com";
  $subject = "New Message from Tetra Intech";
  $body = '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Config Email</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: white; background-color: #000; margin: 0; padding: 0; width: 100%;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; background-color: #000;">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" border="0" width="640" style="width: 100%; max-width: 640px; margin: 0 auto; text-align: center; background-color: #000;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 20px; background-color: #000;">
                  <!-- Header Section -->
                  <tr>
                    <td align="center" style="padding: 30px 0; border-bottom: 2px solid #999;">
                      <a href="#"><img src="https://klassikpremium.vercel.app/assets/images/Header%20Logo.png" alt="Logo" style="width: 248px; height: 34px;" /></a>
                      <h2 style="color: white; font-size: 16px; font-weight: 700; text-transform: uppercase;">Hi {firstname} {lastname}</h2>
                      <h4 style="color: white; font-size: 16px; font-weight: 700; text-transform: uppercase;">Thank you for creating an account with enjoy wine</h4>
                    </td>
                  </tr>

                  <!-- Order Details Section -->
                  <tr>
                    <td style="padding: 40px 0;">
                      <h3 style="font-size: 20px; font-weight: 700; text-decoration: underline; text-transform: uppercase;">Order Details</h3>
                      <p style="font-size: 16px;">Order: <span>{order_name} Placed on {date}</span></p>
                      <p style="font-size: 16px;">Payment: <span>{payment}</span></p>
                    </td>
                  </tr>

                  <!-- Table Section -->
                  <tr>
                    <td style="padding: 32px; background: #202224;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="1" style="border-collapse: collapse; color: white;">
                        <thead>
                          <tr>
                            <th style="padding: 10px; font-size: 12px; font-weight: bold;">REFERENCE</th>
                            <th style="padding: 10px; font-size: 12px; font-weight: bold;">PRODUCT</th>
                            <th style="padding: 10px; font-size: 12px; font-weight: bold;">UNIT PRICE</th>
                            <th style="padding: 10px; font-size: 12px; font-weight: bold;">QUANTITY</th>
                            <th style="padding: 10px; font-size: 12px; font-weight: bold;">TOTAL PRICE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="5" style="text-align: center; padding: 10px; font-weight: bold;">(PAYMENT)</td>
                          </tr>
                          <tr>
                            <td colspan="5" style="text-align: center; padding: 10px; font-weight: bold;">(DISCOUNTS)</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="4" style="padding: 10px;">PRODUCT</td>
                            <td style="padding: 10px; text-align: right;">{{TOTAL_PRODUCTS}}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="padding: 10px;">DISCOUNTS</td>
                            <td style="padding: 10px; text-align: right;">{{TOTAL_DISCOUNTS}}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="padding: 10px;">GIFT-WRAPPING</td>
                            <td style="padding: 10px; text-align: right;">{{TOTAL_SHIPPING}}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="padding: 10px;">TOTAL TAX PAID</td>
                            <td style="padding: 10px; text-align: right;">{{TOTAL_TAX_PAID}}</td>
                          </tr>
                          <tr>
                            <td colspan="4" style="padding: 10px;">TOTAL PAID</td>
                            <td style="padding: 10px; text-align: right;">{{TOTAL_PAID}}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </td>
                  </tr>
                  <!-- Lower Information Box -->
                  <tr>
                    <td style="padding: 40px 0; font-size: 16px; border-bottom: 1px solid #fff;">
                      <h3 style="color: #facc15; font-size: 22px; font-weight: 700; text-transform: uppercase; padding-bottom: 20px; border-bottom: 1px solid #fff;">
                        You have selected to pay by wire transfer
                      </h3>
                      <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 16px;">
                        <tr>
                          <td style="padding: 10px; color: #fff;">Carrier</td>
                          <td style="padding: 10px; text-align: right; color: #fff;">{carrier}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px;">Payment</td>
                          <td style="padding: 10px; text-align: right;">{payment}</td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 16px;">
                        <tr>
                          <td width="50%" style="text-align: center; padding: 20px;">
                            <h4 style="font-size: 16px; font-weight: 500; text-transform: uppercase; color: #fff;">Delivery Address</h4>
                            <p style="color: #fff;">{delivery_block_html}</p>
                          </td>
                          <td width="50%" style="text-align: center; padding: 20px;">
                            <h4 style="font-size: 16px; font-weight: 500; text-transform: uppercase; color: #fff;">Billing Address</h4>
                            <p style="color: #fff;">{invoice_block_html}</p>
                          </td>
                        </tr>
                      </table>
                      <p style="padding-top: 20px;">You can review your order and download your invoice from the “Order history” section of your customer account by clicking “My account” on our shop.</p>
                      <p style="color: #fff;">If you have a guest account, you can follow your order via the “Guest Tracking” section on our shop.</p>
                    </td>
                  </tr>

                  <!-- Footer Section -->
                  <tr>
                    <td style="padding: 20px 0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="60%" style="padding-right: 20px;">
                            <a href="#"><img src="https://klassikpremium.vercel.app/assets/images/Header%20Logo.png" alt="Logo" style="width: 188px; height: 26px;" /></a>
                            <p style="font-size: 12px; opacity: 0.6; color: #fff !important;">Monday-Friday: 09:00-19:00</p>
                            <h4 style="font-size: 14px; font-weight: 700; color: #fff !important;">+34 932 684 286 / +34 608 845 245</h4>
                          </td>
                          <td width="40%">
                            <p style="font-size: 12px; opacity: 0.6; color: #fff !important;">Our Location:</p>
                            <h4 style="font-size: 14px; font-weight: 700; color: #fff !important;">
                              Avenida Cornella 144, 7.4 08950 Esplugues De Llobregat Barcelona, Spain
                            </h4>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" style="padding: 16px 0; background-color: #000; text-align: center;">
                        <tr>
                           <td>
                              <a href="#" style="margin: 0 8px;"><img src="https://klassikpremium.vercel.app/assets/images/Instagram.png" alt="Instagram" style="width: 24px; height: 24px;"></a>
                              <a href="#" style="margin: 0 8px;"><img src="https://klassikpremium.vercel.app/assets/images/facebook.png" alt="Facebook" style="width: 24px; height: 24px;"></a>
                              <a href="#" style="margin: 0 8px;"><img src="https://klassikpremium.vercel.app/assets/images/Twitter.png" alt="Twitter" style="width: 24px; height: 24px;"></a>
                              <a href="#" style="margin: 0 8px;"><img src="https://klassikpremium.vercel.app/assets/images/Youtube.png" alt="YouTube" style="width: 24px; height: 24px;"></a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 0;">
                            <p style="font-size: 12px; opacity: 0.6; color: #fff !important;">All Rights Reserved &copy; Enjoy Wine 2023</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>';


  sendEmail($to, $subject, $body);
}
