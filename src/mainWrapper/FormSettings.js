import React, { Component } from 'react';

class FormSettings extends Component {
    render() {
        return (
            <div className="form-group"> 
            <p>Here's how your order form will look like</p>
             <p className="text-muted">You may add, edit, drag'n'drop and remove fields on this page</p>
           <hr/>
           {/* Form placement */}
           <div>
           <h6>Form placement</h6>
            <div className="form-check">
            <input type="radio" name="placement_radio" className="form-check-input" id="disable_placement"/>
            <label htmlFor="disable_placement">Disable</label>
            </div>
            <div className="form-check">
            <input type="radio" name="placement_radio" className="form-check-input" id="placement_product"/>
            <label htmlFor="placement_product">Enabled on Product page only</label>
            </div>
            <div className="form-check">
            <input type="radio" name="placement_radio" className="form-check-input" id="placement_cart"/>
            <label htmlFor="placement_cart">Enabled on Cart page only</label>
            </div>
            <div className="form-check">
            <input type="radio" name="placement_radio" className="form-check-input" id="placement_both"/>
            <label htmlFor="placement_both">Enabled on both Product and Cart pages</label>
            </div>
           </div>
           <hr/>
            {/* END Form placement */}
           {/* NOTICE */}

              <label htmlFor="notice">Notice</label>
              <textarea name="notice" id="" cols="30" rows="10" className="form-control"></textarea>
              <hr/>
            {/* end Notice */}
            {/* More options */}
            <div>
            <input type="checkbox" className="form-check-input " name="reloading" id="reloading"/>
            <label htmlFor="reloading">Reload page while closing Order popup</label> 
         </div>
         <div>
            <input type="checkbox" className="form-check-input" name="draft" id="draft"/>
            <label htmlFor="reloading" className="form-check-label">Create Draft orders</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="single_product" id="single_product"/>
            <label htmlFor="single_product" className="form-check-label">Allow single-product purchase only</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="show_selected_product" id="show_selected_product"/>
            <label htmlFor="show_selected_product" className="form-check-label">Show selected list of Products in the Popup</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="show_vendor" id="show_vendor"/>
            <label htmlFor="show_vendor" className="form-check-label">Show Vendor in the Popup</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="form_error" id="form_error"/>
            <label htmlFor="form_error" className="form-check-label">Enable form error tooltips</label> 
</div>

            <div className="form-check">
            <input type="radio" name="saving_radio" className="form-check-input" id="order_additionals_detail"/>
            <label htmlFor="order_additionals_detail">Order additional details</label>

            <input type="radio" name="saving_radio" className="form-check-input" id="order_notes"/>
            <label htmlFor="placement_both">Order notes</label>
            </div>
            <hr/>
           {/* END more options */}

           {/*  Form messages  */}
            <label htmlFor="header_text">Form header text</label>
            <input type="text" className="form-control" value="Submit Your Order"/>

            <label htmlFor="button_text">Button text</label>
            <input type="color" className="form-control" value="Submit Inquiry"/>

            <label htmlFor="button color">Form header text</label>
            <input type="text" className="form-control" value="Submit Your Order"/>
            <hr/>
           {/* END form messages */}

           {/* Extra settings */}
           <label htmlFor="custom_styles">Custom styles</label>
            <textarea name="custom_styles" id="custom_styles" cols="30" rows="10" className="form-control"></textarea>

            <label htmlFor="facebook_pixel">Facebook pixel code</label>
            <textarea name="facebook_pixel" id="facebook_pixel" cols="30" rows="10" className="form-control"></textarea>
            <label htmlFor="thank_you_popup">Custom HTML for THANKS YOU popup</label>
            <textarea name="thank_you_popup" id="thank_you_popup" cols="30" rows="10" className="form-control"></textarea>
            <hr/>
           {/*END Extra settings */}

           <button className="btn btn-success float-right mt-4">Save</button>

            </div>
        );
    }
}

export default FormSettings;
