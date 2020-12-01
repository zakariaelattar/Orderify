const axios = require("axios");
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid';
var shopRequestHeaders;
// product.liquid asset
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=templates/product.liquid
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid
var modalCode;

// get modal code from database
// get web product page from shopify
// run the page as a DOM with JSdom
// extract the buy now and add to cart code
// replace it with modal code
// append the code to the parent file
// send file throught PUT request


const getModalHtml = () => {
  
  fs.readFile("public/modal.html","utf-8",(err,data)=>{modalCode = data});

  try {
    const dom = new JSDOM(shopResponse.data.asset.value);
    let wrapper = dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0];
    fs.readFile("public/modal.html","utf-8",(err,data)=>{
      modalCode = data;
      console.log(modalCode);
      dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML = modalCode;
      let same = dom.window.document.getElementsByTagName("BODY")[0].innerHTML;
        fs.writeFile("block.liquid",same,() =>{
        this.addModal(same,access_token)
        console.log("yes");
});
    });
    //console.log(same);

   
  }
  catch(e) {
      console.log(e); 
           }
}

/** 
get product page from shopify
*/
const getProductPage = async (url,header) => {
  return axios.get(url,{ headers: header }); x;
//   axios.get(url,
//   { headers: header })
// .then((shopResponse) => {
//  (shopResponse.data.asset.value);
//       try {
//         const dom = new JSDOM(shopResponse.data.asset.value);
//         let wrapper = dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0];
//         fs.readFile("public/modal.html","utf-8",(err,data)=>{
//           modalCode = data;
//           console.log(modalCode);
//           dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML = modalCode;
//           let same = dom.window.document.getElementsByTagName("BODY")[0].innerHTML;
//             fs.writeFile("block.liquid",same,() =>{
//             this.addModal(same,access_token)
//             console.log("yes");
//  });
//         });
//         //console.log(same);


//       }
//       catch(e) {
//           console.log(e); 
//                }

// })
// .catch((error) => {
// console.log(error)
// });
 

}
exports.processProductPage = async (req,res) => {
    let access_token = req.headers["x-shopify-access-token"];
     shopRequestHeaders = {'X-Shopify-Access-Token': access_token};
     getProductPage(shopRequestUrl,shopRequestHeaders).then((productPage) => {
     let dom =  new JSDOM(productPage);
     console.log(productPage);
      console.log(dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0]);

     })
     .catch((err) => {
       console.log(err);
     })
    
  
}

/** 
making DOM management easier
*/
const bindResponseToDom = (liquid_data) => {
  return new JSDOM(liquid_data);
 
}
/** 
extracting add to cart and buy now code to replace it by the built code
*/
const extractAddCartCode = (dom) => {
  console.log("extracting");
  return dom
  .window
  .document
  .getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0];

}
/** 
replace the code with the built code
*/
const replaceCode = (modal_code,original_code) => {
  dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML = modalCode;

}

/** 
create a backup of the product page for a futur usage
*/
const createBackup = () => {

}
/** 
save the product page and send it to shopify
*/
const save = (htmlCode,a) => {


  const new_code = htmlCode
  .replace(/" endif  /g, '" {% endif %}  ')
   .replace(/" endif/g, '" {% endif %} ')
   .replace(/"="/g, '=')
   .replace(/option.selected_value== %}/g, 'option.selected_value==value %}')
   .replace(/{%="" if="" option.selected_value="=value" %}/g, '{%  if  option.selected_value==value %}')
   .replace(/= %}/g, ' ')
   .replace(/=""/g, ' ')
   .replace(/&gt;/g,'>')
   .replace(/&lt;/g,'<')
   .replace(/" endif  %} /g,'"{% endif %}')
   .replace(/" endunless/g,'" {%endunless');
    let access_token = a;
          
            fs.writeFile("block.liquid",new_code,() =>{
              console.log("yes");
            });
      console.log(htmlCode);


    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json';
     const shopRequestHeaders = {
      'X-Shopify-Access-Token': access_token
    };


   axios.put(shopRequestUrl,
    {  
        "asset": {
          "key": "sections/product-template.liquid",
          "value":new_code
        }
      },
     { headers: shopRequestHeaders }
)
    .then((shopResponse) => {
      
     console.log(shopResponse);
    })
    .catch((error) => {
        console.log(error.config.data);
    });
}


/**
 * 
 * {% comment %}\n  The contents of the product.liquid template can be found in /sections/product-template.liquid\n{% endcomment %}\n\n{% section 'product-template' %}\n\n<script>\n  // Override default values of shop.strings for each template.\n  // Alternate product templates can change values of\n  // add to cart button, sold out, and unavailable states here.\n  theme.productStrings = {\n    addToCart: {{ 'products.product.add_to_cart' | t | json }},\n    soldOut: {{ 'products.product.sold_out' | t | json }},\n    unavailable: {{ 'products.product.unavailable' | t | json }}\n  }\n</script>\n\n{% assign current_variant = product.selected_or_first_available_variant %}\n\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"http://schema.org/\",\n  \"@type\": \"Product\",\n  \"name\": {{ product.title | json }},\n  \"url\": {{ shop.url | append: product.url | json }},\n  {%- if product.featured_media -%}\n    {%- assign media_size = product.featured_media.preview_image.width | append: 'x' -%}\n    \"media\": [\n      {{ product.featured_media | img_url: media_size | prepend: \"https:\" | json }}\n    ],\n  {%- endif -%}\n  \"description\": {{ product.description | strip_html | json }},\n  {%- if current_variant.sku != blank -%}\n    \"sku\": {{ current_variant.sku | json }},\n  {%- endif -%}\n  \"brand\": {\n    \"@type\": \"Thing\",\n    \"name\": {{ product.vendor | json }}\n  },\n  \"offers\": [\n    {%- for variant in product.variants -%}\n      {\n        \"@type\" : \"Offer\",\n        {%- if variant.sku != blank -%}\n          \"sku\": {{ variant.sku | json }},\n        {%- endif -%}\n        \"availability\" : \"http://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}\",\n        \"price\" : {{ variant.price | divided_by: 100.00 | json }},\n        \"priceCurrency\" : {{ cart.currency.iso_code | json }},\n        \"url\" : {{ shop.url | append: variant.url | json }}\n      }{% unless forloop.last %},{% endunless %}\n    {%- endfor -%}\n  ]\n}\n</script>\n
 * 
 * 
 */