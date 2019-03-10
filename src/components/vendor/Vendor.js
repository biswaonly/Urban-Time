import React, { Component } from 'react';
import './vendor.css';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import AddNew from './AddNew';
import AllItemsList from './AllItemsList';
import VendorHeader from './VendorHeader';
import AvailableList from './AvailableList';
import ChoiceList from './ChoiceList';

class Vendor extends Component {
	render() {
		return (
			<div className="vendor">

				<VendorHeader />

				<Switch>
					<Route exact path='/vendor' component={AddNew} />
					<Route path='/vendor/all-items-list' component={AllItemsList} />
					<Route path='/vendor/available' component={AvailableList} />
					<Route path='/vendor/chose' component={ChoiceList} />
				</Switch>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Vendor));