import * as actionTypes from './actions';

const emptyStore = {
  title: "Burger King",
  ingredients: [
    {type:"Salad", cost:1},
    {type:"Bacon", cost:0.5},
    {type:"Meat", cost:5},
    {type:"Cheese", cost:2}
  ],
  BreadTopCost: 3,
  BreadBottomCost: 1,
  orders: []
};

const reducer = (state = emptyStore, action) => {
	switch(action.type){
		case actionTypes.PURCHASE:
			return {
				...state,
				orders: state.orders.concat(action.order)
			}
			
		default: return state;
	}
};

export default reducer;