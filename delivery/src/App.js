//Author: Antonis Lamprou
import React, { Component } from 'react';
import Orders from './components/orders';
class App extends Component {

  constructor() {
    super();
  
    // ... existing constructor code
  
    this.loadData = this.loadData.bind(this)
  }
  
  state = {
    data: [],
    customer_data: [],
    product_data: []
  }
  
  loadData(){
    fetch('https://aqueous-thicket-50958.herokuapp.com/api/v1/orders/1/confirmed')
    .then(res => res.json())
    .then((data) => {
      this.setState({ data })
    })
    .catch(console.log)

    //TODO: customer id
    fetch('https://aqueous-thicket-50958.herokuapp.com/api/v1/customers/1')
    .then(res => res.json())
    .then(customer_data => {
      this.setState({ customer_data })
    })

    //TODO: category id
    fetch('https://aqueous-thicket-50958.herokuapp.com/api/v1/products/1')
    .then(res => res.json())
    .then(product_data => {
      this.setState({ product_data })
    })
  }

  componentDidMount() {
    setInterval(this.loadData, 4000); 
  }

  render() {
    return (
      <Orders product_data={this.state.product_data} customer_data={this.state.customer_data} data={this.state.data} />
    )
  }
}

export default App;
