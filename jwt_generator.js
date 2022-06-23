//var jwt = require('json-web-token');
// 
//var payload = {
//    "ip": "10.12.0.10",
//    "organization": "HAVAN MARKETPLACE",
//    "oi": "33361746.",
//    "exp": 1612891970,
//    "login": "havan.marketplace@webjump.com.br"
//  };
// 
//var secret = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVfxWEym1WAYwGhrNjvEUW RgB +p9oUPGu59yePzUT+I/d+C2x9xjURa/Zc+VVZsK2OrHga1+4X4iO1q+nWhmXkD 5VysCaJ9 vf7IVntWogFpaBauG2EI7J93Y/sKUBxwxSDZPKhovsaM3DxoNCfW4lUHAWnlIuzPx3 02TB GtfCpUwIDAQAB';
//
//// encode
//jwt.encode(secret, payload, function (err, token) {
//    if (err) {
//      console.error(err.name, err.message);
//    } else {
//      console.log(token);
//   
//      // decode
//      jwt.decode(secret, token, function (err_, decodedPayload, decodedHeader) {
//        if (err) {
//          console.error(err.name, err.message);
//        } else {
//          console.log(decodedPayload, decodedHeader);
//        }
//      });
//    }
//});
var jwt = require('jsonwebtoken');

var payload = {
    "ip": "10.12.0.10",
    "organization": "HAVAN MARKETPLACE",
    "oi": "33361746.",
    "exp": 1612891970,
    "login": "havan.marketplace@webjump.com.br"
  };

var secret = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVfxWEym1WAYwGhrNjvEUW RgB +p9oUPGu59yePzUT+I/d+C2x9xjURa/Zc+VVZsK2OrHga1+4X4iO1q+nWhmXkD 5VysCaJ9 vf7IVntWogFpaBauG2EI7J93Y/sKUBxwxSDZPKhovsaM3DxoNCfW4lUHAWnlIuzPx3 02TB GtfCpUwIDAQAB';
var algo = { algorithm: 'RS256'};

var token = jwt.sign(payload, secret, algo);
console.log(token);
