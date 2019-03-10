import React, { Component } from 'react'
import './customer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CustomerForm extends Component {
	constructor(props){
		super(props);
		this.state={
			mobileNumber : "",
			customerName : "",
			homeLocation : ""
		}
	}
	closeCustomerForm=()=>{
		this.props.history.push('/customer')
	}
	mapDispatchToProps=()=>{
		this.props.history.push('/customer')
		this.props.buttonSubmitClicked();
	}
	goToName=(e)=>{
		if(e.keyCode === 13){
			this.mobName.focus();
		}
		if(e.keyCode === 27){
			this.props.history.push('/customer')
		}
	}
	takeMobNumber=(e)=>{
		this.setState({
			mobileNumber : e.target.value
		})
	}
	goToAddress=(e)=>{
		if(e.keyCode === 13){
			this.mobLoc.focus();
		}
	}
	takeCustomerName=(e)=>{
		this.setState({
			customerName : e.target.value
		})
	}
	submitForm=(e)=>{
		if(e.keyCode === 13){
			this.submitButton.focus();
		}
	}
	takeCustomerLocation=(e)=>{
		this.setState({
			homeLocation : e.target.value
		})
	}
	render() {
		console.log(this.state.mobileNumber);
		
		return (
			<div className="customer_form">
				<div className="customer_form_body">
					<button className="customer_form_close" onClick={this.closeCustomerForm}>X</button>
					{/* <form> */}
						<div className="customer_form_m">
							<p>Mob Number</p>
							<input
								type="number"
								// pattern=""
								minLength="10"
								maxLength="12"
								onKeyDown={(e)=>this.goToName(e)}
								onChange={(e)=>{this.takeMobNumber(e)}}
								autoFocus
							></input>
							<div>{this.state.mobileNumber.length}</div>
						</div>
						<div className="customer_form_m">
							<p>Customer Name</p>
							<input
								type="text"
								pattern="/^[A-Z][a-z0-9_-]{3,19}$/"
								ref = {ip=> {this.mobName = ip}}
								onKeyDown={(e)=>this.goToAddress(e)}
								onChange={(e)=>{this.takeCustomerName(e)}}
							></input>
						</div>
						<div className="customer_form_m">
							<p>Home Location</p>
							<input
								type="text"
								ref = {ip=> {this.mobLoc = ip}}
								onKeyDown={(e)=>this.submitForm(e)}
								onChange={(e)=>{this.takeCustomerLocation(e)}}
							></input>
						</div>
						<button
							onClick={this.mapDispatchToProps}
							ref = {btn=> {this.submitButton = btn}}
						>SUBMIT</button>
					{/* </form> */}
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
		buttonSubmitClicked :()=>{
			const action ={ type: 'BUTTON_SUBMIT_CLICKED'}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerForm));