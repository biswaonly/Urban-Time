import React, { Component } from 'react';
import './customer.css';
import CustomerHeader from './CustomerHeader';
import CustomerItemCo from './CustomerItemCo';
import CustomerProducts from './CustomerProducts';

class Customer extends Component {
	render() {
		return (
			<div className="customer">
				<CustomerHeader />
				<CustomerItemCo />
				<CustomerProducts />
			</div>
		)
	}
}

export default Customer;