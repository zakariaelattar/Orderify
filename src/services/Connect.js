import React, { Component } from 'react';
import axios from 'axios';
import nonce from 'nonce';
import querystring from 'querystring';
const apiKey = "e25c4d9a47c79d4667c1f00a6712a7c8";
const apiSecret = "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";
const scopes = 'read_products';
const forwardingAddress = "https://3d99e3adabfa.ngrok.io";
const shop = "mystoreofdev.myshopify.com";

const state = "";
class Connect extends Component {

    
    redirectUri = forwardingAddress+"/shopify/callback";
    installUrl='https://'+shop+'/admin/oauth/authorize?client_id='+apiKey+
    '&scope='+scopes+'&state='+state
    +'&redirect_uri='+this.redirectUri;
    
    constructor () {
        super();
        this.authenticate();
    }

    authenticate = async () =>{
       axios.get(this.installUrl).then((res1)=>{
           console.log(res1);
           axios.get("http://3d99e3adabfa.ngrok.io/?hmac=4621237f82380c8e9bfc136940bbe2d174ab21945de518f3d9bbe0d2f01eb056&shop=mystoreofdev.myshopify.com&timestamp=1604160637").then((res)=>{
               console.log(res);
           })
       });

//         if (shop && hmac && code) {
//             // DONE: Validate request is from Shopify
//             const map = Object.assign({}, req.query);
//             delete map['signature'];
//             delete map['hmac'];
//             const message = querystring.stringify(map);
//             const providedHmac = Buffer.from(hmac, 'utf-8');
//             const generatedHash = Buffer.from(
//               crypto
//                 .createHmac('sha256', apiSecret)
//                 .update(message)
//                 .digest('hex'),
//                 'utf-8'
//               );
//             let hashEquals = false;
        
//             try {
//               hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
//             } catch (e) {
//               hashEquals = false;
//             };
        
//             if (!hashEquals) {
//               console.log('HMAC validation failed');
//             }
        
//             // DONE: Exchange temporary code for a permanent access token
            const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
            const accessTokenPayload = {
              client_id: apiKey,
              client_secret: apiSecret,
              code:'',
            };
        
            axios.post(accessTokenRequestUrl, { json: accessTokenPayload })
            .then((accessTokenResponse) => {
              const accessToken = accessTokenResponse.access_token;
              console.log(accessToken);
    });

//               // DONE: Use access token to make API call to 'shop' endpoint
//               const shopRequestUrl = 'https://' + shop + '/admin/api/2020-10/shop.json';
               
//               const shopifyHeaders = {
//                 'X-Shopify-Access-Token': accessToken,
//               };
        
//               axios.get(shopRequestUrl,{headers:shopifyHeaders} )
//               .then((shopResponse) => {
                
//                  console.log(shopResponse);
//               })
//               .catch((error) => {
// console.log(error)              });
//             })
//             .catch((error) => {
// console.log(error);            });
        
//           } else {
//             console.log('Required parameters missing');
//           }
      
//           // here you can call your view 
//         console.log('result');
      
  }


    render() {
    
        return (
            <div>
                
            </div>
        );
    }
}

export default Connect;
