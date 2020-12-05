import React, { Component } from 'react';

class FormSettings extends Component {
constructor(props) {
    super(props);
    this.state={
        settings : this.props.formSettings
    };
  
}

    handleFormPlacementChange = (e) => {
        this.state.settings.form_placement = e.target.value;
    }
    handleNoticeChange = (e) => {
        this.state.settings.notice = e.target.value;

    }
    handleReloadPageAfterCloseChange = (e) => {
        this.state.settings.reload_page_while_closing_order_popup = e.target.value;

        console.log(e.target.value);
    }
    handleFormHeaderChange = (e) => {
        this.state.settings.form_header = e.target.value;
        console.log(e.target.value);
    }
    handleCreateDraftOrderseChange = (e) => {
        this.state.settings.create_draft_order = e.target.value;
    }
    handleSubmitButtonChange = (e) => {

        this.state.settings.submit_button_text = e.target.value;
    }
    HandleAllowSingleProductPurshaseOnlyChange = (e) => {
        this.state.settings.allow_single_product_pushase_only = e.target.value;
    }
    handleShowSelectedListOfProductsInThePopupChange = (e) => {
        this.state.settings.show_selected_list_of_products_in_the_popup = e.target.value;
    }
    handleShowVendorInThePopupChange = (e) => {
        this.state.settings.show_vendor_in_the_popup = e.target.value;
    }
    // handleButtonColorTextChange = (e) => {
    //     console.log(e.target.value);
    // }
    handleCustomHtmlForThankYouPopupChange = (e) => {
        this.state.settings.custom_html_for_thank_you_popup = e.target.value;

    }
    handleFecebookPixelCodepChange = (e) => {
        this.state.settings.facebook_pixel_code = e.target.value;

    }
    saveSettings = (e) => {
        console.log(this.state.settings);
    }

    render() {
        return (
            <div className="form-group"> 
           
             <p className="text-muted">You can set different values of your form to look as you want.</p>
           <hr/>
           {/* Form placement */}
           <div>
           <h6>Form placement</h6>
            <select name="" id="" className="form-control" onChange={this.handleFormPlacementChange}>
                <option value="disable_placement">Disable</option>
                <option value="enable_on_product_page_only">Enabled on Product page only</option>
                <option value="enabled_on_cart_page_only">Enabled on Cart page only</option>
                <option value="enable_on_both">Enabled on both Product and Cart pages</option>
                <option value=""></option>
            </select>

           </div>
           <hr/>
            {/* END Form placement */}
           {/* NOTICE */}

              <label htmlFor="notice">Notice</label>
              <textarea name="notice" id="" cols="30" rows="10" onChange={this.handleNoticeChange} className="form-control"></textarea>
              <hr/>
            {/* end Notice */}
            {/* More options */}
            <div>
            <input type="checkbox" className="form-check-input " name="reloading" id="reloading" onChange={this.handleReloadPageAfterCloseChange}/>
            <label htmlFor="reloading">Reload page while closing Order popup</label> 
         </div>
         <div>
            <input type="checkbox" className="form-check-input" name="draft" id="draft" onChange={this.handleCreateDraftOrderseChange}/>
            <label htmlFor="draft_orders" className="form-check-label">Create Draft orders</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="single_product" id="single_product" onChange={this.HandleAllowSingleProductPurshaseOnlyChange}/>
            <label htmlFor="single_product" className="form-check-label">Allow single-product purchase only</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="show_selected_product" id="show_selected_product" onChange={this.handleShowSelectedListOfProductsInThePopupChange}/>
            <label htmlFor="show_selected_product" className="form-check-label">Show selected list of Products in the Popup</label> 
</div>
<div>
            <input type="checkbox" className="form-check-input" name="show_vendor" id="show_vendor" onChange={this.handleShowVendorInThePopupChange}/>
            <label htmlFor="show_vendor" className="form-check-label">Show Vendor in the Popup</label> 
</div>

            <hr/>
           {/* END more options */}

           {/*  Form messages  */}

            <label htmlFor="button_text">Button text</label>
            <input type="text" className="form-control"  onChange={this.handleSubmitButtonChange}  placeholder="Submit Inquiry"/>

            <label htmlFor="button color">Form header text</label>
            <input type="text" className="form-control" onChange={this.handleFormHeaderChange} placeholder={this.state.settings.form_header}/>
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

           <button className="btn btn-success float-right mt-4" onClick={this.saveSettings}>Save</button>

            </div>
        );
    }
}

export default FormSettings;
