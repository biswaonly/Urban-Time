import React, { Component } from 'react';
import './vendor.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ChoiceList extends Component {
	render() {
		return (
			<div className="add_new">
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChoiceList));