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
      
       console.log(shopResponse.data);
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


   axios.post(shopRequestUrl, { headers: shopRequestHeaders },{
    
    
        "order": {
          "line_items": [
            {
              "variant_id": 447654529,
              "quantity": 1
            }
          ]
        }
      
      })
    .then((shopResponse) => {
      
       console.log(shopResponse.data);
    })
    .catch((error) => {
        console.log(error);
    });
}