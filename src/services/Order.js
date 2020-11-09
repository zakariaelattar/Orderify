const axios = require("axios");


exports.getOrders = (req,res) => {

    let access_token = req.headers["x-shopify-access-token"];

    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/orders.json';
     const shopRequestHeaders = {
      'X-Shopify-Access-Token': access_token,
    };
console.log(shopRequestHeaders);
   axios.get(shopRequestUrl, { headers: shopRequestHeaders })
    .then((shopResponse) => {
      
       console.log(shopResponse.config);
    })
    .catch((error) => {
        console.log(error);
    });

}

exports.addOrder = (req,res) => {
    let access_token = req.headers["x-shopify-access-token"];
    console.log("melo :"+access_token);

    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/orders.json';
     const shopRequestHeaders = {
      'X-Shopify-Access-Token': access_token
    };


   axios.post(shopRequestUrl,
    {
      "order": {
        "line_items": [
          {
            "title": "Custom Tee",
            "price": "20.00",
            "quantity": 2
          }
        ],
        "applied_discount": {
          "description": "Custom discount",
          "value_type": "fixed_amount",
          "value": "10.0",
          "amount": "10.00",
          "title": "Custom"
        },
        "note": "first name: mouad ",
        "use_customer_default_address": true
      }
    },
     { headers: shopRequestHeaders }
)
    .then((shopResponse) => {
      
     console.log(shopResponse.data);
    })
    .catch((error) => {
        console.log(error.response);
    });
}