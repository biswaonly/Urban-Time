import React, { Component } from 'react';
import './vendor.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class VendorHeader extends Component {
	constructor(props){
		super(props);
		this.state={
			vendorOptions : ["Add New","All Items","Available","Your Choice"]
		}
	}
	changeVendorRoute=(item)=>{
		switch (item) {
			case "Add New":
				return this.props.history.push('/vendor');
			case "All Items":
				return this.props.history.push('/vendor/all-items-list');
			case "Available":
				return this.props.history.push('/vendor/available');
			case "Your Choice":
				return this.props.history.push('/vendor/chose');
			default:
				return this.props.history.push('/vendor');
		}
	}
	render() {
		return (
			<div className="vendor_header">

				{this.state.vendorOptions.map((item,index)=>{
					return(
						<div className="vendor_header_opt" key={index} onClick={()=>this.changeVendorRoute(item)}>
							<p>{item}</p>
						</div>
					)
				})}

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VendorHeader));