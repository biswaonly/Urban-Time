import React, { Component } from 'react';
import './vendor.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddNew extends Component {
	constructor(props){
		super(props);
		this.state ={
			productName : '',
			brandName : '',
			quantity : undefined,
			weight : undefined,
			weightType : '',
			printPrice : undefined,
			discount : undefined,
			expireDate : undefined,
			barCode : undefined,
			keys : undefined
		}
	}
	discountRs =()=>{
		this.props.addToState({ipDiscount : [true,false]})
	}
	discountPercentage=()=>{
		this.props.addToState({ipDiscount : [false,true]})
	}
	addValToState =(e,val)=>{
		this.setState({
			[val] : e.target.value
		})
	}
	goToNext = (e,val)=>{
		if(e.keyCode === 13){
			switch (val) {
				case "productName":
					this.refBrandName.focus();
					break;
				case "brandName":
					this.refQuantity.focus();
					break;
				case "quantity":
					this.refWeight.focus();
					break;
				case "weight":
					this.refPrintPrice.focus();
					break;
				case "printPrice":
					this.refDiscount.focus();
					break;
				case "discount":
					this.refExpireDate.focus();
					break;
				case "expireDate":
					this.refBarCode.focus();
					break;
				case "barCode":
					this.refSubmit.focus();
					break;
				default:
					break;
			}
		}
	}
	lol=(e)=>{
		if(this.state.weightType.length>0){
			let b = this.props.ipUnit.flatMap(e=> Object.keys(e));
			let z = b.map((e)=>{
				return {[e] : false}
			})
			this.props.addToState({ipUnit : [...z]})
		}
	}
	handleBtn =(i)=>{
		if(this.state.weightType.length === 0){
			let b = this.props.ipUnit.flatMap(e=> Object.keys(e));
			let z = b.map((e, ii)=>{
				if(i === ii){
					return{[e] : true}
				}else
					return {[e] : false}
			})
			this.props.addToState({ipUnit : [...z]})
		}
	}
	submitForm=()=>{
		if(this.state.productName.length > 0 && this.state.brandName.length > 0){
			
		}
	}
	render() {
		const {
			state : { discount , printPrice }
		}= this;
		let go;
		if(printPrice > 0){
			if(discount > 0){
				go = (
					<div>
						{(this.props.ipDiscount[0]?this.state.printPrice-this.state.discount:this.state.printPrice-(this.state.printPrice*this.state.discount/100))}
					</div>
				)
			}
			else{
				go=(
					<div>
						{this.state.printPrice}
					</div>
				)
			}
		}else{
			go=(
				<div>0</div>
			)
		}
		return (
			<div className="add_new">
				<div className="search_item_list">
					{this.props.searchData.map(item=>{
						if(item.availableUnit > 0){
							let index = this.props.searchData.findIndex(e=>{return e.id === item.id})
							return(
								<div className={(index === this.props.focusedLine)?"search_result_active":"search_result"} key={item.id} onClick={()=>this.props.addToCart(item)}>
									<div className="search_result_brand"><p>{item.brand}</p></div>
									<div className="search_result_name"><p>{item.name}</p></div>
								</div>
							)
						}else{
							return(null)
						}
					})}
				</div>

				<div className="">
					<div className="product_input">
						<p>Product Name</p>
						<input
							className="capitalize"
							type="text"
							ref={ip=>this.refProductName = ip}
							onKeyUp={(e)=>this.goToNext(e,"productName")}
							onChange={(e)=>this.addValToState(e,"productName")}
							autoFocus
						></input>
					</div>
					<div className="product_input">
						<p>Brand Name</p>
						<input
							className="capitalize"
							type="text"
							ref={ip=>this.refBrandName = ip}
							onKeyUp={(e)=>this.goToNext(e,"brandName")}
							onChange={(e)=>this.addValToState(e,"brandName")}
						></input>
					</div>
					<div className="product_input">
						<p>Product Quantity</p>
						<input
							type="number"
							// min="0"
							// step="1"
							// pattern="[\d]{9}"
							// maxlength="12"
							// min="10"
							// max="12"
							ref={ip=>this.refQuantity = ip}
							onKeyUp={(e)=>this.goToNext(e,"quantity")}
							onChange={(e)=>this.addValToState(e,"quantity")}
						></input>
					</div>
					<div className="product_input">
						<p>Weight</p>
						<input
							type="number"
							ref={ip=>this.refWeight = ip}
							onKeyUp={(e)=>this.goToNext(e,"weight")}
							onChange={(e)=>this.addValToState(e,"weight")}
						></input>
						{this.props.ipUnit.map((item,index)=>{
							return(
								<button
									key={index}
									className={(Object.values(item)[0])?"active":null}
									onClick={()=>this.handleBtn(index)}
								>{Object.keys(item)[0]}</button>
							)
						})}
						<input
							onChange={(e)=>this.addValToState(e,"productUnit")}
							ref={ip=>this.refProductUnit = ip}
							onKeyUp={(e)=>this.lol(e)}
						></input>
					</div>
					<div className="product_input">
						<p>Print Price</p>
						<input
							type="number"
							ref={ip=>this.refPrintPrice = ip}
							onKeyUp={(e)=>this.goToNext(e,"printPrice")}
							onChange={(e)=>this.addValToState(e,"printPrice")}
						></input>
					</div>
					<div className="product_input">
						<p>Discount</p>
						<input
							type="number"
							ref={ip=>this.refDiscount = ip}
							onKeyUp={(e)=>this.goToNext(e,"discount")}
							onChange={(e)=>this.addValToState(e,"discount")}
						></input>
						<button className={(this.props.ipDiscount[0])?"active":null} onClick={this.discountRs}>Rs.</button>
						<button className={(this.props.ipDiscount[1])?"active":null} onClick={this.discountPercentage}>%</button>
						{go}
					</div>
					<div className="product_input">
						<p>Expire Date</p>
						<input
							type="date"
							ref={ip=>this.refExpireDate = ip}
							onKeyUp={(e)=>this.goToNext(e,"expireDate")}
							onChange={(e)=>this.addValToState(e,"expireDate")}
						></input>
					</div>
					<div className="product_input">
						<p>BarCode</p>
						<input
							type="number	"
							ref={ip=>this.refBarCode = ip}
							onKeyUp={(e)=>this.goToNext(e,"barCode")}
							onChange={(e)=>this.addValToState(e,"barCode")}
						></input>
					</div>
					<button ref={ip=>this.refSubmit = ip} onClick={this.submitForm}>SUBMIT</button>
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddNew));