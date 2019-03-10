import React, { Component } from 'react';
import './mainRoute.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LeftPanel extends Component {
	homeClicked=()=>{
		this.props.history.push('/');
	}
	customerClicked=()=>{
		this.props.history.push('/customer');
	}
	vendorClicked=()=>{
		this.props.history.push('/vendor');
	}
	settingsClicked=()=>{
		this.props.history.push('/settings');
	}
	render() {
		return (
			<div className="left_panel">
				<div className="left_panel_logo">
					<h1>The Logo</h1>
				</div>
				<div className="left_panel_component" onClick={this.homeClicked}>Home</div>
				<div className="left_panel_component" onClick={this.customerClicked}>Customers</div>
				<div className="left_panel_component" onClick={this.vendorClicked}>Vendor</div>
				<div className="left_panel_component">Transactions</div>
				<div className="left_panel_component" onClick={this.settingsClicked}>Settings</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftPanel));