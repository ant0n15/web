//Author: Antonis Lamprou
import React from 'react'
import Button from '@material-ui/core/Button';


const Orders = ({ data, customer_data, product_data }) => {
    return (
    <div>
        <div className="header">Delivery List</div>

        {data.map((item) => (
        
        <div key={item.id + item._id} className="flexi">
            <div key={item._id} className="card">
                <div className="left">
                    <div className="card-body">
                        <h5 className="card-title">Order id: {item.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Date/Time: {item.date}</h6>
                        <p className="card-text">Customer Address: {customer_data[0].address}</p>
                        <p className="card-text">Store Address: 333 Avenue</p>
                        <p className="card-text">Status: {item.order_status}</p>
                    </div>
                </div>
                <div className="right">
                    <div><b>Products</b><br></br> {product_data[0].name} <br></br> {product_data[1].name}</div>
                </div>

                <Button className="btn" variant="contained" color="primary">Deliver</Button>
                <div width='10px'><font color="#F0FFFF">...</font></div>
                <Button className="btn" variant="contained" color="secondary">Cancel</Button>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Orders