import React, { Component } from 'react';
import './vendor.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class AvailableList extends Component {
	render() {
		return (
			<div className="all_items_list">
				<div className="every_items">
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
								<th>Selling Price</th>
								<th>Quantity</th>
							</tr>
						</thead>
						{this.props.data.map((item,index)=>{
							if(item.availableUnit > 0)
							{
								return(
									<tbody key={item.id}>
										<tr>
											<td>{index}</td>
											<td>{item.brand}</td>
											<td>{item.name}</td>
											<td>{item.weight}{item.mesureIn}</td>
											<td>{item.expiryDate}</td>
											<td>{item.price}</td>
											<td>{((item.price*item.discount)/100)}</td>
											<td>{item.price-((item.price*item.discount)/100)}</td>
											<td>{item.availableUnit}</td>
										</tr>
									</tbody>
								)
							}else{
								return(null)
							}
						})}
					</table>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AvailableList));