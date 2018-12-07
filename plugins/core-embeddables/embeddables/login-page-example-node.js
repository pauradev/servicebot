function validateJWT(jwt, key) {
    var crypto = require('crypto');
    var hmac = crypto.createHmac('sha256', key);
    var split = jwt.split(".");
    function cleanBase64(string) {
        return string.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

    var data = split[0] + "." + split[1];
    hmac.update(data);
    if (split[2] === cleanBase64(hmac.digest('base64'))){
        var base64 = split[1].replace('-', '+').replace('_', '/');
        var parsed  = JSON.parse(new Buffer(base64, 'base64').toString('binary'));
        if(new Date(parsed.exp * 1000) <= new Date()){
            console.log("Token has expired");
            return false;
        }else{
            return parsed;
        }
    }else{
        console.log("invalid token signature");
        return false;
    }
}

var SECRET_KEY = "361642af49ec82a623b8fd511fb336d98f47bcdc6567754c4d7bc8abf7fd"; //keep this key safe!


