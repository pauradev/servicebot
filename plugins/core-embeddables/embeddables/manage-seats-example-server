function generateJWT(email, key) {
    var crypto = require('crypto');
    var hmac = crypto.createHmac('sha256', key); 

    var payload = {
        "email": email
    };
    var header = {
        "alg": "HS256",
        "typ": "JWT"
    };
    function cleanBase64(string) {
        return string.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

    function base64encode(object) { 
        return cleanBase64(Buffer.from(JSON.stringify(object)).toString("base64"));
    }

    var data = base64encode(header) + "." + base64encode(payload);
    hmac.update(data);
    return data + "." + cleanBase64(hmac.digest('base64'));
}
var SECRET_KEY = "361642af49ec82a623b8fd511fb336d98f47bcdc6567754c4d7bc8abf7fd"; //keep this key safe!
var userToken = generateJWT(user.email, SECRET_KEY);