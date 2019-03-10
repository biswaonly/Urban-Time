import React, { Component } from 'react'
import './customer.css';
import { withRouter } from 'react-router-dom';
import ItemList from './ItemList';
import SearchNAdd from './SearchNAdd';

class CustomerProducts extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchFocus: true,
			itemFocus: false
		}
	}
	handleFocus = (type) => {
		if(type === "search"){
			this.setState({
				searchFocus: true,
				itemFocus: false
			})
		}
		else if(type === "item"){
			this.setState({
				searchFocus: false,
				itemFocus: true
			})
		}
	}
	
	render() {
		return (
			<div className="customer_products">
				<ItemList
					itemFocus={this.state.itemFocus}
					handleFocus={this.handleFocus}
				/>
				<SearchNAdd
					searchFocus={this.state.searchFocus}
					handleFocus={this.handleFocus}
				/>
			</div>
		)
	}
}

export default withRouter(CustomerProducts);