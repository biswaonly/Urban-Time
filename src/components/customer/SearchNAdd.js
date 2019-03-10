import React, { Component } from 'react';
import './customer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchNAdd extends Component {
	isFocused = true;
	componentWillReceiveProps(prev, next){
		if(prev.searchFocus && !this.isFocused){
			this.foc.focus();
			this.isFocused = !this.isFocused;
		}
	}

	onKeyDown=(e)=>{
		if(e.keyCode === 13){
			if(this.props.searchData.length === 0 && this.props.cartData.length > 0){
				this.buttonSubmit.focus();
			}
			if(this.props.searchData.length > 0){
				this.props.handleFocus("item");
			}
			this.foc.blur();
			this.isFocused = !this.isFocused;
		}
		if(this.props.searchData.length > 0){
			this.props.onKeyDown(e);
		}
	}
	buttonSubmitClicked=()=>{
		if(this.props.cartData.length > 0 && this.props.customerInfo){
			this.props.history.push('/customer/form')
		}
		if(this.props.cartData.length > 0 && !this.props.customerInfo){
			this.props.buttonSubmitClicked();
		}
	}
	render() {
		console.log(this.props.customerInfo);
		
		return (
			<div className="customer_products_search">
				<input
					type="text" placeholder="Find Products..."
					onChange={this.props.searchProducts}
					value={this.props.searchInputValue}
					onKeyDown={(e)=>this.onKeyDown(e)}
					ref={ip=> {this.foc = ip}}
					autoFocus
				>
				</input>
				<button 
					className="submit_btn"
					ref={btn=> {this.buttonSubmit = btn}}
					onClick={()=>this.buttonSubmitClicked()}
				>SUBMITT</button>
				<div className="search_item_list">
					{this.props.searchData.map(item=>{
						if(item.availableUnit > 0){
							let index = this.props.searchData.findIndex(e=>{return e.id === item.id})
							return(
								<div className={(index === this.props.focusedLine)?"search_result_active":"search_result"} key={item.id} onClick={()=>this.props.addToCart(item)}>
									<div className="search_result_brand"><p>{item.brand}</p></div>
									<div className="search_result_name"><p>{item.name}</p></div>
								</div>
							)
						}else{
							return(null)
						}
					})}
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
		searchProducts : (e)=>{
			const action ={ type: 'SEARCH_PRODUCTS', pass : e.currentTarget.value}
			dispatch(action);
		},
		addToCart : (i)=>{
			const action ={ type: 'ADD_TO_CART', pass : i}
			dispatch(action);
		},
		onKeyDown : (i)=>{
			const action ={ type: 'DOWN_BTN_CLICKED', pass : i}
			dispatch(action);
		},
		buttonSubmitClicked :()=>{
			const action ={ type: 'BUTTON_SUBMIT_CLICKED'}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchNAdd));