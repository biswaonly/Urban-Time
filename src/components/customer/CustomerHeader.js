import React, { Component } from 'react'
import './customer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CustomerHeader extends Component {
	takeCustomerDetails=()=>{
		this.props.history.push('/customer/form')
	}
	render() {
		return (
			<div className="customer_header">
				<div className="customer_discard">
					<button>Discard</button>
				</div>
				<div className="customer_name">
					<h2>Generate Bill</h2>
				</div>
				<div className="customer_details">
					<button className={this.props.customerInfo?"hide":""} onClick={this.takeCustomerDetails}>Customer Details</button>
				</div>
				<div className="customer_total">
					<p>{this.props.cartTotalPrice}</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerHeader));