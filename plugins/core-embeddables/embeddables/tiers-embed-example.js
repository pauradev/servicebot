<div id="servicebot-tiers-embed"></div>
<script src="https://js.stripe.com/v3/"></script>
<script src="https://subscribe.printaura.com/js/servicebot-tiers-embed.js" type="text/javascript"></script>
<script  type="text/javascript">
    Servicebot.Tiers({
        templateId : 1,
        url : "https://subscribe.printaura.com",
        selector : document.getElementById('servicebot-tiers-embed'),
        handleResponse : (response) => {
            //Response function, you can put redirect logic or app integration logic here
        },
        forceCard : false, //set to true if you want credit card to be a required field for the customer
        setPassword : false //set to true if you want customer to fill out a password
    })
</script>