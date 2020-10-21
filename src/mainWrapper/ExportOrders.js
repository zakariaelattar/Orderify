import React, { Component } from 'react';

class ExportOrders extends Component {
    render() {
        return (
            <div>
                <p>To export orders to XLS file you could use our partner app, Order Export Pro.

To export order data in Order Export Pro settings create a new row with "repeater" type (note_attributes) and following content:

[name]: [value]</p>
            </div>
        );
    }
}

export default ExportOrders;
