const axios = require("axios");
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;
// product.liquid asset
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=templates/product.liquid
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid

exports.getProductPage = (req,res) => {

    let access_token = req.headers["x-shopify-access-token"];

    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid';
     const shopRequestHeaders = {
      'X-Shopify-Access-Token': access_token,
    };
    console.log(shopRequestHeaders);
   axios
   .get(shopRequestUrl, { headers: shopRequestHeaders })
   .then((shopResponse) => {
         console.log("-- dom ------");
         
         const dom = new JSDOM(shopResponse.data.asset.value);
         console.log(dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML); // "Hello world"        
         var wrapper = dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0];
        try {
            //wrapper.innerHTML='hola';
            let same = dom.window.document.getElementsByTagName("BODY")[0].innerHTML;
            fs.writeFile("same.liquid",same,() =>{
              console.log("yes");
            });            
            fs.writeFile("response.liquid",shopResponse.data.asset.value,() =>{
              console.log("yes");
            });
           // this.addModal(,access_token)
           // console.log("difffffff 2");
            //console.log(same);
         
        }
        catch(e) {
            console.log(e);        }
        //console.log(shopResponse.data.asset.value);
    })
    .catch((error) => {
       // console.log(error);
    });

}
exports.saveForm = (htmlCode) => {
  
console.log(htmlCode);
// process to save it in database 
}
exports.addModal = (htmlCode,a) => {
    let old_html;
    let new_html;
    let modal_code = '';

    let access_token = a;
    // console.log("melo :"+access_token);
      console.log(htmlCode);
    //   console.log(
    //       htmlCode.replace(/"/g, 'd')

    //       );
    // console.log("ffff");

    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json';
     const shopRequestHeaders = {
      'X-Shopify-Access-Token': access_token
    };


   axios.put(shopRequestUrl,
    {
        "asset": {
          "key": "sections/product-template.liquid",
          "value": htmlCode
        }
      },
     { headers: shopRequestHeaders }
)
    .then((shopResponse) => {
      
     console.log(shopResponse);
    })
    .catch((error) => {
        //console.log(htmlCode);
        
     console.log(error.config.data);
    });
}


/**
 * 
 * {% comment %}\n  The contents of the product.liquid template can be found in /sections/product-template.liquid\n{% endcomment %}\n\n{% section 'product-template' %}\n\n<script>\n  // Override default values of shop.strings for each template.\n  // Alternate product templates can change values of\n  // add to cart button, sold out, and unavailable states here.\n  theme.productStrings = {\n    addToCart: {{ 'products.product.add_to_cart' | t | json }},\n    soldOut: {{ 'products.product.sold_out' | t | json }},\n    unavailable: {{ 'products.product.unavailable' | t | json }}\n  }\n</script>\n\n{% assign current_variant = product.selected_or_first_available_variant %}\n\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"http://schema.org/\",\n  \"@type\": \"Product\",\n  \"name\": {{ product.title | json }},\n  \"url\": {{ shop.url | append: product.url | json }},\n  {%- if product.featured_media -%}\n    {%- assign media_size = product.featured_media.preview_image.width | append: 'x' -%}\n    \"media\": [\n      {{ product.featured_media | img_url: media_size | prepend: \"https:\" | json }}\n    ],\n  {%- endif -%}\n  \"description\": {{ product.description | strip_html | json }},\n  {%- if current_variant.sku != blank -%}\n    \"sku\": {{ current_variant.sku | json }},\n  {%- endif -%}\n  \"brand\": {\n    \"@type\": \"Thing\",\n    \"name\": {{ product.vendor | json }}\n  },\n  \"offers\": [\n    {%- for variant in product.variants -%}\n      {\n        \"@type\" : \"Offer\",\n        {%- if variant.sku != blank -%}\n          \"sku\": {{ variant.sku | json }},\n        {%- endif -%}\n        \"availability\" : \"http://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}\",\n        \"price\" : {{ variant.price | divided_by: 100.00 | json }},\n        \"priceCurrency\" : {{ cart.currency.iso_code | json }},\n        \"url\" : {{ shop.url | append: variant.url | json }}\n      }{% unless forloop.last %},{% endunless %}\n    {%- endfor -%}\n  ]\n}\n</script>\n
 * 
 * 
 */