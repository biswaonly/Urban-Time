import React, { Component } from 'react'
import './customer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CustomerItemCo extends Component {
	render() {
		return (
			<div className="customer_item_co">
				<div className="customer_item_sort_by">
					<select>
						<option>Sort by Name</option>
						<option>Sort by Price</option>
						<option>Sort by Brand</option>
					</select>
				</div>
				<div className="customer_item_search_bar">
					<input type="text" placeholder="Find Item..."></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerItemCo));