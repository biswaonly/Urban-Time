import { createStore } from 'redux';

const data = require('../data/data.json');

const initialState ={
  data : data,
  searchData : [],
  cartData : [],
  removedData : [],
  focusedLine : 0,
  searchInputValue: "",
  val : 1,
  cartTotalPrice : 0,
  customerInfo : true,
  ipUnit : [{ml: true},{l : false},{g : false},{kg : false}],
  ipDiscount : [true,false]
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'ADD_TO_STATE':
      return Object.assign({}, state, {...action.value})
    case "ADD_TO_CART":
      let pp = Object.assign({}, action.pass, {cartUnit : state.val})
      let aa = [...state.cartData];
      aa.push(pp);
      let total = 0;
      for (let i = 0; i < aa.length; i++) {
        total = total + (aa[i].cartUnit * aa[i].price)- (((aa[i].discount * aa[i].price)/100)*aa[i].cartUnit);
      }
      return Object.assign({}, state, {cartData :[...aa], searchInputValue: "", focusedLine : 0, cartTotalPrice : total});
    case "SEARCH_PRODUCTS":
      let primary_search = [];
      for(let i= 0; i < state.data.length; i++){
        if(action.pass === ""){
          primary_search = [];
        }
        else if(state.cartData.find(e=>{return e.id === state.data[i].id})){
        }
        else if((state.data[i].brand.toLowerCase().match(/\b(\w)/g).join("").includes(action.pass.toLowerCase()))){
          primary_search.push(state.data[i])
        }
        else if((state.data[i].brand.toLowerCase().includes(action.pass.toLowerCase()))){
          primary_search.push(state.data[i])
        }
        else if((state.data[i].name.toLowerCase().includes(action.pass.toLowerCase()))){
          primary_search.push(state.data[i])
        }
        else if((state.data[i].barcode.toString().includes(action.pass.toLowerCase()))){
          primary_search.push(state.data[i])
        }
      }
      return Object.assign({}, state, {searchData :[...primary_search], searchInputValue: action.pass});
    // case "SEARCH_RESULT_CLOSE":
    //   return Object.assign({}, state, {searchData :[], searchInputValue: ""});
    case "DOWN_BTN_CLICKED":
      if(action.pass.keyCode===40){
        if(state.focusedLine === state.searchData.length-1){
          return Object.assign({}, state);
        }
        state.focusedLine +=1;
      }
      if(action.pass.keyCode===38){
        if(state.focusedLine === 0){
          return Object.assign({}, state);
        }
        state.focusedLine -=1;
      }
      if(action.pass.keyCode===13){
        if(state.searchData.length === 0){
          return Object.assign({}, state);
        }
        let pp = Object.assign({},state.searchData[state.focusedLine],{cartUnit : state.val})
        let aa=[...state.cartData];
        aa.push(pp);
        let total = 0;
        for (let i = 0; i < aa.length; i++) {
          total = total + (aa[i].cartUnit * aa[i].price)- (((aa[i].discount * aa[i].price)/100)*aa[i].cartUnit);
        }
        return Object.assign({}, state, {cartData :[...aa], searchInputValue: "", focusedLine : 0,searchData :[],cartTotalPrice : total});
      }
      return Object.assign({}, state);
    case 'PRODUCT_UNIT':
      let aaa=[...state.cartData];
      let ppp = Object.assign({},state.cartData[action.index],{cartUnit : action.val})
      aaa.splice(action.index,1,ppp);
      let totall = 0;
      for (let i = 0; i < aaa.length; i++) {
        totall = totall + (aaa[i].cartUnit * aaa[i].price)- (((aaa[i].discount * aaa[i].price)/100)*aaa[i].cartUnit);
      }
      return Object.assign({}, state, { cartData : [...aaa], cartTotalPrice : totall});
    case 'REMOVE_SPECIFIC_PRODUCT':
      let aaaa=[...state.cartData];
      aaaa.splice(action.index,1);
      state.removedData.push(action.pass);
      let totalll = 0;
      for (let i = 0; i < aaaa.length; i++) {
        totalll = totalll + (aaaa[i].cartUnit * aaaa[i].price)- (((aaaa[i].discount * aaaa[i].price)/100)*aaaa[i].cartUnit);
      }
      return Object.assign({}, state, { cartData : [...aaaa], cartTotalPrice : totalll});
    case 'BUTTON_SUBMIT_CLICKED':
      // console.log("SUBMIT AGAIN");
      
      //PRINT BILL
      let j = {id: 12, phNum: 1231, name: null,address: null, date : null, time: null}
      let k = Object.assign({}, j,{cartItems : state.cartData});
      console.log(k);
      break;
    case 'UPDATE_UNIT_NAME':
      // let b = this.props.ipUnit.flatMap(e=> Object.keys(e));
      // console.log(b);
      
      let z = action.pass.map((e)=>{
          return{[e] : false}
      })
      // console.log("ZZ=",z);
    
      // this.props.addToState({ipUnit : [...z]})

      return Object.assign({}, state,{ipUnit : [...z]});

    default:
      return state
  }
}

const store = createStore(reducer);

export default store;