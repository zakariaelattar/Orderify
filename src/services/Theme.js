const axios = require("axios");
const jsdom = require("jsdom");
const db = require("../models");
const fs = require("fs");
const { getArgumentValues } = require("graphql/execution/values");
const { JSDOM } = jsdom;
const GET_ASSET_ENDPOINT = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid';
const PUT_ASSET_ENDPOINT = 'https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json';
const form = db.form;
var shopRequestHeaders;
var ressourceUtils = require('../utils/resources.utils');

// product.liquid asset
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=templates/product.liquid
//https://mystoreofdev.myshopify.com/admin/api/2020-10/assets.json?asset[key]=sections/product-template.liquid

var MODAL_CODE;

// get modal code from database
// get web product page from shopify
// run the page as a DOM with JSdom
// extract the buy now and add to cart code
// replace it with modal code
// append the code to the parent file
// send file throught PUT request


const mergeFormModal = (formHTML) => {
  let MODAL_CODE_CHUNK_1 = fs.readFileSync("public/modal_chunk_1.html","utf-8");
  let MODAL_CODE_CHUNK_2 = fs.readFileSync("public/modal_chunk_2.html","utf-8");
  MODAL_CODE =  MODAL_CODE_CHUNK_1+formHTML+MODAL_CODE_CHUNK_2;
}
// const getModalFormDB =  async() => {
//   x= await form.findAll();
//   console.log(convertBlobToString(x[0].dataValues.htmlCode));
// }
exports.saveModalInDatabase = (formHTML) => {
  mergeFormModal(formHTML);
  form.create({
    id:null,
    active:0,
    htmlCode:MODAL_CODE,
    innerCode:formHTML,
    createdAt:null,
    updatedAt:null,
    shopId:1
  })
  .then(() => {
    console.log("generated code in database");
  })
  .catch((err) => {
    console.log("some error occured");
  })
}
exports.saveSettingsInDatabase = (settings) => {
    form.findOne(
      {
        where:
        {
          shopId:'1'
      }
    }
    )
  .then((data)=> {
    data.update({
        settings:settings
    }).then(() => {
      console.log("updated settings");
    })
    .catch((err) => {
      console.log("some error occured");
    })

  })
  .catch((err) => {
    console.log("error while searching for appropriate shop");
  })
 
}

/** 
get product page from shopify
*/
const getProductPage = async (url,header) => {
  return axios.get(url,{ headers: header });

}
const putProductPage = async (url,header,page_code) => {
  return 
  axios.put(url,
   {  
       "asset": {
         "key": "sections/product-template.liquid",
         "value":page_code
       }
     },
    { headers: header }
);

}
exports.exportModal = async (req,res) => {

        let access_token = req.headers["x-shopify-access-token"];
        shopRequestHeaders = {'X-Shopify-Access-Token': access_token};
        saveModalInDatabase(req.body.formHTML);
       // getModalFormDB();
        getProductPage(GET_ASSET_ENDPOINT,shopRequestHeaders)
                .then((shopify_response) => {

              string_product_page = shopify_response.data.asset.value
             
              let dom_product_page =  bindResponseToDom(string_product_page);
              let block = extractAddCartCode(dom_product_page);
              block.innerHTML = MODAL_CODE;

              let page_body = dom_product_page.window.document.getElementsByTagName("BODY")[0].innerHTML;
              let final_code = correctingDocument(page_body);

              save(final_code,access_token);
             
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
  return extractElementFromDocument(dom,"product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}");
  
}
/** 
extracting by className from document
*/
const extractElementFromDocument = (dom, className) => {
  return dom.window.document.getElementsByClassName(className)[0];

}
/**  
replace the code with the built code
*/
const replaceCode = (modal_code, original_code) => {
  dom.window.document.getElementsByClassName("product-form__item product-form__item--submit{% if section.settings.enable_payment_button %} product-form__item--payment-button{% endif %}{% if product.has_only_default_variant %} product-form__item--no-variants{% endif %}")[0].innerHTML = modalCode;

}
/** 
correcting document
*/
const correctingDocument = (html) => {
return html
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
}

/** 
create a backup of the product page for a futur usage
*/
const createBackup = () => {

}
/** 
save the product page and send it to shopify
*/
const save = async (htmlCode,accessToken) => {
  let access_token = accessToken;
  putProductPage(PUT_ASSET_ENDPOINT,
     { headers: shopRequestHeaders },
      htmlCode) 
      .then((response) => {
        console.log("content added successfully !!")    
        console.log(response);
      })
      .catch((err) => {
        console.log("error occured")    
          console.log(err);
      })
  // fs.writeFile("block.liquid",htmlCode,
  // () =>{
  //       console.log("yes");
  //     });
}

