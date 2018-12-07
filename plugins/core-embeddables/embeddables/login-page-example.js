<div id="servicebot-login-form"></div>
<script src="https://js.stripe.com/v3/"></script>
<script src="https://js.servicebot.io/js/servicebot-login-embed.js" type="text/javascript"></script>
<script  type="text/javascript">
    Servicebot.Login({
        url : "https://myprintingbussiness.serviceshop.io",
        selector : document.getElementById('servicebot-login-form'),
        handleResponse : (response) => {
            console.log(response);
            //response.token should be validated on your server and a new session created for the user to access your app
        },
    })
</script>