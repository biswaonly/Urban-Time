import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="home">
				HOME
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));