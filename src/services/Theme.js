const axios = require("axios");
const jsdom = require("jsdom");
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
   axios.get(shopRequestUrl, { headers: shopRequestHeaders })
    .then((shopResponse) => {
        const dom = new JSDOM(shopResponse.data.asset.value);
       // console.log(shopResponse.data.asset.value);
        console.log(dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML); // "Hello world"
        var strMessage1 = dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML;
        strMessage1.innerHTML = strMessage1.innerHTML
                                .replace(/aaaaaa./g,'<a href=\"http://www.google.com/')
                                .replace(/.bbbbbb/g,'/world\">Helloworld</a>');
        //console.log(shopResponse.data.asset.value);
    })
    .catch((error) => {
        console.log(error);
    });

}

exports.addModal = (req,res) => {
    let old_html;
    let new_html;
    let modal_code = ''

    let access_token = req.headers["x-shopify-access-token"];
    console.log("melo :"+access_token);

    const shopRequestUrl = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid';
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

/**
 * 
 * {% comment %}\n  The contents of the product.liquid template can be found in /sections/product-template.liquid\n{% endcomment %}\n\n{% section 'product-template' %}\n\n<script>\n  // Override default values of shop.strings for each template.\n  // Alternate product templates can change values of\n  // add to cart button, sold out, and unavailable states here.\n  theme.productStrings = {\n    addToCart: {{ 'products.product.add_to_cart' | t | json }},\n    soldOut: {{ 'products.product.sold_out' | t | json }},\n    unavailable: {{ 'products.product.unavailable' | t | json }}\n  }\n</script>\n\n{% assign current_variant = product.selected_or_first_available_variant %}\n\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"http://schema.org/\",\n  \"@type\": \"Product\",\n  \"name\": {{ product.title | json }},\n  \"url\": {{ shop.url | append: product.url | json }},\n  {%- if product.featured_media -%}\n    {%- assign media_size = product.featured_media.preview_image.width | append: 'x' -%}\n    \"media\": [\n      {{ product.featured_media | img_url: media_size | prepend: \"https:\" | json }}\n    ],\n  {%- endif -%}\n  \"description\": {{ product.description | strip_html | json }},\n  {%- if current_variant.sku != blank -%}\n    \"sku\": {{ current_variant.sku | json }},\n  {%- endif -%}\n  \"brand\": {\n    \"@type\": \"Thing\",\n    \"name\": {{ product.vendor | json }}\n  },\n  \"offers\": [\n    {%- for variant in product.variants -%}\n      {\n        \"@type\" : \"Offer\",\n        {%- if variant.sku != blank -%}\n          \"sku\": {{ variant.sku | json }},\n        {%- endif -%}\n        \"availability\" : \"http://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}\",\n        \"price\" : {{ variant.price | divided_by: 100.00 | json }},\n        \"priceCurrency\" : {{ cart.currency.iso_code | json }},\n        \"url\" : {{ shop.url | append: variant.url | json }}\n      }{% unless forloop.last %},{% endunless %}\n    {%- endfor -%}\n  ]\n}\n</script>\n
 * 
 * 
 */