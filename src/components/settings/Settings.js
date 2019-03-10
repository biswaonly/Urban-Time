import React, { Component } from 'react';
import './settings.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Settings extends Component {
	constructor(props){
		super(props);
		let v = this.props.ipUnit.map(e=> Object.keys(e)).flat();
		this.state={
			abcd : '',
			c : v
		}
	}
	customerInfoOn=()=>{
		this.props.addToState({customerInfo : true});
	}
	customerInfoOff=()=>{
		this.props.addToState({customerInfo : false});
	}
	hhh =(e)=>{
		this.setState({
			abcd : e.target.value
		})
	}
	updateUnitName=()=>{
		if(!this.state.c.some(e=>e===this.state.abcd)){
			this.state.c.shift();
			this.state.c.push(this.state.abcd);
		}
		this.props.updateUnitName(this.state.c);
	}
	render() {
		return (
			<div className="settings">
				<div className="customer_info">
					<p>Take Customer Info</p>
					<button className={this.props.customerInfo?"customer_info_btn active":"customer_info_btn"} onClick={this.customerInfoOn}>ON</button>
					<button className={this.props.customerInfo?"customer_info_btn":"customer_info_btn active"} onClick={this.customerInfoOff}>OFF</button>
				</div>
				<div>
					<p>Take Product Measure Unit</p>
					<input onChange={(e)=>this.hhh(e)}></input>
					<button onClick={this.updateUnitName}>Update</button>
					{this.state.c.map((item, index)=>{
						return <button key={index}>{item}</button>
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
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		},
		updateUnitName : (val)=>{
			const action={type : "UPDATE_UNIT_NAME", pass : val}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Settings));