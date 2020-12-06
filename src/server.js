const dotenv = require('dotenv').config();
const path = require("path");
const axios = require('axios');
const express = require('express');
const ejs = require('ejs');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
app.set('view engine','ejs');
const apiKey = "e25c4d9a47c79d4667c1f00a6712a7c8";
const apiSecret = "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";
const scopes = 'read_products write_orders read_orders read_draft_orders write_draft_orders read_themes write_themes';
const forwardingAddress = "https://0edc10beeb69.ngrok.io"; // Replace this with your HTTPS Forwarding address
const ordersService = require("./services/Order");
const themeService = require("./services/Theme");
const db = require("./models");
const shop = db.shop;

//  db.sequelize.sync({force: true})
//  .then(() => {
//    console.log('Drop and Resync Db');
//   initial();
//  })
//  .catch((err) =>{
//    console.log(err)
//  });
// parse application/json
app.use(express.json());

initial = () => {
  shop.create({
    id: 1,
    name: "mystoreofdev.myshopify.com"
  });
}
app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/api/orders', (req, res) => {
  ordersService.getOrders(req,res);
});
app.post('/api/exportModal', (req, res) => {
  themeService.exportModal(req,res);
 });
 app.post('/api/saveModal', (req, res) => {
  themeService.saveModalInDatabase(req.body.formHTML);
  
 });
 app.put('/api/saveSettings', (req, res) => {
  themeService.saveSettingsInDatabase(req.body.settings);
  
 });
 app.post('/api/orders', (req, res) => {
  ordersService.addOrder(req,res);


 
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

//install route
app.get('/shopify', (req, res) => {
    const shop = req.query.shop;
    if (shop) {
      const state = nonce();
      const redirectUri = forwardingAddress + '/shopify/callback';
      const installUrl = 'https://' + shop +
        '/admin/oauth/authorize?client_id=' + apiKey +
        '&scope=' + scopes +
        '&state=' + state +
        '&redirect_uri=' + redirectUri;
  
      res.cookie('state', state);
      res.redirect(installUrl);
    } else {
      return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
    }
  });

  //callback route
  app.get('/shopify/callback', (req, res) => {
    const { shop, hmac, code, state } = req.query;

    if (shop && hmac && code) {
      const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
      const accessTokenPayload = {
        client_id: apiKey,
        client_secret: apiSecret,
        code,
      };
  
      request.post(accessTokenRequestUrl, { json: accessTokenPayload })
      .then((accessTokenResponse) => {
        const accessToken = accessTokenResponse.access_token;
        res.redirect("http://localhost:3000/access_token="+accessToken);
      })
      // .catch((error) => {
      //   res.status(error.statusCode).send(error.error.error_description);
      // });
  
    }
    //  else {
    //   res.status(400).send('Required parameters missing');
    // }

    // here you can call your view 



  }); 
  
  app.get('/products', (req, res) => {
    Headers = {
      'X-Shopify-Access-Token':"62eb0866131297c427efeaa1dbc19394",
    };
    request.get("https://mystoreofdev.myshopify.com/admin/api/2019-07/products.json", { headers: Headers })
    .then((shopResponse) => {
      res.end(shopResponse);
      // res.render('result',{products:shopResponse});
      
    })
  })