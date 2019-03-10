import React, { Component } from 'react';
import './mainRoute.css';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import Home from '../home/Home';
import LeftPanel from '../mainRoute/LeftPanel';
import Customer from '../customer/Customer';
import Vendor from '../vendor/Vendor';
import Settings from '../settings/Settings';
import CustomerForm from '../customer/CustomerForm';

class MainRoute extends Component {
	searchResultClose=()=>{
		this.props.addToState({searchData :[], searchInputValue: "",focusedLine : 0});
	}
	render() {
		return (
			<div className="main_route" 
			onClick={this.searchResultClose}
			>
				<LeftPanel/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/customer' component={Customer}/>
					<Route path='/customer/form' component={CustomerForm}/>
					<Route path='/vendor/' component={Vendor}/>
					<Route path='/settings' component={Settings}/>
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
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainRoute));