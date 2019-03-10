import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
	onKeyUp=(e,item)=>{
		if(e.keyCode === 13){
			if(item.cartUnit <= 0){
				//change pop
				this.props.cartData.pop();
			}
			this.props.handleFocus("search");
		}
	}
	againChangeQuantity=(e)=>{
		this.props.handleFocus("item");
	}
	productUnit=(val,item, index)=>{
		if(val.target.value >item.availableUnit){
			val.target.value = item.availableUnit
			alert('DONT HAVE');
		}
		if(val.target.value <0){
			val.target.value = 0;
		}
		this.props.productUnit(val,item,index);
	}
	render(){
		return (
			<div className="customer_products_table">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Brand</th>
							<th>Product</th>
							<th>Weight</th>
							<th>Expiry Date</th>
							<th>Price</th>
							<th>Discount</th>
							<th>Total</th>
							<th>Quantity</th>
							<th>Remove</th>
						</tr>
					</thead>
					{this.props.cartData.map((item,index)=>{
						return(
							<tbody key={item.id}>
								<tr>
									<td>{index+1}</td>
									<td>{item.brand}</td>
									<td>{item.name}</td>
									<td>{item.weight}{item.mesureIn}</td>
									<td>{item.expiryDate}</td>
									<td>{item.price}</td>
									<td>{((item.price*item.discount)/100)}</td>
									<td>{(item.cartUnit*item.price-((item.price*item.discount)/100)*item.cartUnit)}</td>
									<td>
										<input
											type="number"
											defaultValue="1"
											onClick={(e)=>this.againChangeQuantity(e)}
											onChange={(val)=>this.productUnit(val,item,index)}
											onKeyUp={(e)=>this.onKeyUp(e,item)}
											ref = {ip=> {this.foc3 = ip}}
											autoFocus
										/>
									</td>
									<td><button onClick={()=>this.props.removeSpecificProduct(item,index)}>X</button></td>
								</tr>
							</tbody>
						)
					})}
				</table>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{
		productUnit : (e,item, i)=>{
			const action ={ type: 'PRODUCT_UNIT',pass: item, val : e.currentTarget.value, index : i}
			dispatch(action);
		},
		removeSpecificProduct :(item, i)=>{
			const action ={type:'REMOVE_SPECIFIC_PRODUCT', pass : item, index : i}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);