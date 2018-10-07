import React, { Component } from 'react';
import BurgerPreview from './burgerPreview';
import IngredientControllerItem from './ingredientControllerItem';

class OrderSummary extends Component {

	checkout(e){
		e.preventDefault();
		let customer = this.refs.customer.value;
		this.props.checkout(customer);
	}

	render(){
		return(
			<div className="order-summary">
				<h2><span>Summary</span></h2>
				<form onSubmit={this.checkout.bind(this)}>
					<div className="customer d-flex">
						<label htmlFor="customer" className="font-weight-bold mb-0 h6 lh-38 font-family-roboto">Customer: </label>
						<input name="customer" id="customer" className="inputs customer-in ml-2 to-flex" ref="customer" placeholder="Customer Name" required />
					</div>
					<div className="order-summary-preview row">
						<BurgerPreview layers={this.props.layers} />
						<div className="col-md-5">
							<IngredientControllerItem key={-1} layerIndex={-1} type="Bread Top" ingCost={this.props.breadTopCost.toFixed(2)} />
							{this.props.layers.map((ingredient, index) => <IngredientControllerItem key={index} layerIndex={index} type={ingredient.layer} ingCost={ingredient.cost.toFixed(2)} />)}
							<IngredientControllerItem key={-2} layerIndex={-2} type="Bread Bottom" ingCost={this.props.breadBottomCost.toFixed(2)} />
							<div className="d-flex border-top mt-2 pt-1"><span className="to-flex font-weight-bold h5">total</span><span className="mr-3 ml-3">{this.props.totalCost.toFixed(2)}</span></div>
						</div>
					</div>
					<div className="control-btns">
						<span className="text-danger dismiss-btn" onClick={(e) => {this.props.dismiss(e)}}>cancel</span>
						<button type="submit" className="checkout-btn">checkout</button>
					</div>
				</form>
			</div>
		);
	}
}

export default OrderSummary;